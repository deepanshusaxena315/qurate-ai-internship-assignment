"use client"

import { useRouter } from 'next/navigation'

export default function Header({ variant }: { variant?: string }) {
    const router = useRouter()

    const handleLogout = () => {
        router.push('/')
    }

    const handleLogin = () => {
        router.push('/login')
    }

    const handleSignup = () => {
        router.push('/login')
    }

    if (variant === "landing") {
      return (
        <header className="p-6 bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm absolute w-full z-40 flex justify-between items-center border-b border-white/10">
          <h1 className="text-white text-3xl font-bold tracking-tight hover:text-gray-200 transition-colors duration-200">
            Qurate AI
          </h1>
          <div className="flex items-center gap-6">
            <button 
              onClick={handleLogin}
              className="text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium"
            >
              Login
            </button>
            <button 
              onClick={handleSignup}
              className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
            >
              Signup
            </button>
          </div>
        </header>
      )
    }
  
    if (variant === "dashboard") {
      return (
        <header className="p-6 bg-gradient-to-b from-gray-800/95 to-quaternary/90 backdrop-blur-md border-b border-gray-700/50 shadow-xl flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300">
            Qurate Dashboard
          </h1>
          <div className="flex items-center gap-6">
            <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium border border-transparent hover:border-white/20">
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
              className="bg-gradient-to-r from-rose-900 to-rose-700 text-white px-6 py-2 rounded-lg hover:from-rose-700 hover:to-rose-900 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl border border-red-400/30"
            >
              Logout
            </button>
          </div>
        </header>
      )
    }
  
    return null
  }
  