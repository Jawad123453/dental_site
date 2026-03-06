export interface Service {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'implants',
    name: 'Dental Implants',
    shortDescription: 'Permanent tooth replacement solutions',
    fullDescription: 'State-of-the-art dental implants that look and feel like natural teeth. Our titanium implants provide a permanent foundation for replacement teeth.',
    icon: 'implant',
  },
  {
    id: 'whitening',
    name: 'Teeth Whitening',
    shortDescription: 'Professional brightening treatments',
    fullDescription: 'Advanced whitening treatments that safely remove stains and discoloration, giving you a brighter, more confident smile in just one visit.',
    icon: 'sparkles',
  },
  {
    id: 'veneers',
    name: 'Porcelain Veneers',
    shortDescription: 'Transform your smile instantly',
    fullDescription: 'Custom-crafted porcelain veneers that correct chips, gaps, and discoloration. Achieve a Hollywood smile with our premium veneer treatments.',
    icon: 'veneer',
  },
  {
    id: 'braces',
    name: 'Orthodontics & Braces',
    shortDescription: 'Straighten teeth at any age',
    fullDescription: 'Traditional braces and modern clear aligners to correct misalignment and create a perfectly straight smile for patients of all ages.',
    icon: 'braces',
  },
  {
    id: 'cleaning',
    name: 'Deep Cleaning',
    shortDescription: 'Thorough professional cleaning',
    fullDescription: 'Comprehensive dental cleaning that removes plaque, tartar, and bacteria. Prevent gum disease and maintain optimal oral health.',
    icon: 'cleaning',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    shortDescription: 'Save infected teeth painlessly',
    fullDescription: 'Modern, virtually painless root canal therapy to save infected teeth. Our gentle approach ensures comfort throughout the procedure.',
    icon: 'tooth',
  },
]
