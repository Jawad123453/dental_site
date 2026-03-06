# Dr. Ahmad Khalil Dental Clinic

A premium dental clinic website built with Nuxt 3 + Tailwind CSS. Designed as a portfolio piece demonstrating modern web development practices.

## Tech Stack

- **Framework**: Nuxt 3.17
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Inter (Google Fonts)
- **Icons**: Custom SVG
- **Forms**: Formspree integration
- **Deployment**: Vercel

## Features

- Responsive design (mobile-first)
- Dark navy premium theme with gold accents
- Smooth page transitions
- WhatsApp integration for booking
- Google Maps embed
- Contact form with Formspree
- SEO optimized with meta tags

## Pages

1. **Home** (`/`) - Hero, trust bar, services preview, CTA banner
2. **Services** (`/services`) - 6 dental services with details
3. **About** (`/about`) - Doctor profile, credentials, why choose us
4. **Reviews** (`/reviews`) - Patient testimonials, overall rating, map
5. **Contact** (`/contact`) - WhatsApp CTA, form, map, hours

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (auto-detected as Nuxt)

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customization

### Contact Information
Edit `composables/useContactInfo.ts` to update:
- Phone number
- WhatsApp number
- Address (English and Arabic)
- Opening hours
- Google Maps embed URL

### Services
Edit `data/services.ts` to modify service offerings.

### Reviews
Edit `data/reviews.ts` to update patient testimonials.

### Colors
Customize the theme in `tailwind.config.ts`:
- `navy` - Primary dark background (#0F172A)
- `gold` - Accent color (#D4AF37)
- `whatsapp` - WhatsApp button color (#25D366)
- `call` - Call button color (#3B82F6)

### Formspree Setup
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `components/contact/ContactForm.vue`

### Adding Doctor Photos
Replace placeholder images by adding:
- `public/images/doctor-hero.jpg` - Hero section
- `public/images/doctor-about.jpg` - About page

## Project Structure

```
dr-khalil-dental/
├── assets/css/main.css      # Global styles
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── home/                # Hero, TrustBar, ServicesPreview, CtaBanner
│   ├── services/            # ServiceCard
│   ├── about/               # DoctorProfile, CredentialBadges, WhyChooseUs
│   ├── reviews/             # OverallRating, ReviewCard
│   ├── contact/             # ContactForm, ContactInfo, OpeningHours
│   └── ui/                  # Reusable components
├── composables/             # Shared state/logic
├── data/                    # Static data (services, reviews)
├── layouts/                 # Page layouts
├── pages/                   # Route pages
└── public/                  # Static assets
```

## License

This project is a portfolio demonstration piece.
