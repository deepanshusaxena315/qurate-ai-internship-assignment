"use client"

import React, { useState } from 'react'
import { Phone, Globe, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion } from 'framer-motion'

const Page = () => {
  const [selectedCountry, setSelectedCountry] = useState('+91')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedForm, setSelectedForm] = useState('no-forms')

  const countries = [
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
  ]

  const forms = [
    { value: 'no-forms', label: 'No forms available' },
    { value: 'customer-feedback', label: 'Customer Feedback Form' },
    { value: 'support-request', label: 'Support Request Form' },
    { value: 'appointment-booking', label: 'Appointment Booking Form' },
  ]

  const handleInitiateCall = () => {
    if (!phoneNumber) {
      alert('Please enter a phone number')
      return
    }
    if (selectedForm === 'no-forms' || !selectedForm) {
      alert('Please select a form')
      return
    }
    console.log('Initiating call to:', selectedCountry + phoneNumber, 'with form:', selectedForm)
  }

  const getSelectedCountryInfo = () => {
    return countries.find(country => country.code === selectedCountry) || countries[0]
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
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
            Audio Chat
          </motion.h1>
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Initiate an AI-powered voice conversation
          </motion.p>
        </motion.div>

        {/* Main Card */}
        <motion.div 
          className="bg-quaternary/30 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="p-2 bg-blue-500/20 rounded-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Phone className="h-6 w-6 text-blue-400" />
            </motion.div>
            <h2 className="text-2xl font-semibold text-white">Initiate a Call</h2>
          </motion.div>

          <div className="space-y-6">
            {/* Country Code Selection */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Label className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Country Code</span>
              </Label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-full">
                  <SelectValue>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getSelectedCountryInfo().flag}</span>
                      <span className="font-medium">{getSelectedCountryInfo().code} ({getSelectedCountryInfo().name})</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{country.flag}</span>
                        <span className="font-medium">{country.code}</span>
                        <span className="text-gray-600">({country.name})</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Phone Number Input */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Label className="text-white">Phone Number</Label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g., 7021469507"
                className="w-full py-4 px-4 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </motion.div>

            {/* Form Selection */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Label className="flex items-center space-x-2 text-white">
                <FileText className="h-4 w-4" />
                <span>Select Form</span>
              </Label>
              <Select value={selectedForm} onValueChange={setSelectedForm}>
                <SelectTrigger className="w-full py-4 px-4 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {forms.map((form) => (
                    <SelectItem key={form.value} value={form.value}>
                      {form.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Initiate Call Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={handleInitiateCall}
                className="w-full bg-primary/60 text-white py-4 px-6 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:bg-primary/70"
              >
                <Phone className="h-5 w-5" />
                <span>Initiate Call</span>
              </Button>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div 
            className="mt-6 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-sm font-medium text-white mb-2">How it works:</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Enter the recipient&apos;s phone number</li>
              <li>• Select a form to guide the conversation</li>
              <li>• Our AI will call and collect information naturally</li>
              <li>• Get instant results and insights</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Page 