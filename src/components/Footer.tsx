'use client'


import { motion } from 'framer-motion'

/**
 * Footer Component
 * Contains navigation links, social media, and copyright information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', href: '#' },
        { name: 'Collections', href: '#' },
        { name: 'Best Sellers', href: '#' },
        { name: 'Sale', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Career', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Facebook', icon: '👍', href: '#' },
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-wale-black text-wale-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-3xl font-serif font-bold mb-4">
              <span className="text-wale-gold">wale</span>
            </h3>
            <p className="text-gray-400 font-light mb-6">
              Redefining modern fashion with timeless elegance and impeccable quality.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-wale-gold/10 rounded-full flex items-center justify-center text-wale-gold hover:bg-wale-gold hover:text-wale-black transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-wale-gold">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-wale-gold transition-colors duration-300 text-sm"
                      whileHover={{ color: '#d4af37' }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-wale-gold/30 to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © {currentYear} wale. All rights reserved.
          </motion.p>

          {/* Legal Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 text-sm text-gray-400 text-center md:text-right"
          >
            <motion.a
              href="#"
              className="hover:text-wale-gold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-wale-gold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-wale-gold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Cookies
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Footer Line */}
      <div className="h-1 bg-gradient-to-r from-wale-gold/50 via-wale-gold/30 to-wale-gold/0"></div>
    </footer>
  )
}
