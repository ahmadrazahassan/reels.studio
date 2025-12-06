'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 rounded-[24px] bg-red-100 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="font-display font-bold text-4xl mb-4">Something went wrong!</h1>
        <p className="text-lg text-black/60 mb-8">
          We encountered an unexpected error. Please try again.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-primary text-black font-display font-bold text-base px-6 py-3 rounded-full hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </motion.button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-black text-primary font-display font-bold text-base px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
