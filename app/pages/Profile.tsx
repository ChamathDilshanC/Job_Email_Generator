'use client';

import { useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'Chamath Dilshan',
    email: 'chamath.dilshan@gmail.com',
    phone: '+94 71 234 5678',
    location: 'Colombo, Sri Lanka',
    title: 'Software Engineer',
    bio: 'Passionate software developer with 5+ years of experience in full-stack development.',
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#3b3be3] to-[#3b3be3] bg-clip-text text-transparent">
          Profile
        </h1>
        <p className="text-gray-500">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="grid grid-cols-[300px_1fr] gap-6">
        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <div className="relative w-30 h-30 mx-auto mb-6">
              <div className="w-30 h-30 rounded-full bg-gradient-to-br from-[#3b3be3] to-[#3b3be3] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="w-15 h-15"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <button className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-[#3b3be3] border-3 border-white flex items-center justify-center transition-transform hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="w-4.5 h-4.5"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
            <p className="text-sm text-gray-500 mb-6">{profile.title}</p>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3b3be3]">24</div>
                <div className="text-xs text-gray-500 mt-1">Emails Sent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3b3be3]">8</div>
                <div className="text-xs text-gray-500 mt-1">Responses</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-base font-semibold mb-4">Quick Actions</h3>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 bg-transparent border border-gray-200 rounded-lg transition-all hover:bg-blue-50 hover:border-[#3b3be3] hover:text-[#3b3be3] text-sm mb-2 group">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#3b3be3]"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send New Email
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 bg-transparent border border-gray-200 rounded-lg transition-all hover:bg-blue-50 hover:border-[#3b3be3] hover:text-[#3b3be3] text-sm group">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#3b3be3]"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Update Resume
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={e =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value={profile.title}
                    onChange={e =>
                      setProfile({ ...profile, title: e.target.value })
                    }
                    className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={e =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={e =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                    className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={e =>
                    setProfile({ ...profile, location: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  Professional Bio
                </label>
                <textarea
                  rows={4}
                  value={profile.bio}
                  onChange={e =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                />
              </div>

              <div className="flex gap-4 justify-end mt-2">
                <button className="px-6 py-3 rounded-lg font-medium text-sm transition-all bg-transparent text-gray-600 border border-gray-200 hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-6 py-3 rounded-lg font-medium text-sm transition-all bg-[#3b3be3] text-white hover:bg-[#2f2fb8] hover:scale-105">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-6">Social Links</h2>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  LinkedIn
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  GitHub
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/username"
                  className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm transition-all focus:outline-none focus:border-[#3b3be3] focus:ring-3 focus:ring-blue-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
