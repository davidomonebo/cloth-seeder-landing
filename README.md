# wale - Premium Luxury Fashion Brand Landing Page

A modern, fully responsive luxury fashion brand landing page built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion animations.

## 🎯 Features

- **Modern Design**: Sleek black, white, and gold color scheme inspired by luxury brands like Zara, Balenciaga, and Louis Vuitton
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Beautiful Framer Motion animations and transitions throughout
- **Production-Ready Code**: Clean, well-commented, and maintainable TypeScript code
- **Performance Optimized**: Next.js Image optimization and lazy loading
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📑 Sections

1. **Navigation**: Sticky header with logo and responsive menu
2. **Hero Section**: Full-screen background with compelling headline and CTA buttons
3. **Featured Collection**: Grid display of 6 premium products with hover animations
4. **About Section**: Brand story with statistics and craftsmanship details
5. **New Arrivals**: Horizontal scrolling carousel of latest products
6. **Testimonials**: Customer reviews in beautiful cards with ratings
7. **Newsletter**: Email subscription form with validation
8. **Footer**: Navigation links, social media, and copyright information

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Navigate to the project directory:
```bash
cd "cloth landing page"
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.tsx    # Main navigation header
│   ├── HeroSection.tsx   # Hero section with CTA
│   ├── FeaturedCollection.tsx  # Product grid
│   ├── AboutSection.tsx  # About brand section
│   ├── NewArrivals.tsx   # Horizontal product carousel
│   ├── Testimonials.tsx  # Customer reviews
│   ├── NewsletterSection.tsx   # Email subscription
│   └── Footer.tsx        # Footer with links
├── pages/
│   ├── layout.tsx        # Root layout
│   └── index.tsx         # Home page
├── styles/
│   └── globals.css       # Global styles and animations
└── utils/               # Utility functions (for future use)
```

## 🎨 Color Scheme

- **Black**: `#1a1a1a`
- **White**: `#ffffff`
- **Gold**: `#d4af37`
- **Light Gray**: `#f5f5f5`
- **Dark Gray**: `#333333`

## 📦 Dependencies

- **Next.js**: React framework for production
- **React**: JavaScript library for UI
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Next/Image**: Optimized image loading

## 🎬 Animations

All animations use Framer Motion:
- Fade-in effects on scroll
- Slide-up transitions
- Hover lift animations
- Smooth scrolling
- Staggered children animations
- Gold glow hover effects

## 📱 Responsive Design

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

All components are fully responsive and tested across different screen sizes.

## ✨ Typography

- **Display Font**: Playfair Display (serif) - elegant headings
- **Body Font**: Poppins (sans-serif) - clean, modern text

## 🔄 Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for off-screen components
- CSS-in-JS with Tailwind CSS
- Code splitting with Next.js
- Smooth scroll behavior

## 📄 License

This project is for demonstration purposes.

## 👨‍💻 Author

Built with attention to detail and modern best practices for luxury fashion branding.

---

**Note**: Product images are sourced from Unsplash as placeholders. Replace them with your own product images for production use.
