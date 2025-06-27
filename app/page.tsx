"use client"

import Image from "next/image"

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Conversations, not clicks.</h1>
        <p className="text-lg md:text-xl max-w-xl text-gray-300">
          Qurate AI helps you collect and understand information through intelligent, human-like dialogue.
        </p>
      </div>
    </div>
  )
}
