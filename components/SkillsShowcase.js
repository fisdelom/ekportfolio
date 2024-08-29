import React from 'react'
import { motion } from 'framer-motion'

export default function SkillsShowcase() {
  const skills = [
    'ASP.NET Core', 'Azure', 'C#', 'Angular', 'React', 'SQL Server',
    'MongoDB', 'Docker', 'Kubernetes', 'Clean Architecture', 'Microservices'
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="p-4 bg-indigo-800/30 rounded-lg border border-indigo-500 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
        >
          <p className="text-center font-medium">{skill}</p>
        </motion.div>
      ))}
    </div>
  )
}
