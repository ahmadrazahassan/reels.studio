'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, UserX, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: 'Data Collection',
      content: 'We do not collect, store, or track any personal information. When you use reels.studio, we do not require registration, login, or any personal details. The URLs you submit are processed in real-time and are not stored on our servers.',
    },
    {
      icon: Lock,
      title: 'Security',
      content: 'All connections to reels.studio are encrypted using HTTPS. We use industry-standard security measures to protect the integrity of our service. Your downloads are processed securely and privately.',
    },
    {
      icon: Eye,
      title: 'No Tracking',
      content: 'We do not use cookies, analytics, or any tracking technologies to monitor your activity. Your privacy is our priority, and we believe in providing a service that respects your anonymity.',
    },
    {
      icon: UserX,
      title: 'No Third-Party Sharing',
      content: 'We do not share, sell, or distribute any information to third parties. Since we don\'t collect personal data, there\'s nothing to share. Your use of our service remains completely private.',
    },
    {
      icon: FileText,
      title: 'Content Usage',
      content: 'Downloaded content is for personal use only. Users are responsible for respecting copyright laws and Instagram\'s terms of service. We are not responsible for how users utilize downloaded content.',
    },
    {
      icon: Shield,
      title: 'Service Changes',
      content: 'We reserve the right to update this privacy policy. Any changes will be posted on this page. Continued use of reels.studio after changes constitutes acceptance of the updated policy.',
    },
  ]

  return (
    <div className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black/50 hover:text-black text-sm font-display font-medium mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
            Privacy <span className="font-extrabold">Policy</span>
          </h1>
          
          <p className="text-xl text-black/70 leading-relaxed">
            Last updated: December 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="mb-12 p-8 rounded-[32px] bg-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-lg text-black/80 leading-relaxed">
            At reels.studio, we take your privacy seriously. This policy explains how we handle your information when you use our Instagram Reels download service. The short version: <strong>we don't collect, store, or track any of your personal data.</strong>
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="p-8 rounded-[28px] bg-white border border-black/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-[16px] bg-cream-50 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-black" />
                </div>
                <h2 className="font-display font-bold text-2xl">{section.title}</h2>
              </div>
              <p className="text-black/70 leading-relaxed pl-16">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          className="mt-16 p-8 rounded-[32px] bg-cream-50 border border-black/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-2xl mb-4">Questions?</h2>
          <p className="text-black/70 leading-relaxed">
            If you have any questions about this privacy policy or our practices, please feel free to contact us. We're committed to transparency and protecting your privacy.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
