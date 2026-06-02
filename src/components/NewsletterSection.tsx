'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Newsletter Section Component
 * Email subscription form with validation and modern design
 */
export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  /**
   * Validate email address
   */
  const validateEmail = (emailAddress: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(emailAddress)
  }

  /**
   * Handle form submission
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    // Simulate API call
    setIsSubmitted(true)
    setEmail('')

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="section bg-wale-black text-wale-white relative overflow-hidden py-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-wale-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wale-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl font-light text-gray-300 mb-8">
            Subscribe to our exclusive newsletter and be the first to know about new collections, special offers, and events.
          </p>
          <div className="h-px w-16 bg-wale-gold mx-auto"></div>
        </motion.div>

        {/* Newsletter Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Input Container */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              className="flex-1 relative"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                className="w-full px-6 py-4 bg-wale-white/10 text-wale-white placeholder-gray-400 rounded-lg border border-wale-gold/30 focus:border-wale-gold focus:outline-none focus:ring-2 focus:ring-wale-gold/50 transition-all duration-300"
              />
            </motion.div>
            <motion.button
              type="submit"
              className="btn-primary bg-wale-gold text-wale-black px-12 py-4 rounded-lg whitespace-nowrap"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>

          {/* Error Message */}
          {error && (
            <motion.p
              className="text-red-400 text-sm mt-3 ml-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {error}
            </motion.p>
          )}

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <p className="text-green-200 font-medium">
                Thank you for subscribing! Check your email for a special welcome offer.
              </p>
            </motion.div>
          )}
        </motion.form>

        {/* Privacy Notice */}
        <motion.p
          className="text-center text-gray-400 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We respect your privacy. Unsubscribe at any time. See our{' '}
          <motion.a
            href="#"
            className="text-wale-gold hover:underline"
            whileHover={{ textDecoration: 'underline' }}
          >
            Privacy Policy
          </motion.a>
          .
        </motion.p>
      </div>
    </section>
  )
}
