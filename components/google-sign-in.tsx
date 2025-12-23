'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

interface GoogleSignInProps {
  onSuccess: (accessToken: string, email: string) => void;
  onError?: () => void;
}

export function GoogleSignInButton({ onSuccess, onError }: GoogleSignInProps) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const [isLoading, setIsLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        setIsLoading(true);
        // Get user info using the access token
        const userInfoResponse = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        const userInfo = await userInfoResponse.json();

        onSuccess(tokenResponse.access_token, userInfo.email);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to get user info:', error);
        setIsLoading(false);
        onError?.();
      }
    },
    onError: () => {
      console.error('Login Failed');
      setIsLoading(false);
      onError?.();
    },
    scope:
      'https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.email',
  });

  // Show fallback if no client ID is configured
  if (!clientId) {
    return (
      <button
        className="btn btn-secondary"
        onClick={() => {
          alert(
            'Google OAuth is not configured.\n\n' +
              'Please follow the setup guide in GMAIL_SETUP.md to:\n' +
              '1. Create a Google Cloud Project\n' +
              '2. Get OAuth credentials\n' +
              '3. Add them to .env.local\n' +
              '4. Restart the dev server'
          );
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ width: '20px', height: '20px', marginRight: '8px' }}
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
        Setup Google Sign-In
      </button>
    );
  }

  return (
    <button
      onClick={() => login()}
      className="btn btn-primary"
      disabled={isLoading}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 20px',
      }}
    >
      <svg
        width="18"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
      </svg>
      {isLoading ? 'Signing in...' : 'Sign in with Google'}
    </button>
  );
}

interface GoogleAuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  userEmail: string | null;
}

export function useGoogleAuth() {
  const [authState, setAuthState] = useState<GoogleAuthState>({
    isAuthenticated: false,
    accessToken: null,
    userEmail: null,
  });

  const handleSignIn = (accessToken: string, email: string) => {
    setAuthState({
      isAuthenticated: true,
      accessToken,
      userEmail: email,
    });

    // Store in localStorage for persistence
    localStorage.setItem('gmail_access_token', accessToken);
    localStorage.setItem('gmail_user_email', email);

    console.log('Successfully signed in:', email);
  };

  const handleSignOut = () => {
    setAuthState({
      isAuthenticated: false,
      accessToken: null,
      userEmail: null,
    });
    localStorage.removeItem('gmail_access_token');
    localStorage.removeItem('gmail_user_email');
  };

  // Check for existing session on mount
  const checkExistingSession = () => {
    const token = localStorage.getItem('gmail_access_token');
    const email = localStorage.getItem('gmail_user_email');

    if (token && email) {
      setAuthState({
        isAuthenticated: true,
        accessToken: token,
        userEmail: email,
      });
    }
  };

  return {
    ...authState,
    handleSignIn,
    handleSignOut,
    checkExistingSession,
  };
}
