import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JobMail - Professional Job Application Emails',
  description:
    'Generate professional job application emails with AI-powered assistance. Create personalized, compelling emails for your job applications.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
