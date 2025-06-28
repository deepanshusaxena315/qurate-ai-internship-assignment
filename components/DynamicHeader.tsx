"use client"

import { usePathname, useRouter } from "next/navigation"
import Header from "@/components/header"
import MinimalHeader from "@/components/minimalHeader"
import { ArrowLeft } from "lucide-react"

export default function DynamicHeader() {
  const pathname = usePathname()
  const router = useRouter()

  const handleBackToDashboard = () => {
    router.push('/dashboard')
  }

  const handleLogout = () => {
    router.push('/')
  }

  if (pathname === "/login") return <MinimalHeader />
  if (pathname === "/dashboard") return <Header variant="dashboard" />
  if (pathname === "/") return <Header variant="landing" />
  if (pathname === "/audio-chat" || pathname === "/admin") {
    return (
      <header className="p-6 bg-quinary backdrop-blur-md border-b border-gray-700/50 shadow-xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 border border-transparent hover:border-white/20"
            title="Back to Dashboard"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-white text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300">
            Qurate Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={handleBackToDashboard}
            className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium border border-transparent hover:border-white/20"
          >
            Dashboard
          </button>
          <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium border border-transparent hover:border-white/20">
            Your Chats
          </button>
          <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium border border-transparent hover:border-white/20">
            Settings
          </button>
          <button 
            onClick={handleLogout}
            className="bg-gradient-to-r from-rose-900 to-rose-700 text-white px-6 py-2 rounded-lg  hover:from-rose-700 hover:to-rose-900  transition-all duration-200 font-semibold shadow-lg hover:shadow-xl border border-red-400/30"
          >
            Logout
          </button>
        </div>
      </header>
    )
  }

  // default header
  return <Header />
}
