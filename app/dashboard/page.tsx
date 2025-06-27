import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="...">
      <h1>Welcome back</h1>
      <p>Explore the tools below</p>
      
      <div className="flex gap-4 mt-6">
        <Link href="/audio-chat">
          <div className="card">📞 Phone Call</div>
        </Link>
        <Link href="/admin">
          <div className="card">🛠️ Admin Panel</div>
        </Link>
      </div>
    </div>
  )
}
