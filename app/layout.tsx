import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "M. Farhan Husen // Portfolio",
  description: "Portfolio of Muhammad Farhan Husen, Information Technology fresh graduate and web developer.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
