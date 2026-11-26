import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Farhan Husen, S.Kom. // Portofolio",
  description:
    "Portofolio Muhammad Farhan Husen, S.Kom. — Lulusan S1 Teknologi Informasi dengan fokus Pengembangan Web (PHP/Laravel & Python/Flask), Software Testing, Pengolahan Data, dan Machine Learning (XAI).",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>
}
