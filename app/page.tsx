'use client';

import NextImage from 'next/image';
import SendEmail from './pages/SendEmail';

export default function Home() {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar animate-slide-in">
        <div className="sidebar-header">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.5rem',
            }}
          >
            <NextImage
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              style={{ borderRadius: '8px' }}
            />
            <div>
              <div className="sidebar-title">Email Generator</div>
              <div className="sidebar-subtitle">
                Professional Job Applications
              </div>
            </div>
          </div>
        </div>

        <nav
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <div className="nav-item active">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Send Email
          </div>

          <div className="nav-item">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Templates
          </div>

          <div className="nav-item">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            History
          </div>

          <div className="nav-item">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Profile
          </div>

          <div className="nav-item">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Settings
          </div>

          <div
            style={{
              marginTop: 'auto',
              paddingTop: '20px',
              textAlign: 'center',
            }}
          >
            <NextImage
              src="/logosm.png"
              alt="Logo"
              width={150}
              height={150}
              style={{
                margin: '0 auto',
                display: 'block',
              }}
            />
            <p
              className="text-center text-xs"
              style={{ marginTop: '10px', opacity: 0.7, userSelect: 'none' }}
            >
              Developed by Chamath Dilshan .
            </p>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <SendEmail />

        <footer
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            userSelect: 'none',
          }}
        >
          <p>
            Built with ❤️ by Chamath Dilshan •{' '}
            <a
              href="https://chamathdilshan.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)' }}
            >
              Portfolio
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
