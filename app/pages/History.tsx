'use client';

import { useState } from 'react';

interface EmailHistory {
  id: number;
  recipient: string;
  subject: string;
  date: string;
  status: 'sent' | 'failed' | 'draft';
  company: string;
}

export default function History() {
  const [history] = useState<EmailHistory[]>([
    {
      id: 1,
      recipient: 'hr@techcorp.com',
      subject: 'Application for Senior Developer Position',
      date: '2025-12-26',
      status: 'sent',
      company: 'TechCorp Inc.',
    },
    {
      id: 2,
      recipient: 'careers@innovate.io',
      subject: 'Full Stack Developer Application',
      date: '2025-12-25',
      status: 'sent',
      company: 'Innovate Solutions',
    },
    {
      id: 3,
      recipient: 'jobs@startup.com',
      subject: 'Interest in Software Engineer Role',
      date: '2025-12-24',
      status: 'draft',
      company: 'StartUp Co.',
    },
  ]);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'sent':
        return {
          bg: 'bg-green-50',
          text: 'text-green-600',
          icon: 'stroke-green-600',
        };
      case 'failed':
        return {
          bg: 'bg-red-50',
          text: 'text-red-600',
          icon: 'stroke-red-600',
        };
      case 'draft':
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-600',
          icon: 'stroke-amber-600',
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-600',
          icon: 'stroke-gray-600',
        };
    }
  };

  const getStatusIcon = (status: string) => {
    const styles = getStatusStyles(status);
    switch (status) {
      case 'sent':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`w-3.5 h-3.5 ${styles.icon}`}
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        );
      case 'failed':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`w-3.5 h-3.5 ${styles.icon}`}
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        );
      case 'draft':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`w-3.5 h-3.5 ${styles.icon}`}
            strokeWidth="2"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#3b3be3] to-[#3b3be3] bg-clip-text text-transparent">
          Email History
        </h1>
        <p className="text-gray-500">
          Track all your job application emails in one place
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold leading-none mb-1">24</div>
            <div className="text-sm text-gray-500">Total Sent</div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold leading-none mb-1">8</div>
            <div className="text-sm text-gray-500">Responses</div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold leading-none mb-1">3</div>
            <div className="text-sm text-gray-500">Drafts</div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              className="w-6 h-6"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold leading-none mb-1">12</div>
            <div className="text-sm text-gray-500">Companies</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="grid grid-cols-[120px_1fr_1fr_2fr_120px_100px] gap-4 px-6 py-4 items-center">
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Status
            </div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Company
            </div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Recipient
            </div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Subject
            </div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Date
            </div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Actions
            </div>
          </div>
        </div>

        <div>
          {history.map(item => {
            const styles = getStatusStyles(item.status);
            return (
              <div
                key={item.id}
                className="grid grid-cols-[120px_1fr_1fr_2fr_120px_100px] gap-4 px-6 py-4 items-center border-b border-gray-200 last:border-b-0 transition-colors hover:bg-gray-50"
              >
                <div>
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${styles.bg} ${styles.text}`}
                  >
                    {getStatusIcon(item.status)}
                    <span>
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="text-sm">
                  <strong>{item.company}</strong>
                </div>
                <div className="text-sm text-gray-600">{item.recipient}</div>
                <div className="text-sm text-gray-600">{item.subject}</div>
                <div className="text-sm text-gray-600">
                  {new Date(item.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="flex gap-2">
                  <button
                    className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center transition-all hover:bg-blue-50 hover:border-[#3b3be3] group"
                    title="View"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4 text-gray-400 group-hover:text-[#3b3be3]"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  <button
                    className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center transition-all hover:bg-blue-50 hover:border-[#3b3be3] group"
                    title="Delete"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4 text-gray-400 group-hover:text-[#3b3be3]"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
