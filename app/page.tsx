'use client';

import { AlertDialog } from '@/components/alert-dialog';
import { GoogleSignInButton, useGoogleAuth } from '@/components/google-sign-in';
import JobFileUpload from '@/components/job-file-upload';
import { copyToClipboard, type EmailClient } from '@/lib/emailClient';
import { generateEmail, type EmailData } from '@/lib/emailTemplate';
import {
  fileToBase64,
  sendEmailWithAttachments,
  type GmailAttachment,
} from '@/lib/gmailClient';
import NextImage from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState<EmailData>({
    companyName: '',
    position: '',
    recipientEmail: '',
  });

  const [emailClient, setEmailClient] = useState<EmailClient>('gmail');
  const [copySuccess, setCopySuccess] = useState(false);
  const [isEditingCompany, setIsEditingCompany] = useState(false);
  const [attachments, setAttachments] = useState<{
    cv: File | null;
    coverLetter: File | null;
  }>({ cv: null, coverLetter: null });
  const [isSending, setIsSending] = useState(false);

  // Alert Dialog State
  const [alertDialog, setAlertDialog] = useState<{
    open: boolean;
    title: string;
    description: string;
    type: 'success' | 'error' | 'info' | 'warning';
  }>({ open: false, title: '', description: '', type: 'info' });

  // Google Auth
  const {
    isAuthenticated,
    accessToken,
    userEmail,
    handleSignIn,
    handleSignOut,
    checkExistingSession,
  } = useGoogleAuth();

  useEffect(() => {
    checkExistingSession();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClientChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEmailClient(e.target.value as EmailClient);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.position ||
      !formData.recipientEmail
    ) {
      setAlertDialog({
        open: true,
        title: 'Missing Information',
        description:
          'Please fill in all required fields: Company Name, Position, and Recipient Email.',
        type: 'warning',
      });
      return;
    }

    // Check if user is authenticated for Gmail API
    if (!isAuthenticated || !accessToken) {
      setAlertDialog({
        open: true,
        title: 'Authentication Required',
        description:
          'Please sign in with Google to send emails with attachments.',
        type: 'warning',
      });
      return;
    }

    setIsSending(true);

    try {
      const { subject, body } = generateEmail(formData);

      // Convert files to base64 attachments
      const attachmentsList: GmailAttachment[] = [];

      if (attachments.cv) {
        const cvBase64 = await fileToBase64(attachments.cv);
        attachmentsList.push({
          filename: attachments.cv.name,
          mimeType: attachments.cv.type,
          data: cvBase64,
        });
      }

      if (attachments.coverLetter) {
        const clBase64 = await fileToBase64(attachments.coverLetter);
        attachmentsList.push({
          filename: attachments.coverLetter.name,
          mimeType: attachments.coverLetter.type,
          data: clBase64,
        });
      }

      // Send email via Gmail API
      const result = await sendEmailWithAttachments(
        {
          to: formData.recipientEmail,
          subject,
          body,
          attachments: attachmentsList.length > 0 ? attachmentsList : undefined,
        },
        accessToken
      );

      if (result.success) {
        const attachmentText =
          attachmentsList.length > 0
            ? `\n\nAttachments included:\n${attachmentsList
                .map(a => `• ${a.filename}`)
                .join('\n')}`
            : '';

        setAlertDialog({
          open: true,
          title: 'Email Sent Successfully!',
          description: `Your email has been sent to ${formData.recipientEmail}.${attachmentText}`,
          type: 'success',
        });
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setAlertDialog({
        open: true,
        title: 'Failed to Send Email',
        description:
          error instanceof Error
            ? error.message
            : 'An unknown error occurred. Please try again.',
        type: 'error',
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleCopyEmail = async () => {
    const { subject, body } = generateEmail(formData);
    const fullEmail = `Subject: ${subject}\n\n${body}`;

    const success = await copyToClipboard(fullEmail);
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleEditCompany = () => {
    setIsEditingCompany(true);
  };

  const handleDeleteCompany = () => {
    setFormData(prev => ({
      ...prev,
      companyName: '',
    }));
    setIsEditingCompany(false);
  };

  const isFormValid =
    formData.companyName && formData.position && formData.recipientEmail;
  const generatedEmail = isFormValid ? generateEmail(formData) : null;

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
            General
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
            Services
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
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            Outlook
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
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Cancellation
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
            Delay
          </div>

          <div className="nav-item">
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Other
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
              style={{ marginTop: '10px', opacity: 0.7 }}
            >
              Developed by Chamath Dilshan .
            </p>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="page-header animate-fade-in">
          <h1 className="page-title">Services</h1>
          <p className="page-description">
            Create professional job application emails
          </p>
        </div>

        <div className="card animate-fade-in">
          <div className="card-header">
            <h2 className="card-title">Application Details</h2>
            <div className="flex items-center gap-3">
              {isAuthenticated && userEmail ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {userEmail}
                  </span>
                  <button
                    className="btn btn-secondary btn-icon"
                    onClick={handleSignOut}
                    title="Sign Out"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <GoogleSignInButton
                    onSuccess={handleSignIn}
                    onError={() => alert('Failed to sign in with Google')}
                  />
                </div>
              )}
              <button
                className="btn btn-secondary btn-icon"
                onClick={handleCopyEmail}
                disabled={!isFormValid}
                title="Copy Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {copySuccess && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={!isFormValid || !isAuthenticated || isSending}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {isSending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>

          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Field Name</th>
                  <th>Value</th>
                  <th>Email Client</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Company Name</strong>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="companyName"
                      className="form-input"
                      placeholder="e.g., Google, Microsoft"
                      value={formData.companyName}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <select
                      name="emailClient"
                      className="form-select"
                      value={emailClient}
                      onChange={handleClientChange}
                    >
                      <option value="gmail">Gmail</option>
                      <option value="outlook">Outlook</option>
                    </select>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        className="btn-icon edit"
                        onClick={handleEditCompany}
                        title="Edit company name"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button
                        className="btn-icon delete"
                        onClick={handleDeleteCompany}
                        title="Clear company name"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Position</strong>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="position"
                      className="form-input"
                      placeholder="e.g., Full Stack Developer"
                      value={formData.position}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <span className="badge">Required</span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button className="btn-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Recipient Email</strong>
                  </td>
                  <td>
                    <input
                      type="email"
                      name="recipientEmail"
                      className="form-input"
                      placeholder="e.g., hr@company.com"
                      value={formData.recipientEmail}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <span className="badge">Required</span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button className="btn-icon">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} style={{ padding: '1.5rem 1rem' }}>
                    <JobFileUpload onFilesChange={setAttachments} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Email Preview */}
          {isFormValid && generatedEmail && (
            <div className="email-preview animate-fade-in">
              <div className="email-field">
                <span className="field-label">To:</span>
                <span className="field-value">{formData.recipientEmail}</span>
              </div>
              <div className="email-field">
                <span className="field-label">Subject:</span>
                <span className="field-value">{generatedEmail.subject}</span>
              </div>
              <div className="email-body">
                <pre>{generatedEmail.body}</pre>
              </div>
            </div>
          )}
        </div>

        <footer
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
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

      {/* Alert Dialog */}
      <AlertDialog
        open={alertDialog.open}
        onOpenChange={open => setAlertDialog({ ...alertDialog, open })}
        title={alertDialog.title}
        description={alertDialog.description}
        type={alertDialog.type}
      />
    </div>
  );
}
