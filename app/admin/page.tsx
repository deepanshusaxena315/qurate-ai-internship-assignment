"use client"

import React from 'react'
import { Plus, FileText, Clock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto bg">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Admin Dashboard
          </motion.h1>
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Manage your application forms and settings
          </motion.p>
        </motion.div>

        {/* Form Management Section */}
        <motion.div 
          className="bg-quaternary/30 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3">
              <motion.div 
                className="p-2 bg-blue-500/20 rounded-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <FileText className="h-6 w-6 text-blue-400" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-white">Form Management</h2>
            </div>
            <motion.button 
              className="flex items-center space-x-2 bg-primary/60 text-white px-4 py-2 rounded-lg hover:bg-primary/70 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="h-5 w-5" />
              <span>Create New Form</span>
            </motion.button>
          </motion.div>

          {/* Active Forms */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <h3 className="text-lg font-medium text-white">Active Forms</h3>
            </div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-col items-center space-y-3">
                <motion.div 
                  className="p-3 bg-white/20 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9, type: "spring", stiffness: 200 }}
                >
                  <FileText className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <p className="text-white font-medium">No active forms available.</p>
                  <p className="text-gray-300 text-sm">Create one to get started!</p>
                </div>
                <motion.button 
                  className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create your first form →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Inactive Forms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="h-5 w-5 text-gray-400" />
              <h3 className="text-lg font-medium text-white">Inactive Forms</h3>
            </div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex flex-col items-center space-y-3">
                <motion.div 
                  className="p-3 bg-white/20 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1, type: "spring", stiffness: 200 }}
                >
                  <Clock className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <p className="text-white font-medium">No inactive forms available.</p>
                  <p className="text-gray-300 text-sm">All forms are currently active or none exist.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <motion.div 
            className="bg-quaternary/30 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Forms</p>
                <p className="text-2xl font-bold text-white">0</p>
              </div>
              <motion.div 
                className="p-3 bg-blue-500/20 rounded-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3, type: "spring", stiffness: 200 }}
              >
                <FileText className="h-6 w-6 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-quaternary/30 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Active Forms</p>
                <p className="text-2xl font-bold text-green-400">0</p>
              </div>
              <motion.div 
                className="p-3 bg-green-500/20 rounded-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="h-6 w-6 text-green-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-quaternary/30 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Inactive Forms</p>
                <p className="text-2xl font-bold text-gray-400">0</p>
              </div>
              <motion.div 
                className="p-3 bg-gray-500/20 rounded-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <Clock className="h-6 w-6 text-gray-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Page