"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/header"
import MinimalHeader from "@/components/minimalHeader"

export default function DynamicHeader() {
  const pathname = usePathname()

  if (pathname === "/login") return <MinimalHeader />
  if (pathname === "/dashboard") return <Header variant="dashboard" />
  if (pathname === "/") return <Header variant="landing" />

  // default header
  return <Header />
}
