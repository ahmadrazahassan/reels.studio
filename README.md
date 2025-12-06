# ReelSnap - Instagram Reels Downloader

A modern, sophisticated SAAS website for downloading Instagram Reels instantly. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Lightning Fast**: Download Reels in seconds
- **No Watermarks**: Clean, watermark-free videos
- **100% Free**: No hidden costs or subscriptions
- **HD Quality**: Original quality preservation
- **Mobile Friendly**: Works on all devices
- **No Registration**: Start downloading immediately
- **Privacy First**: No data storage or tracking
- **Unlimited Downloads**: No daily limits

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Montserrat Alternates

## Design System

This website follows a comprehensive design system with:

- **Sophisticated Minimalism**: Clean, modern aesthetics
- **Vibrant Green Accent** (#8cff2e): Energetic and modern
- **Cream Backgrounds**: Warm, reduced eye strain
- **Typography**: Montserrat Alternates for display, system fonts for body
- **Micro-interactions**: Delightful hover effects and animations
- **Responsive**: Mobile-first approach
- **Accessible**: WCAG AA/AAA compliant

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── features/page.tsx   # Features page
│   ├── how-it-works/page.tsx # How it works page
│   └── api/download/route.ts # Download API endpoint
├── components/
│   ├── Header.tsx          # Animated header with scroll effect
│   ├── Footer.tsx          # Bento grid footer
│   ├── DownloadForm.tsx    # Main download form
│   └── FeatureCard.tsx     # Reusable feature card
├── lib/
│   └── utils.ts            # Utility functions
├── styles/
│   └── globals.css         # Global styles
└── public/                 # Static assets
```

## Key Components

### Header
- Transforms from full-width to pill shape on scroll
- Smooth animations with Framer Motion
- Mobile hamburger menu
- Centered logo with trademark symbol

### Footer
- Infinite marquee banner
- Bento grid layout with asymmetric cards
- Live clock widget
- Animated statistics counters
- Newsletter subscription
- Magnetic social buttons

### Download Form
- URL validation
- Loading states
- Success/error feedback
- Step-by-step instructions

## API Integration

The `/api/download/route.ts` endpoint is currently a mock. To implement actual Instagram Reel downloading:

1. Use a third-party API service (e.g., RapidAPI)
2. Or implement your own scraping solution
3. Handle rate limiting and errors
4. Add proper caching
5. Ensure compliance with Instagram's Terms of Service

## Customization

### Colors
Edit `tailwind.config.ts` to change the primary accent color:
```typescript
colors: {
  primary: '#8cff2e', // Vibrant green accent
}
```

### Fonts
Edit `app/layout.tsx` to change the display font:
```typescript
import { Your_Font } from 'next/font/google'
```

### Content
- Homepage: `app/page.tsx`
- Features: `app/features/page.tsx`
- How It Works: `app/how-it-works/page.tsx`

## Performance

- Optimized images with Next.js Image component
- Font optimization with next/font
- Automatic code splitting
- CSS purging with Tailwind
- GPU-accelerated animations

## Accessibility

- WCAG AA/AAA compliant color contrast
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels for screen readers
- Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is free to use for personal and commercial purposes.

## Credits

Design system inspired by Apple, Stripe, Linear, and Vercel.

---

**Built with precision for a world-class user experience.**
