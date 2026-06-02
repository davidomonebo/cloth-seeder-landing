'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
  category: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  category,
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden bg-wale-lightgray rounded-lg hover-lift hover-glow"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-wale-gold mb-2">
          {category}
        </p>

        <h3 className="text-lg font-serif font-bold text-wale-black mb-2 group-hover:text-wale-gold transition-colors duration-300">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-wale-black">
            ₦{price}
          </span>

          <motion.button
            className="bg-wale-black text-wale-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedCollection() {
  const products: ProductCardProps[] = [
    {
      id: 1,
      name: 'Cloth Seeder Hero Wear',
      price: '25,000',
      image: '/images/hero.jpg',
      category: 'Featured',
    },
    {
      id: 2,
      name: 'Luxury Black Turtleneck',
      price: '22,500',
      image:
        '/images/product2.png',
      category: 'Essentials',
    },
    {
      id: 3,
      name: 'High-Waisted Tailored Trousers',
      price: '34,000',
      image:
        '/images/product3.png',
      category: 'Bottoms',
    },
    {
      id: 4,
      name: 'Minimalist White Shirt',
      price: '18,950',
      image:
        '/images/product4.png',
      category: 'Tops',
    },
    {
      id: 5,
      name: 'Silk Evening Dress',
      price: '64,950',
      image:
       '/images/product5.png',
      category: 'Dresses',
    },
    {
      id: 6,
      name: 'Premium Leather Accessories',
      price: '29,950',
      image:
        '/images/product6.png',
      category: 'Accessories',
    },
  ]

  return (
    <section id="collection" className="section bg-wale-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-wale-gold" />
            <span className="mx-4 text-sm uppercase tracking-widest text-wale-gold">
              Curated Selection
            </span>
            <div className="h-px w-12 bg-wale-gold" />
          </div>

          <h2 className="section-title">Featured Collection</h2>

          <p className="text-xl text-wale-darkgray max-w-2xl mx-auto font-light">
            Discover our hand-picked selection of premium pieces that define
            luxury and sophistication
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button className="btn-secondary">View All Products</button>
        </motion.div>
      </div>
    </section>
  )
}