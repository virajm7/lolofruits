import './globals.css'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
// import AnimatedLogo from '../components/animatedlogo' // Import the animated logo

export const metadata = {
  title: 'LOLO by Barkati Fruits',
  description: 'Landing page for LOLO by Barkati Fruits',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar scrolled={true} /> */}
        
        {children}
      </body>
    </html> 
  )
}