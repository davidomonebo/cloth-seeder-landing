/**
 * Type definitions for the wale brand
 */

export interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
  description?: string
  isFeatured?: boolean
}

export interface Testimonial {
  id: number
  text: string
  author: string
  role: string
  image: string
  rating: number
}

export interface NavigationLink {
  name: string
  href: string
}

export interface FooterSection {
  title: string
  links: {
    name: string
    href: string
  }[]
}

export interface SocialLink {
  name: string
  icon: string
  href: string
}

export interface Stat {
  number: string
  label: string
  suffix: string
}
