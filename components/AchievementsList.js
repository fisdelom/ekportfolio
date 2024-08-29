import React from 'react'
import { motion } from 'framer-motion'
import { AwardIcon } from 'lucide-react'

export default function AchievementsList() {
  const achievements = [
    "Successfully launched XperienceDiaspora, a web platform for the African diaspora",
    "Developed Eklayr, a marketplace for online training with mobile money integration",
    "Led the development of a pharmacy and drug management web application for DHS Saudi Arabia",
    "Designed and implemented a law firm management software",
    "Migrated and enhanced an electricity consumption management application for Montpellier, France"
  ]

  return (
    <ul className="space-y-4">
      {achievements.map((achievement, index) => (
        <motion.li
          key={index}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start"
        >
          <AwardIcon className="w-6 h-6 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
          <p className="text-gray-300">{achievement}</p>
        </motion.li>
      ))}
    </ul>
  )
}
