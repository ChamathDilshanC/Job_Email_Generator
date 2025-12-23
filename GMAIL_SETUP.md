# Gmail API Setup Guide

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter project name: "Job Email Generator"
4. Click "Create"

## Step 2: Enable Gmail API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Gmail API"
3. Click "Gmail API" → "Enable"

## Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure OAuth consent screen:

   - User Type: **External**
   - App name: **Job Email Generator**
   - User support email: Your email
   - Developer contact: Your email
   - Scopes: Add `https://www.googleapis.com/auth/gmail.send`
   - Test users: Add your email
   - Click "Save and Continue"

4. Create OAuth Client ID:

   - Application type: **Web application**
   - Name: **Job Email Generator Web Client**
   - Authorized JavaScript origins:
     - `http://localhost:3001`
   - Authorized redirect URIs:
     - `http://localhost:3001`
   - Click "Create"

5. **Copy your credentials:**
   - Client ID: `xxxxx.apps.googleusercontent.com`
   - Client Secret: `xxxxx`

## Step 4: Configure Environment Variables

1. Create `.env.local` file in project root (if not exists)
2. Add your credentials:

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id_here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret_here
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3001
```

3. **Important:** Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 5: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Step 6: Test the Integration

1. Open `http://localhost:3001`
2. Click "Sign in with Google" button
3. Select your Google account
4. Grant Gmail send permission
5. Fill out the form
6. Upload CV and Cover Letter
7. Click "Send"
8. Check recipient's inbox for email with attachments!

## Troubleshooting

### "Access blocked" error

- Make sure you added your email as a test user in OAuth consent screen
- Check that Gmail API is enabled

### "redirect_uri_mismatch" error

- Verify `http://localhost:3001` is in Authorized redirect URIs
- Make sure `.env.local` has correct `NEXT_PUBLIC_REDIRECT_URI`

### "Invalid client" error

- Double-check Client ID and Client Secret in `.env.local`
- Ensure no extra spaces or quotes

### Files not attaching

- Check file size (Gmail limit: 25MB)
- Verify file types are PDF, DOC, or DOCX

## Production Deployment

For production (e.g., Vercel, Netlify):

1. Add production URL to Authorized JavaScript origins and redirect URIs
2. Update `.env.local` → `.env.production`:
   ```env
   NEXT_PUBLIC_REDIRECT_URI=https://yourdomain.com
   ```
3. Submit OAuth app for verification (required for >100 users)

## Security Notes

- Access tokens are stored in browser localStorage
- Tokens expire after 1 hour (automatic refresh needed for longer sessions)
- Never expose Client Secret in frontend code
- Consider implementing server-side token refresh for production
