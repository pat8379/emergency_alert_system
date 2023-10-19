import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Emergency Alert System',
  description: 'Dashboard for allocating crowds to safest exits in a fire emergency scenario',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>
          <Providers>
          {children}
          </Providers>
          </body>
      </html>
  )
}
