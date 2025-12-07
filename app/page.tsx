'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Check, Play } from 'lucide-react'
import DownloadForm from '@/components/DownloadForm'

export default function Home() {
  const features = [
    {
      icon: Check,
      title: 'Instant Processing',
      description: 'Download your favorite Reels in seconds. Our optimized servers ensure the fastest download speeds.',
      accent: false,
    },
    {
      icon: Check,
      title: 'No Watermarks',
      description: 'Get clean, watermark-free videos. Perfect for sharing, editing, or keeping in your collection.',
      accent: true,
    },
    {
      icon: Check,
      title: 'Always Free',
      description: 'Completely free forever. No hidden fees, no subscriptions, no limits on downloads.',
      accent: false,
    },
    {
      icon: Play,
      title: 'Original Quality',
      description: 'Download Reels in their original quality. Preserve every detail and enjoy crystal-clear videos.',
      accent: false,
    },
    {
      icon: Check,
      title: 'All Devices',
      description: 'Works perfectly on all devices. Download Reels from your phone, tablet, or desktop.',
      accent: false,
    },
    {
      icon: Check,
      title: 'No Registration',
      description: 'Start downloading immediately. No sign-up, no login, no personal information required.',
      accent: false,
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Copy Link',
      description: 'Open Instagram, find the Reel you want, tap the three dots, and copy the link.',
    },
    {
      number: '02',
      title: 'Paste URL',
      description: 'Paste the Instagram Reel link into the input field above and click download.',
    },
    {
      number: '03',
      title: 'Save Video',
      description: 'Your Reel will be processed instantly. Click the download button to save it.',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="download" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16">
        {/* Large Vibrant Green Rounded Background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 mx-4 sm:mx-6 lg:mx-8 bg-primary rounded-[48px] sm:rounded-[64px] lg:rounded-[80px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-deep/10 border border-dark-deep/10 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-1.5 h-1.5 bg-dark-deep rounded-full animate-pulse" />
                <span className="text-xs font-display font-semibold text-dark-deep/80 uppercase tracking-wide">Free • No Watermarks</span>
              </motion.div>

              <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-5 leading-[1.1] text-dark-deep">
                Download
                <br />
                <span className="font-extrabold">Instagram Reels</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-dark/70 max-w-lg mb-8 leading-relaxed">
                Save your favorite Reels in HD quality. Fast, secure, and completely free forever.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-dark/60">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-xl text-dark-deep">50K+</span>
                  <span className="font-display font-medium text-sm">Downloads</span>
                </div>
                <div className="w-px h-5 bg-dark/20" />
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-xl text-dark-deep">100%</span>
                  <span className="font-display font-medium text-sm">Secure</span>
                </div>
                <div className="w-px h-5 bg-dark/20" />
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-xl text-dark-deep">Instant</span>
                  <span className="font-display font-medium text-sm">Processing</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form Area */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="relative bg-light rounded-[32px] p-8 shadow-soft-lg border border-dark/5" suppressHydrationWarning>
                <DownloadForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid 2026 Style */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          {/* Header */}
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark/5 mb-5">
              <div className="w-1.5 h-1.5 bg-dark-deep rounded-full" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-dark/50">Features</span>
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight text-dark-deep">
              Why Choose <span className="font-extrabold">reels.studio</span>
            </h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4">
            {/* Large Feature 1 - No Watermarks */}
            <motion.div
              className="md:col-span-6 lg:col-span-8 relative overflow-hidden rounded-[32px] bg-primary p-8 sm:p-10 lg:p-12 min-h-[280px] flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-[14px] bg-dark-deep/10 mb-6">
                  <Check className="w-6 h-6 text-dark-deep" />
                </div>
                <h3 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-dark-deep">{features[1].title}</h3>
                <p className="text-lg text-dark-deep/70 leading-relaxed max-w-md">{features[1].description}</p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-dark-deep/5 rounded-tl-[32px]" />
            </motion.div>

            {/* Medium Feature - Instant Processing */}
            <motion.div
              className="md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-[32px] bg-white border border-black/10 p-8 sm:p-10 min-h-[280px] flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-[14px] bg-light-gray mb-6">
                  <Check className="w-6 h-6 text-dark-deep" />
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3 text-dark-deep">{features[0].title}</h3>
                <p className="text-base text-dark/60 leading-relaxed">{features[0].description}</p>
              </div>
            </motion.div>

            {/* Small Feature 1 */}
            <motion.div
              className="md:col-span-3 lg:col-span-4 relative overflow-hidden rounded-[28px] bg-cream-50 border border-black/5 p-6 sm:p-8 min-h-[220px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-light mb-5">
                <Check className="w-5 h-5 text-dark-deep" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-dark-deep">{features[2].title}</h3>
              <p className="text-sm text-dark/60 leading-relaxed">{features[2].description}</p>
            </motion.div>

            {/* Small Feature 2 */}
            <motion.div
              className="md:col-span-3 lg:col-span-4 relative overflow-hidden rounded-[28px] bg-white border border-black/10 p-6 sm:p-8 min-h-[220px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-light-gray mb-5">
                <Play className="w-5 h-5 text-dark-deep" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-dark-deep">{features[3].title}</h3>
              <p className="text-sm text-dark/60 leading-relaxed">{features[3].description}</p>
            </motion.div>

            {/* Small Feature 3 */}
            <motion.div
              className="md:col-span-3 lg:col-span-4 relative overflow-hidden rounded-[28px] bg-cream-50 border border-black/5 p-6 sm:p-8 min-h-[220px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-[12px] bg-light mb-5">
                <Check className="w-5 h-5 text-dark-deep" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-dark-deep">{features[4].title}</h3>
              <p className="text-sm text-dark/60 leading-relaxed">{features[4].description}</p>
            </motion.div>

            {/* Wide Feature - No Registration */}
            <motion.div
              className="md:col-span-6 lg:col-span-12 relative overflow-hidden rounded-[32px] bg-dark-deep text-white p-8 sm:p-10 lg:p-12 min-h-[200px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-[16px] bg-primary flex-shrink-0 shadow-[0_0_20px_rgba(140,255,46,0.3)]">
                  <Check className="w-7 h-7 text-dark-deep" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-white">{features[5].title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed max-w-3xl">{features[5].description}</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-bl-[40px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Ultra Modern Staggered Layout */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          {/* Large Vibrant Green Rounded Background Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-[48px] sm:rounded-[64px]" />
            
            <div className="relative px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20">
              {/* Header - Left Aligned */}
              <motion.div
                className="mb-16 sm:mb-20 max-w-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/10 mb-5">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-black/60">How It Works</span>
                </div>
                <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight text-black mb-4">
                  Get Started in <span className="font-extrabold">3 Steps</span>
                </h2>
              </motion.div>

              {/* Steps - Diagonal Staggered Layout */}
              <div className="space-y-6 sm:space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    className="relative"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.7 }}
                    style={{
                      marginLeft: index % 2 === 0 ? '0' : 'auto',
                      marginRight: index % 2 === 0 ? 'auto' : '0',
                    }}
                  >
                    <div className={`max-w-3xl ${index % 2 === 1 ? 'ml-auto' : ''}`}>
                      <div className="relative bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 overflow-hidden">
                        {/* Large Number Background */}
                        <div className="absolute top-0 right-0 opacity-5">
                          <span className="font-display font-black text-[180px] sm:text-[220px] leading-none text-black">
                            {step.number}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                          {/* Step Number */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] bg-black flex items-center justify-center">
                              <span className="font-display font-bold text-3xl sm:text-4xl text-primary">{step.number}</span>
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="flex-1">
                            <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 text-black">
                              {step.title}
                            </h3>
                            <p className="text-base sm:text-lg lg:text-xl text-black/60 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Accent Corner */}
                        <div className={`absolute ${index % 2 === 0 ? 'bottom-0 right-0' : 'top-0 left-0'} w-24 h-24 bg-black/5 ${index % 2 === 0 ? 'rounded-tl-[32px]' : 'rounded-br-[32px]'}`} />
                      </div>
                    </div>

                    {/* Connecting Line - Desktop Only */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 z-10">
                        <div className="w-px h-8 bg-black/20" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats */}
              <motion.div
                className="mt-16 flex flex-wrap items-center justify-center gap-8 text-black/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black" />
                  <span className="text-sm font-display font-medium">Takes less than 30 seconds</span>
                </div>
                <div className="w-px h-4 bg-black/20" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black" />
                  <span className="text-sm font-display font-medium">No technical knowledge required</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
          <motion.div
            className="relative p-12 sm:p-16 rounded-[48px] bg-dark-deep text-white overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 text-center">
              <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 text-white">
                Ready to <span className="font-extrabold text-primary">Download?</span>
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust reels.studio for downloading Instagram Reels
              </p>
              <motion.a
                href="#download"
                className="inline-flex items-center gap-3 bg-primary text-dark-deep font-display font-bold text-lg px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(140,255,46,0.4)] transition-all duration-200 shadow-soft-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowDown className="w-6 h-6" />
                Start Downloading Now
              </motion.a>
            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 rounded-tl-[96px]" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
