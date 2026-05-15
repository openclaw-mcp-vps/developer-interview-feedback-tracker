import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Feedback Tracker — Track & Analyze Technical Interview Patterns',
  description: 'Aggregate interview feedback from multiple companies, identify skill gaps, and track your improvement over time. Built for job-seeking developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9865de0d-0215-4c40-af2d-2d3a9314cd39"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
