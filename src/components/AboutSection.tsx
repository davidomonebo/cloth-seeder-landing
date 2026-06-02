'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * About Section Component
 * Tells the brand story and displays key statistics
 */
export default function AboutSection() {
  const stats = [
    { number: '25+', label: 'Years of Excellence', suffix: '' },
    { number: '50K+', label: 'Satisfied Customers', suffix: '' },
    { number: '100%', label: 'Premium Quality', suffix: '' },
    { number: '75+', label: 'Countries Worldwide', suffix: '' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section bg-wale-lightgray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative h-96 lg:h-full rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1550706406-6b6ecad80d77?w=600&h=700&fit=crop"
              alt="About wale"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <div className="h-px w-8 bg-wale-gold"></div>
                <span className="ml-4 text-luxury text-sm text-wale-gold">Our Heritage</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-wale-black mb-4">
                Crafted for Perfection
              </h2>
            </motion.div>

            {/* Main Text */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-wale-darkgray font-light leading-relaxed"
            >
              Since our founding, wale has been dedicated to redefining luxury fashion. Each piece is meticulously
              crafted by master artisans who understand that true luxury is in the details.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-wale-darkgray font-light leading-relaxed"
            >
              We believe in timeless elegance, impeccable quality, and sustainable practices. Our commitment to
              excellence ensures that every garment meets the highest standards of craftsmanship and design.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-wale-black/10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-wale-gold mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-luxury text-wale-darkgray">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-wale-gold/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}
