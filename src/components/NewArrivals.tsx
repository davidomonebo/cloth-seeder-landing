'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * New Arrivals Component
 * Horizontal scrolling carousel of the latest products
 */
export default function NewArrivals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const newProducts = [
    {
      id: 1,
      name: 'Velvet Evening Jacket',
      price: '55,000',
      image: 'https://images.unsplash.com/photo-1591047990975-fbf46b6a5341?w=400&h=500&fit=crop',
    },
    {
      id: 2,
      name: 'Silk Camisole Blouse',
      price: '27,450',
      image: 'https://images.unsplash.com/photo-1595777707802-91d177c547e1?w=400&h=500&fit=crop',
    },
    {
      id: 3,
      name: 'Premium Wool Coat',
      price: '69,950',
      image: 'https://images.unsplash.com/photo-1539533057440-7bf5487b9438?w=400&h=500&fit=crop',
    },
    {
      id: 4,
      name: 'Tailored Suit Jacket',
      price: '44,950',
      image: 'https://images.unsplash.com/photo-1578932750294-708d0b20cf65?w=400&h=500&fit=crop',
    },
    {
      id: 5,
      name: 'Luxury Cashmere Sweater',
      price: '39,950',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
    },
    {
      id: 6,
      name: 'High Fashion Accessories',
      price: '32,450',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=500&fit=crop',
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <section className="section bg-wale-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="mx-4 text-luxury text-sm text-wale-gold">Just In</span>
            <div className="h-px w-12 bg-wale-gold"></div>
          </div>
          <h2 className="section-title">New Arrivals</h2>
          <p className="text-xl text-wale-darkgray max-w-2xl mx-auto font-light">
            Discover the latest additions to our luxury collection
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Container */}
          <motion.div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-4 scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {newProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Product Card */}
                <motion.div
                  className="group relative overflow-hidden rounded-lg bg-wale-lightgray hover-glow"
                  whileHover={{ y: -10 }}
                >
                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-wale-gold text-wale-black px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-wale-black mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-monarch-gold">₦{product.price}</span>
                      <motion.button
                        className="bg-wale-black text-wale-white px-4 py-2 rounded-lg text-sm font-semibold"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Add
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          {showLeftArrow && (
            <motion.button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-wale-black text-wale-gold rounded-full p-3 hover:bg-wale-gold hover:text-wale-black transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          )}

          {showRightArrow && (
            <motion.button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-wale-black text-wale-gold rounded-full p-3 hover:bg-wale-gold hover:text-wale-black transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  )
}
