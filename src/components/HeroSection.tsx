'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * Hero Section Component
 * Full-screen hero with background image, headline, and CTA buttons
 */
export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-wale-black mt-16 flex items-center justify-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
       <Image
       src="/images/hero.png"
         alt="Cloth Seeder Premium Collection"
           fill
             className="object-cover"
               priority
          />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-wale-white max-w-4xl px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Decorative Line */}
        <motion.div variants={item} className="flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-wale-gold"></div>
          <span className="mx-4 text-luxury text-sm">
  CLOTH SEEDER
</span>
          <div className="h-px w-12 bg-wale-gold"></div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
        >
          Redefining Modern Fashion
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-xl md:text-2xl font-light mb-8 text-gray-200 max-w-3xl mx-auto"
        >
          Discover premium fabrics, native wears, and modern styles crafted for confidence, elegance, and everyday excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="btn-primary bg-wale-gold text-wale-black"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Premium Fabrics
          </motion.button>
          <motion.button
            className="btn-secondary border-wale-gold text-wale-gold hover:bg-wale-gold hover:text-wale-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-wale-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
