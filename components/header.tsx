export default function Header({ variant }: { variant?: string }) {
    if (variant === "landing") {
      return (
        <header className="p-4 bg-transparent absolute w-full z-20 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Qurate AI</h1>
          <div className="flex items-center gap-4">
            <button className="text-white">Login</button>
            <button className="text-white">Signup</button>
          </div>
        </header>
      )
    }
  
    if (variant === "dashboard") {
      return (
        <header className="p-4 bg-gray-900 shadow-md flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Qurate Dashboard</h1>
          <button className="text-white">Logout</button>
        </header>
      )
    }
  
    return null
  }
  