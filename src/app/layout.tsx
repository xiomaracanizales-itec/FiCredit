import type { Metadata} from "next"
import { Plus_Jakarta_Sans, Inter} from "next/font/google"
import "./globals.css"

// fuente H1 - H4
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"]
})

// fuente cuerpo
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
})

export const metadata: Metadata = {
  title: "FiCredit - Soluciones Financieras",
  description: "Soluciones financieras transparentes con tasas competitivas en Guatemala."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="font-body bg-pale-sky text-night-blue antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}