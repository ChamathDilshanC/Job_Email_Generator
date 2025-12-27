'use client';

import { useState } from 'react';

export default function EmailTemplates() {
  const [templates] = useState([
    {
      id: 1,
      name: 'Professional Introduction',
      subject: 'Application for {Position} - {Your Name}',
      preview:
        'Dear Hiring Manager, I am writing to express my strong interest...',
      category: 'Application',
    },
    {
      id: 2,
      name: 'Follow-up Email',
      subject: 'Following up on {Position} Application',
      preview: 'I hope this email finds you well. I wanted to follow up...',
      category: 'Follow-up',
    },
    {
      id: 3,
      name: 'Thank You Note',
      subject: 'Thank You - {Position} Interview',
      preview: 'Thank you for taking the time to meet with me today...',
      category: 'Thank You',
    },
  ]);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#3b3be3] to-[#3b3be3] bg-clip-text text-transparent">
          Email Templates
        </h1>
        <p className="text-gray-500">
          Pre-built templates to help you craft professional job application
          emails
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(template => (
          <div
            key={template.id}
            className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#3b3be3]"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#3b3be3] rounded-full text-xs font-semibold mb-2">
                {template.category}
              </span>
              <h3 className="text-xl font-semibold my-2">{template.name}</h3>
            </div>
            <div className="mb-6">
              <p className="text-sm mb-2 text-gray-600">
                <strong>Subject:</strong> {template.subject}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {template.preview}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 bg-transparent text-[#3b3be3] border border-[#3b3be3] hover:bg-blue-50">
                Preview
              </button>
              <button className="flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 bg-[#3b3be3] text-white hover:bg-[#2f2fb8] hover:scale-105">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
