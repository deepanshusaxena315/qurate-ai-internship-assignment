// app/layout.tsx
import "./globals.css"
import { Sora } from "next/font/google"
import Footer from "@/components/footer"
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
      <body className="bg-black text-white relative">
        <DynamicHeader  />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
