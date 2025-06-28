"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const MinimalHeader = () => {
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
  }

  const handleLogin = () => {
    router.push('/login')
  }

  return (
    <div className='flex justify-between items-center p-6 bg-gradient-to-b from-gray-800/95 to-quaternary/90 backdrop-blur-md border-b border-gray-700/50 shadow-xl'>
        <h1>Qurate AI</h1>
        <div className='flex gap-4'>
            <button 
              onClick={handleLogin}
              className='bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl'
            >
              Login
            </button>
            <button 
              onClick={handleLogout}
              className='bg-gradient-to-r from-rose-700 to-rose-900 text-white px-4 py-2 rounded-lg hover:from-rose-900 hover:to-rose-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl border border-red-400/30'
            >
              Logout
            </button>
        </div>
    </div>
  )
}

export default MinimalHeader