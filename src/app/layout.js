"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import "./global.css"

export default function RootLayout({ children }) {
  const pathname = usePathname()
  
 return (
    <html lang="en">
      <body>
      <Link href="/docs" className={pathname =="/docs" ? "font-bold text-yellow-500 mr-3" : "text-blue-500 mr-3"}>
        Docs
      </Link>
      <Link href="/login" className={pathname =="/login"  ? "font-bold text-yellow-500 mr-3" : "text-blue-500 mr-3"} >Login</Link>
        {children}</body>
    </html>
  )
}
