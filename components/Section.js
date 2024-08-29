import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Section({ id, icon: Icon, title, children, className = '' }) {
  const { scrollYProgress } = useScroll({
    target: React.useRef(null),
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.section
      id={id}
      style={{ opacity, scale }}
      className={`min-h-screen py-20 ${className}`}
    >
      <div className="container mx-auto px-4">
        {title && (
          <div className="flex items-center justify-center mb-12">
            {Icon && <Icon className="w-8 h-8 mr-2 text-pink-500" />}
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </motion.section>
  )
}
