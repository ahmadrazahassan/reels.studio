'use client'

import { motion } from 'framer-motion'
import { FileText, AlertCircle, Scale, Ban, CheckCircle, Info } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: 'By accessing and using reels.studio, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.',
    },
    {
      icon: FileText,
      title: 'Service Description',
      content: 'reels.studio provides a free service to download Instagram Reels. We act as an intermediary tool and do not host, store, or own any of the content downloaded through our service.',
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: 'Users are solely responsible for ensuring they have the right to download and use any content. You must respect copyright laws, Instagram\'s terms of service, and the rights of content creators. Downloaded content should be for personal use only.',
    },
    {
      icon: Ban,
      title: 'Prohibited Uses',
      content: 'You may not use reels.studio to: download private or copyrighted content without permission, redistribute downloaded content commercially, violate any applicable laws or regulations, or attempt to circumvent any security measures.',
    },
    {
      icon: AlertCircle,
      title: 'Disclaimer of Warranties',
      content: 'reels.studio is provided "as is" without any warranties, express or implied. We do not guarantee uninterrupted service, error-free operation, or that the service will meet your requirements. Use at your own risk.',
    },
    {
      icon: Info,
      title: 'Limitation of Liability',
      content: 'reels.studio and its operators shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our service. This includes any damages from downloaded content or service interruptions.',
    },
  ]

  const additionalTerms = [
    {
      title: 'Intellectual Property',
      content: 'All content downloaded through reels.studio remains the property of its original creators. We do not claim any ownership rights to downloaded content.',
    },
    {
      title: 'Service Modifications',
      content: 'We reserve the right to modify, suspend, or discontinue any part of our service at any time without notice. We may also update these terms periodically.',
    },
    {
      title: 'Third-Party Services',
      content: 'Our service interacts with Instagram and other third-party services. We are not responsible for their terms, policies, or availability.',
    },
    {
      title: 'Governing Law',
      content: 'These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved in appropriate courts.',
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
            Terms of <span className="font-extrabold">Service</span>
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
            Welcome to reels.studio. These Terms of Service govern your use of our Instagram Reels download service. Please read them carefully before using our service.
          </p>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-6 mb-12">
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

        {/* Additional Terms */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl mb-8">Additional Terms</h2>
          <div className="space-y-6">
            {additionalTerms.map((term, index) => (
              <div
                key={term.title}
                className="p-6 rounded-[24px] bg-cream-50 border border-black/5"
              >
                <h3 className="font-display font-bold text-xl mb-2">{term.title}</h3>
                <p className="text-black/70 leading-relaxed">{term.content}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="p-8 rounded-[32px] bg-black text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-2xl mb-4">Questions About These Terms?</h2>
          <p className="text-white/70 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us. By continuing to use reels.studio, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
