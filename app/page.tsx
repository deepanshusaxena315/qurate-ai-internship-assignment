"use client"

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const learnMoreRef = useRef<HTMLDivElement>(null)

  const scrollToLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-full">
      {/* Hero Section */}
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
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Foreground content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center h-full px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            Conversations, not clicks.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl max-w-2xl text-gray-300 drop-shadow-md leading-relaxed mt-10"
          >
            Qurate AI transforms static forms into smart conversations — making information flow naturally.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/login">
              <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </Link>
            <button 
              onClick={scrollToLearnMore}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Learn More Section */}
      <div ref={learnMoreRef} className="bg-gradient-to-br from-quinary to-gray-950/90 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Qurate AI 
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing how businesses collect and process information through intelligent conversation interfaces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-quaternary/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 cursor-pointer"
            >
              <div className="w-12 h-12 bg-emerald-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Conversations</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform traditional forms into engaging, intelligent conversations that adapt to user responses and provide real-time assistance.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-quaternary/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 cursor-pointer"
            >
              <div className="w-12 h-12 bg-emerald-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Experience instant responses and seamless interactions powered by advanced AI technology that processes information in real-time.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-quaternary/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 cursor-pointer"
            >
              <div className="w-12 h-12 bg-emerald-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade security with end-to-end encryption ensures your data remains protected while maintaining the highest standards of reliability.
              </p>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-quaternary/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Qurate AI?</h3>
              <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Traditional forms are static and often frustrating. Qurate AI changes the game by creating dynamic, 
                intelligent conversations that guide users through complex processes naturally. Our AI understands context, 
                provides helpful suggestions, and adapts to user needs in real-time. Whether you&apos;re collecting customer feedback, 
                processing applications, or gathering data, Qurate AI makes the experience seamless and engaging.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary/60 text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-all duration-200 font-semibold">
                  Start Your Free Trial
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
