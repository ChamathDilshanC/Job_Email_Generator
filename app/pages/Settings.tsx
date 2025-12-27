'use client';

import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    emailSignature: true,
    autoSave: true,
    notifications: true,
    darkMode: false,
    language: 'en',
    emailClient: 'gmail',
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">
          Customize your experience and manage application preferences
        </p>
      </div>

      <div className="settings-layout">
        <div className="settings-section">
          <h2 className="section-title">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Settings
          </h2>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Default Email Client</div>
              <div className="setting-description">
                Choose your preferred email client for sending applications
              </div>
            </div>
            <select
              className="setting-select"
              value={settings.emailClient}
              onChange={e =>
                setSettings({ ...settings, emailClient: e.target.value })
              }
            >
              <option value="gmail">Gmail</option>
              <option value="outlook">Outlook</option>
            </select>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Email Signature</div>
              <div className="setting-description">
                Automatically add your signature to emails
              </div>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.emailSignature}
                onChange={e =>
                  setSettings({ ...settings, emailSignature: e.target.checked })
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Auto-save Drafts</div>
              <div className="setting-description">
                Automatically save your email drafts as you type
              </div>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={e =>
                  setSettings({ ...settings, autoSave: e.target.checked })
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            Notifications
          </h2>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Email Notifications</div>
              <div className="setting-description">
                Receive notifications about email responses and updates
              </div>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={e =>
                  setSettings({ ...settings, notifications: e.target.checked })
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            Appearance
          </h2>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Dark Mode</div>
              <div className="setting-description">
                Switch between light and dark theme
              </div>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={e =>
                  setSettings({ ...settings, darkMode: e.target.checked })
                }
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Language</div>
              <div className="setting-description">
                Choose your preferred language
              </div>
            </div>
            <select
              className="setting-select"
              value={settings.language}
              onChange={e =>
                setSettings({ ...settings, language: e.target.value })
              }
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="section-title">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6" />
              <path d="M17 12h6M1 12h6" />
            </svg>
            Advanced
          </h2>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Clear Cache</div>
              <div className="setting-description">
                Clear application cache and temporary data
              </div>
            </div>
            <button className="btn btn-secondary">Clear Cache</button>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-label">Export Data</div>
              <div className="setting-description">
                Download all your data in JSON format
              </div>
            </div>
            <button className="btn btn-secondary">Export</button>
          </div>

          <div className="setting-item danger">
            <div className="setting-info">
              <div className="setting-label">Delete Account</div>
              <div className="setting-description">
                Permanently delete your account and all data
              </div>
            </div>
            <button className="btn btn-danger">Delete Account</button>
          </div>
        </div>
      </div>

      <div className="settings-footer">
        <button className="btn btn-secondary">Reset to Defaults</button>
        <button className="btn btn-primary">Save Changes</button>
      </div>

      <style jsx>{`
        .page-container {
          padding: 2rem;
          max-width: 900px;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          color: var(--text-muted);
          font-size: 1rem;
        }

        .settings-layout {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .settings-section {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }

        .section-title svg {
          width: 20px;
          height: 20px;
          color: var(--primary);
        }

        .setting-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 0;
          border-bottom: 1px solid var(--border);
        }

        .setting-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .setting-item:first-child {
          padding-top: 0;
        }

        .setting-item.danger {
          border-color: #ef444420;
        }

        .setting-info {
          flex: 1;
        }

        .setting-label {
          font-size: 0.9375rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .setting-description {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .setting-select {
          padding: 0.5rem 1rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--input-bg);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .setting-select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-light);
        }

        .toggle {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 26px;
        }

        .toggle input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--border);
          transition: 0.3s;
          border-radius: 34px;
        }

        .toggle-slider:before {
          position: absolute;
          content: '';
          height: 18px;
          width: 18px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        .toggle input:checked + .toggle-slider {
          background-color: var(--primary);
        }

        .toggle input:checked + .toggle-slider:before {
          transform: translateX(22px);
        }

        .settings-footer {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-size: 0.875rem;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: scale(1.02);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          background: var(--bg-secondary);
        }

        .btn-danger {
          background: #ef4444;
          color: white;
        }

        .btn-danger:hover {
          background: #dc2626;
        }
      `}</style>
    </div>
  );
}
