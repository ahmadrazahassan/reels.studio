'use client'

import { motion } from 'framer-motion'
import { Copy, Link as LinkIcon, ArrowDown, Check, Monitor } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      icon: Monitor,
      title: 'Open Instagram',
      description: 'Launch the Instagram app on your phone or visit instagram.com on your browser.',
      details: [
        'Find the Reel you want to download',
        'Make sure the Reel is public or from an account you follow',
        'Tap on the Reel to open it in full screen',
      ],
    },
    {
      number: '02',
      icon: Copy,
      title: 'Copy the Link',
      description: 'Tap the three dots (•••) menu and select "Copy Link" to copy the Reel URL.',
      details: [
        'Look for the three dots icon (usually at the bottom right)',
        'Tap "Copy Link" from the menu that appears',
        'The link is now copied to your clipboard',
      ],
    },
    {
      number: '03',
      icon: LinkIcon,
      title: 'Paste URL Here',
      description: 'Come back to ReelSnap and paste the copied link into our download form.',
      details: [
        'Return to ReelSnap.com',
        'Paste the link in the input field',
        'Click the "Download Reel" button',
      ],
    },
    {
      number: '04',
      icon: ArrowDown,
      title: 'Download & Enjoy',
      description: 'Your Reel will be processed instantly. Click download to save it to your device.',
      details: [
        'Wait a few seconds for processing',
        'Click the download button when ready',
        'The video will be saved to your device',
      ],
    },
  ]

  const faqs = [
    {
      question: 'Is ReelSnap really free?',
      answer: 'Yes! ReelSnap is 100% free with no hidden costs, subscriptions, or premium plans. All features are available to everyone.',
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No account needed! You can start downloading Instagram Reels immediately without any registration or login.',
    },
    {
      question: 'Are there any download limits?',
      answer: 'No limits! Download as many Reels as you want, whenever you want. We don\'t impose any restrictions.',
    },
    {
      question: 'Will the videos have watermarks?',
      answer: 'No watermarks! All downloaded videos are clean and watermark-free, just like the original.',
    },
    {
      question: 'What quality are the downloads?',
      answer: 'We provide the highest quality available. Videos are downloaded in their original resolution and quality.',
    },
    {
      question: 'Is it safe to use?',
      answer: 'Absolutely! We don\'t store your data, track your downloads, or require any personal information. Your privacy is protected.',
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
            <span className="text-sm font-display font-semibold text-dark/70">Simple Process</span>
          </motion.div>

          <h1 className="font-display font-light text-6xl sm:text-7xl lg:text-8xl tracking-tighter mb-6 text-dark-deep">
            How It <span className="font-extrabold">Works</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Download Instagram Reels in 4 simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(140,255,46,0.3)]">
                      <step.icon className="w-8 h-8 text-dark-deep" />
                    </div>
                    <div className="text-7xl font-display font-extrabold text-primary/20">
                      {step.number}
                    </div>
                  </div>
                  
                  <h2 className="font-display font-bold text-4xl mb-4 text-dark-deep">{step.title}</h2>
                  <p className="text-xl text-dark/70 mb-6 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-dark/60">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <motion.div
                    className="relative p-12 rounded-[48px] bg-light border border-dark/10 shadow-soft-lg"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-square rounded-3xl bg-light-gray flex items-center justify-center">
                      <step.icon className="w-24 h-24 text-dark/20" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full h-12 w-px bg-dark/10 mt-12" />
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 text-dark-deep">
              Frequently Asked <span className="font-extrabold">Questions</span>
            </h2>
            <p className="text-xl text-dark/70 max-w-2xl mx-auto">
              Everything you need to know about ReelSnap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-[32px] bg-light border border-dark/10 hover:shadow-soft-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <h3 className="font-display font-bold text-xl mb-3 text-dark-deep">{faq.question}</h3>
                <p className="text-dark/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            Start Downloading Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
