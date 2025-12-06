'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  accent?: boolean
}

export default function FeatureCard({ icon: Icon, title, description, accent = false }: FeatureCardProps) {
  return (
    <motion.div
      className={`relative p-10 rounded-[32px] border transition-all duration-300 ${
        accent
          ? 'bg-primary border-black/10'
          : 'bg-white border-black/10 hover:shadow-soft-lg'
      }`}
      whileHover={{ scale: 1.02, y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
        accent ? 'bg-black/10' : 'bg-cream-100'
      }`}>
        <Icon className={`w-7 h-7 ${accent ? 'text-black' : 'text-black/70'}`} />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-2xl mb-3">{title}</h3>
      <p className={`text-lg leading-relaxed ${accent ? 'text-black/70' : 'text-black/60'}`}>
        {description}
      </p>

      {/* Decorative Corner */}
      <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-tl-[64px] transition-opacity ${
        accent ? 'bg-black/5' : 'bg-primary/5 group-hover:opacity-100 opacity-0'
      }`} />
    </motion.div>
  )
}
