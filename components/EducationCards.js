import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'

export default function EducationCards() {
  const education = [  
    {
      school: "PECB",
      degree: "Certified: ISO 42001 Lead Implementer",
      details: "August 2024"
    },
    {
      school: "Microsoft",
      degree: "Certified: Azure AI Fundamentals",
      details: "June 2024"
    },
    {
      school: "National School of Applied Sciences (ENSA)",
      degree: "Engineering Degree in Computer Science",
      details: "Graduated with distinction"
    },
    {
      school: "Protestant Secondary School of Lomé Tokoin",
      degree: "High School Degree in Math and Science",
      details: "Graduated with honors"
    }
  ]

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card className="bg-indigo-900/30 border-indigo-600 overflow-hidden group">
            <CardContent className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <h3 className="text-2xl font-semibold mb-2">{edu.school}</h3>
              <p className="text-xl text-gray-300">{edu.degree}</p>
              <p className="text-gray-400 mt-2">{edu.details}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
