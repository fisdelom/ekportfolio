import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../components/ui/button'
import { ChevronDownIcon, CodeIcon, BriefcaseIcon, GraduationCapIcon, AwardIcon } from 'lucide-react'
import Section from '@/components/Section'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import SkillsShowcase from '@/components/SkillsShowcase'
import EducationCards from '@/components/EducationCards'
import AchievementsList from '@/components/AchievementsList'

export default function EnhancedPortfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'skills', 'education', 'achievements', 'get-in-touch']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-x-hidden font-['Poppins',sans-serif]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
        <ul className="flex justify-center space-x-4 p-4">
          {['Experience', 'Skills', 'Education', 'Achievements', 'Get in Touch'].map((item) => (
            <li key={item}>
              <Button
                variant="ghost"
                className={`
                  text-sm relative overflow-hidden
                  ${activeSection.toLowerCase() === item.toLowerCase() ? 'text-pink-500' : 'text-white'}
                  transition-all duration-300 ease-in-out
                  hover:text-pink-500 hover:bg-pink-500/10
                  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
                `}
                onClick={() => {
                  const sectionId = item.toLowerCase().replace(' ', '-');
                  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute inset-0 blur-lg bg-pink-500 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="hero" className="h-screen flex items-center justify-center">
        <motion.div
          style={{ opacity, scale }}
          className="text-center"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            Eli KUDJIE
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-gray-300"
          >
            IT Consultant | Architect | Technical Lead | Tech Entrepreneur
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 animate-bounce"
          >
            <ChevronDownIcon className="mx-auto" size={32} />
          </motion.div>
        </motion.div>
      </Section>

      <Section id="experience" icon={BriefcaseIcon} title="Professional Experience">
        <ExperienceTimeline />
      </Section>

      <Section id="skills" icon={CodeIcon} title="Technical Expertise">
        <SkillsShowcase />
      </Section>

      <Section id="education" icon={GraduationCapIcon} title="Educational Background">
        <EducationCards />
      </Section>

      <Section id="achievements" icon={AwardIcon} title="Key Achievements">
        <AchievementsList />
      </Section>

      <Section id="get-in-touch" title="Get in Touch">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
          <p className="text-gray-300 mb-4">Feel free to reach out via email:</p>
          <a href="mailto:ek@elikudjie.com" className="text-pink-500 underline">
            ek@elikudjie.com
          </a>
        </div>
      </Section>
    </div>
  )
}