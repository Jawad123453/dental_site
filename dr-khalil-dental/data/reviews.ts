export interface Review {
  id: number
  name: string
  city: string
  rating: number
  quote: string
}

export const overallRating = {
  score: 4.9,
  totalReviews: 120,
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah M.',
    city: 'Beirut',
    rating: 5,
    quote: 'Dr. Ahmad is incredibly skilled and gentle. My dental implant procedure was completely painless. Highly recommend!',
  },
  {
    id: 2,
    name: 'Karim H.',
    city: 'Jounieh',
    rating: 5,
    quote: 'Best dental clinic in Beirut. The staff is professional and the clinic is spotless. My whole family comes here.',
  },
  {
    id: 3,
    name: 'Nadia R.',
    city: 'Achrafieh',
    rating: 5,
    quote: 'I was terrified of dentists until I found Dr. Khalil. He made me feel comfortable and explained everything clearly.',
  },
  {
    id: 4,
    name: 'Georges A.',
    city: 'Hamra',
    rating: 5,
    quote: 'Got my teeth whitened here and the results are amazing. Very professional service and reasonable prices.',
  },
  {
    id: 5,
    name: 'Lama K.',
    city: 'Beirut',
    rating: 4,
    quote: 'Great experience with my root canal treatment. Dr. Ahmad is very experienced and the clinic has modern equipment.',
  },
  {
    id: 6,
    name: 'Hassan B.',
    city: 'Verdun',
    rating: 5,
    quote: 'My veneers look absolutely natural. Dr. Khalil took his time to get the perfect shade and shape. Worth every penny!',
  },
]
