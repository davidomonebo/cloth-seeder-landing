'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * Testimonials Component
 * Displays customer reviews in beautiful cards with smooth animations
 */
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: 'wale has completely transformed my wardrobe. The quality and elegance of every piece is unmatched. I feel like royalty wearing their designs.',
      author: 'Sarah Mitchell',
      role: 'Fashion Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
    },
    {
      id: 2,
      text: 'As a luxury brand advocate, I am impressed by wale\'s attention to detail and commitment to sustainability. Every piece tells a story of excellence.',
      author: 'James Chen',
      role: 'Designer & Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
    },
    {
      id: 3,
      text: 'The customer service is exceptional, and the products are worth every penny. wale is my go-to brand for premium fashion that never goes out of style.',
      author: 'Emma Johnson',
      role: 'Style Blogger',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section bg-wale-lightgray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-wale-gold"></div>
            <span className="mx-4 text-luxury text-sm text-wale-gold">Client Stories</span>
            <div className="h-px w-12 bg-wale-gold"></div>
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-wale-white rounded-lg p-8 hover-lift hover-glow"
              variants={item}
              whileHover={{ y: -5 }}
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-wale-gold fill-current"
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2 }}
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-wale-darkgray mb-6 text-lg leading-relaxed font-light italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-wale-black">{testimonial.author}</h4>
                  <p className="text-sm text-luxury text-wale-gold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-wale-gold to-transparent my-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  )
}
