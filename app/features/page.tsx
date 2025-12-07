'use client'

import { motion } from 'framer-motion'
import { Check, Play, ArrowDown, Lock, FileText, Gauge, Users, Monitor } from 'lucide-react'
import FeatureCard from '@/components/FeatureCard'

export default function FeaturesPage() {
  const allFeatures = [
    {
      icon: Check,
      title: 'Instant Processing',
      description: 'Our optimized servers process and deliver your Reels in seconds. No waiting, no delays.',
    },
    {
      icon: Check,
      title: 'No Watermarks',
      description: 'Download clean videos without any watermarks or branding. Pure, original content.',
      accent: true,
    },
    {
      icon: Check,
      title: 'Completely Free',
      description: 'No hidden costs, no premium plans. All features are free forever for everyone.',
    },
    {
      icon: Play,
      title: 'Original HD Quality',
      description: 'Preserve the original quality of Reels. Download in the highest resolution available.',
    },
    {
      icon: Monitor,
      title: 'Cross-Platform',
      description: 'Works seamlessly on iOS, Android, Windows, Mac, and Linux. Any device, anywhere.',
    },
    {
      icon: Check,
      title: 'No Registration',
      description: 'Start downloading immediately without creating an account or providing personal info.',
    },
    {
      icon: ArrowDown,
      title: 'Unlimited Downloads',
      description: 'No daily limits or restrictions. Download as many Reels as you want, whenever you want.',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'We don\'t store your data or track your downloads. Your privacy is our priority.',
    },
    {
      icon: Play,
      title: 'Multiple Formats',
      description: 'Download videos in MP4 format, compatible with all devices and video players.',
    },
    {
      icon: FileText,
      title: 'Batch Processing',
      description: 'Download multiple Reels one after another without refreshing the page.',
    },
    {
      icon: Gauge,
      title: 'High-Speed Servers',
      description: 'Our global CDN ensures fast downloads no matter where you are in the world.',
    },
    {
      icon: Users,
      title: 'Trusted by Thousands',
      description: 'Join 50,000+ users who rely on ReelSnap for their Instagram Reel downloads.',
    },
  ]

  return (
    <div className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/5 border border-dark/10 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Check className="w-4 h-4 text-dark-deep" />
            <span className="text-sm font-display font-semibold text-dark/70">All Features</span>
          </motion.div>

          <h1 className="font-display font-light text-6xl sm:text-7xl lg:text-8xl tracking-tighter mb-6 text-dark-deep">
            Powerful <span className="font-extrabold">Features</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to download Instagram Reels effortlessly
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="/"
            className="inline-flex items-center gap-3 bg-primary text-dark-deep font-display font-bold text-lg px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(140,255,46,0.4)] transition-all duration-200 shadow-soft-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDown className="w-6 h-6" />
            Try It Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
