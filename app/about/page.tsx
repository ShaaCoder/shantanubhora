'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { Code2, Brain, Sparkles, Database, Zap, Users } from 'lucide-react';
import Image from 'next/image';
import me from '../../public/me.png';

const skills = [
  { icon: Code2, title: 'Full-Stack Mastery', desc: 'Next.js 15 • TypeScript • React Server Components • Edge Functions • Prisma + Supabase', color: 'blue' },
  { icon: Brain, title: 'AI & Agents', desc: 'OpenAI • LangGraph • RAG pipelines • Custom GPTs • Automation that actually works', color: 'purple' },
  { icon: Sparkles, title: 'Prompt Architecture', desc: 'Chain-of-thought • Tool-use • Few-shot • Evaluation loops • Zero hallucination focus', color: 'amber' },
  { icon: Database, title: 'Data & Insights', desc: 'PostgreSQL • ClickHouse • Realtime dashboards • SQL + Python analytics', color: 'emerald' },
  { icon: Zap, title: 'Obsession with Speed', desc: '100 Lighthouse • Partial Prerendering • Streaming SSR • Image optimization', color: 'rose' },
  { icon: Users, title: 'Teaching & Community', desc: 'Instagram Reels • 10k+ learners • Threads & deep-dives on modern dev + AI', color: 'indigo' },
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-5%] right-[-15%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Hero – asymmetric, bold */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="space-y-8 lg:space-y-10"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-6 py-2.5 text-sm font-medium text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                AI-First Full-Stack Developer
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight bg-gradient-to-br from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Shantanu Bhora
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300/90 font-light max-w-2xl leading-relaxed">
                I build production-grade apps that blend modern web stacks with AI agents — fast, scalable, and actually useful.
              </p>

              <div className="flex flex-wrap gap-5 pt-6">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59,130,246,0.4)' }}
                  href="#skills"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-5 font-semibold text-white shadow-2xl shadow-blue-900/30 transition-all"
                >
                  <span className="relative z-10">See My Toolkit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <a
                  href="/projects"
                  className="rounded-2xl border border-white/20 px-8 py-5 font-medium text-white/90 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  View Projects →
                </a>
              </div>
            </motion.div>

            {/* Floating image with glass effect + tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.4 }}
              className="relative lg:-mr-20 xl:-mr-32"
            >
              <div className="relative aspect-[4/5] sm:aspect-square max-w-md lg:max-w-lg mx-auto rounded-3xl overflow-hidden border-[6px] border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] backdrop-blur-md">
                <Image
                  src={me}
                  alt="Shantanu Bhora"
                  fill
                  className="object-cover scale-110 transition-transform duration-1000 hover:scale-125"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating stats glass cards */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-10 -left-6 sm:-left-12 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-2xl"
              >
                <p className="text-2xl font-bold text-white">40+</p>
                <p className="text-sm text-white/70">Projects Shipped</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -top-8 -right-6 sm:-right-12 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-2xl"
              >
                <p className="text-2xl font-bold text-white">10k+</p>
                <p className="text-sm text-white/70">Learners Reached</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills – staggered glassmorphic masonry */}
      <section id="skills" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What I Bring to the Table
            </h2>
          </AnimatedSection>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className={`group break-inside-avoid rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:border-${skill.color}-500/40 hover:shadow-${skill.color}-500/20`}
              >
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-${skill.color}-600/30 to-${skill.color}-500/10 text-white`}>
                  <skill.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-300/80 leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline – modern connected dots */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black/20 to-transparent">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-black text-center mb-20">
              My Path So Far
            </h2>
          </AnimatedSection>

          <div className="relative space-y-16 md:space-y-24">
            {/* Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-transparent md:-translate-x-1/2" />

            {[
              {
                title: 'Full-Stack + AI Developer',
                period: '2020 — Now',
                desc: 'Architecting fast, type-safe apps with Next.js App Router, Server Actions, AI integrations, auth (NextAuth/Auth.js), payments, realtime features.',
              },
              {
                title: 'AI Automation & Agents Builder',
                period: '2021 — Now',
                desc: 'Designing autonomous agents, multi-step reasoning chains, internal tools, RAG systems — saving hundreds of dev hours monthly.',
              },
              {
                title: 'Educator & Content Creator',
                period: '2022 — Now',
                desc: 'Instagram reels, deep-dive threads, tutorials — helping devs adopt modern stacks + AI faster.',
              },
            ].map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center ${
                  i % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-14 md:pl-0`}>
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-shadow">
                    <h3 className="text-3xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-medium mb-4">{exp.period}</p>
                    <p className="text-gray-300/80 leading-relaxed text-lg">{exp.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-3 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-background z-10 -translate-x-1/2 flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-white animate-ping-slow" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}