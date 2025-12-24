import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JobMail - Generate professional job application emails with ease',
  description: 'Generate professional job application emails with ease',
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
