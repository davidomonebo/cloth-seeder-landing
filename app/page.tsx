import HeroSection from '@/components/HeroSection'
import FeaturedCollection from '@/components/FeaturedCollection'
import AboutSection from '@/components/AboutSection'
import NewArrivals from '@/components/NewArrivals'
import Testimonials from '@/components/Testimonials'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
2
/**
 * Home Page - Main landing page for wale brand
 * Displays all major sections of the luxury fashion brand
 */
export default function Home() {
  return (
    <main className="bg-wale-white">
      <Navigation />
      <HeroSection />
      <FeaturedCollection />
      <AboutSection />
      <NewArrivals />
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
