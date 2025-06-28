import Link from "next/link"
import { MessageCircleMore, ShieldEllipsis } from "lucide-react"

export default function Dashboard() {
  return (
    <div className=" p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Welcome back !</h1>
          <p className="text-lg text-gray-400">Explore the tools below</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/audio-chat" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-indigo-900/60 p-16 pb-19 h-84 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-indigo-700/20"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <MessageCircleMore className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white/80 text-sm font-medium">AI Chat</div>
                </div>
                
                <div className="space-y-3 ">
                  <h3 className="text-2xl font-bold text-white pt-2">Audio Chat</h3>
                  <p className="text-white/70 leading-relaxed">
                    Experience intelligent conversations with our AI assistant. 
                    Get instant answers, creative solutions, and engaging discussions 
                    powered by advanced language models.
                  </p>
                </div>
                
                <div className="flex items-center text-white/80 text-sm font-medium ">
                  <span>Start chatting</span>
                  <div className="ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/admin" className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/60 via-emerald-900/60 to-teal-900/60  p-16 pb-19 h-84 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-600/20 to-teal-700/20"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <ShieldEllipsis className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white/80 text-sm font-medium">Admin Panel</div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white pt-2">Admin Dashboard</h3>
                  <p className="text-white/70 leading-relaxed">
                    Manage your application settings, monitor system performance, 
                    and control user access. Complete administrative control 
                    with powerful management tools.
                  </p>
                </div>
                
                <div className="flex items-center text-white/80 text-sm font-medium">
                  <span>Access admin</span>
                  <div className="ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
