"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Lock, User, Mail, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion, AnimatePresence } from 'framer-motion'

const Page = () => {
  const [currentView, setCurrentView] = useState<'login' | 'forgot-password' | 'signup'>('login')
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: ""
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const router = useRouter()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 6
  }

  const validateUsername = (username: string) => {
    return username.length >= 3
  }

  const validateForm = (view: 'login' | 'signup' | 'forgot-password') => {
    const newErrors: {[key: string]: string} = {}

    if (view === 'login') {
      if (!formData.username) {
        newErrors.username = 'Username is required'
      } else if (!validateUsername(formData.username)) {
        newErrors.username = 'Username must be at least 3 characters'
      }
      if (!formData.password) {
        newErrors.password = 'Password is required'
      } else if (!validatePassword(formData.password)) {
        newErrors.password = 'Password must be at least 6 characters'
      }
    }

    if (view === 'signup') {
      if (!formData.username) {
        newErrors.username = 'Username is required'
      } else if (!validateUsername(formData.username)) {
        newErrors.username = 'Username must be at least 3 characters'
      }
      if (!formData.email) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
      if (!formData.password) {
        newErrors.password = 'Password is required'
      } else if (!validatePassword(formData.password)) {
        newErrors.password = 'Password must be at least 6 characters'
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    if (view === 'forgot-password') {
      if (!formData.email) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm(currentView)) {
      return
    }

    if (currentView === 'login') {
      // Allow anyone to login with valid credentials
      toast.success('Login successful! Redirecting to dashboard...')
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    }

    if (currentView === 'signup') {
      toast.success('Account created successfully! Please login.')
      setCurrentView('login')
      // Reset form data
      setFormData({
        username: "",
        password: "",
        email: "",
        confirmPassword: ""
      })
    }

    if (currentView === 'forgot-password') {
      toast.success('Reset link sent to your email!')
      setCurrentView('login')
      // Reset email
      setFormData(prev => ({
        ...prev,
        email: ""
      }))
    }
  }

  const renderLoginCard = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="w-full max-w-lg bg-quinary text-white border-quaternary">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CardTitle>Login</CardTitle>
            <CardDescription>Welcome back! Please enter your details.</CardDescription>
          </motion.div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 px-8 py-6">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label htmlFor="username" className="text-sm font-medium text-white">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  className={`w-full pl-10 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 border-white/20 text-white placeholder-gray-400 ${
                    errors.username ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.username && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-400 text-sm"
                >
                  {errors.username}
                </motion.p>
              )}
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label htmlFor="password" className="text-sm font-medium text-white">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`w-full pl-10 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 border-white/20 text-white placeholder-gray-400 ${
                    errors.password ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.password && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-400 text-sm"
                >
                  {errors.password}
                </motion.p>
              )}
            </motion.div>
            <motion.button 
              type="submit" 
              className="w-full bg-primary/60 text-white py-4 px-4 rounded-md hover:bg-primary/70 transition-colors duration-200 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                type="button"
                onClick={() => setCurrentView('forgot-password')}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Forgot password?
              </button>
            </motion.div>
            <motion.div 
              className="text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setCurrentView('signup')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up
              </button>
            </motion.div>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  )

  const renderForgotPasswordCard = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="w-full max-w-lg bg-quinary text-white border-quaternary">
        <CardHeader>
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button
              onClick={() => setCurrentView('login')}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>
            <div>
              <CardTitle>Forgot Password</CardTitle>
              <CardDescription>Enter your email to receive a reset link.</CardDescription>
            </div>
          </motion.div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 px-8 py-6">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full pl-10 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 border-white/20 text-white placeholder-gray-400 ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-400 text-sm"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>
            <motion.button 
              type="submit" 
              className="w-full bg-primary/60 text-white py-4 px-4 rounded-md hover:bg-primary/70 transition-colors duration-200 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Reset Link
            </motion.button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <motion.div 
              className="text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Remember your password?{" "}
              <button
                type="button"
                onClick={() => setCurrentView('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Back to login
              </button>
            </motion.div>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  )

  const renderSignupCard = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="w-full max-w-lg bg-quinary text-white border-quaternary">
        <CardHeader>
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button
              onClick={() => setCurrentView('login')}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>
            <div>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Sign up for a new account.</CardDescription>
            </div>
          </motion.div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 px-8 py-6">
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label htmlFor="signup-username" className="text-sm font-medium text-white">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="signup-username"
                  name="username"
                  type="text"
                  className={`w-full pl-10 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 border-white/20 text-white placeholder-gray-400 ${
                    errors.username ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.username && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-400 text-sm"
                >
                  {errors.username}
                </motion.p>
              )}
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label htmlFor="signup-email" className="text-sm font-medium text-white">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  className={`w-full pl-10 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 border-white/20 text-white placeholder-gray-400 ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-400 text-sm"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label htmlFor="signup-password" className="text-sm font-medium text-white">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  className={`w-full pl-10 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 border-white/20 text-white placeholder-gray-400 ${
                    errors.password ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.password && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-400 text-sm"
                >
                  {errors.password}
                </motion.p>
              )}
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label htmlFor="confirm-password" className="text-sm font-medium text-white">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  className={`w-full pl-10 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white/10 border-white/20 text-white placeholder-gray-400 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-white/20'
                  }`}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errors.confirmPassword && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-400 text-sm"
                >
                  {errors.confirmPassword}
                </motion.p>
              )}
            </motion.div>
            <motion.button 
              type="submit" 
              className="w-full bg-primary/60 text-white py-4 px-4 rounded-md hover:bg-primary/70 transition-colors duration-200 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Account
            </motion.button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <motion.div 
              className="text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setCurrentView('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in
              </button>
            </motion.div>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  )

  return (
    <div className="flex justify-center items-center min-h-screen backdrop-blur-md shadow-xl">
      <AnimatePresence mode="wait">
        {currentView === 'login' && renderLoginCard()}
        {currentView === 'forgot-password' && renderForgotPasswordCard()}
        {currentView === 'signup' && renderSignupCard()}
      </AnimatePresence>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Page