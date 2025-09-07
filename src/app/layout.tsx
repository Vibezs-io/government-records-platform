import './globals.css'

export const metadata = {
  title: 'Government Records Platform',
  description: 'Government Records Platform - AI-powered enterprise platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}