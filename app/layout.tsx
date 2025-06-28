// app/layout.tsx
import "./globals.css"
import { Sora } from "next/font/google"
import ConditionalFooter from "@/components/ConditionalFooter"
import DynamicHeader from "@/components/DynamicHeader"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick what you need
  variable: "--font-sora",       // optional: for Tailwind
})

export const metadata = {
  title: "Qurate AI",
  description: "Qurate AI helps you collect and understand information through intelligent, human-like dialogue.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.className}>
      <body className="text-white  flex flex-col min-h-screen">
        <DynamicHeader />
        <main className="flex-1 bg-gradient-to-br from-quinary to-gray-950/90">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  )
}
