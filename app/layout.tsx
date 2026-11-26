import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Farhan Husen, S.Kom. // Portfolio",
  description: "Portfolio of Muhammad Farhan Husen, Information Technology graduate specializing in PHP/Laravel web development, software testing, and data processing.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
