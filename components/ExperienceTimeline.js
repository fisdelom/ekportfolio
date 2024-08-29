import React from 'react'
import { motion } from 'framer-motion'

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "KEKELI Technologies",
      role: "Founder & IT Consultant",
      period: "2013 - Present",
      description: "Leading software development projects across various sectors"
    },
    {
      company: "COMARTIS",
      role: "Senior Software Engineer",
      period: "2007 - 2013",
      description: "Designed and implemented CRM, E-commerce, and LMS solutions"
    }
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex flex-col md:flex-row"
        >
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-pink-500">{exp.company}</h3>
            <p className="text-gray-400">{exp.period}</p>
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <h4 className="text-xl font-medium">{exp.role}</h4>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
