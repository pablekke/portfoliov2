"use client"

import AnimatedBackground from "@/components/AnimatedBackground"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection"
import EducationSection from "@/components/EducationSection"
import ContactSection from "@/components/ContactSection"
import ReferencesSection from "@/components/ReferencesSection"
import ScrollProgress from "@/components/ScrollProgress"
import { EasterEgg } from "@/components/EasterEgg"
import { FizzBuzzChallenge, GuessTheNumber } from "@/components/MiniGames"
import { SimpleAIChatbot } from "@/components/SimpleAIChatbot"
import EasterEggHint from "@/components/EasterEggHint"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <div className="relative z-20">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <ReferencesSection />
      </div>
      <EasterEgg trigger="fizz">
        <FizzBuzzChallenge />
      </EasterEgg>
      <EasterEgg trigger="guess">
        <GuessTheNumber />
      </EasterEgg>
      <SimpleAIChatbot />
      <EasterEggHint />
    </div>
  )
}

