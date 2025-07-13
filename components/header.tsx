"use client"

import { useRouter } from 'next/navigation'
    import { motion } from "framer-motion";


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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
      className="p-4 sm:pb-4 absolute w-full z-40 flex justify-between items-center "
    >
      <h1 className="text-white text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors duration-200 pl-6">
        Qurate AI
      </h1>
      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 pr-6">
        <button
          onClick={handleLogin}
          className="text-white/90 hover:text-white px-2 sm:px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium text-sm sm:text-base"
        >
          Login
        </button>
        <button
          onClick={handleSignup}
          className="bg-white text-black px-3 sm:px-6 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          Signup
        </button>
      </div>
    </motion.header>
  );
}

  
    if (variant === "dashboard") {
      return (
        <header className="p-4 sm:p-6 bg-quinary backdrop-blur-md border-b border-gray-700/50 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <h1 className="text-white text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300">
            Qurate Dashboard
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 w-full sm:w-auto">
            <button className="text-gray-300 hover:text-white px-2 sm:px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium border border-transparent hover:border-white/20 text-xs sm:text-sm">
              Dashboard
            </button>
            <button className="text-gray-300 hover:text-white px-2 sm:px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium border border-transparent hover:border-white/20 text-xs sm:text-sm">
              Your Chats
            </button>
            <button className="text-gray-300 hover:text-white px-2 sm:px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium border border-transparent hover:border-white/20 text-xs sm:text-sm">
              Settings
            </button>
            <button 
              onClick={handleLogout}
              className="bg-gradient-to-r from-rose-900 to-rose-700 text-white px-3 sm:px-6 py-2 rounded-lg hover:from-rose-700 hover:to-rose-900 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl border border-red-400/30 text-xs sm:text-sm"
            >
              Logout
            </button>
          </div>
        </header>
      )
    }
  
    return null
  }
  