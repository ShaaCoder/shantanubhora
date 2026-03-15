'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Code2, Bot, Globe, BarChart3, Zap, Users } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Code2,
    title: 'Full Stack Web Development',
    description: 'Production-grade apps with Next.js 15, TypeScript, Server Components, Edge runtime — fast, scalable, SEO-ready.',
    features: ['App Router + Server Actions', 'Responsive + PWA', 'API-first architecture', 'Performance obsession', 'Auth & payments ready'],
    accent: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Bot,
    title: 'AI Automation Systems',
    description: 'Intelligent agents, RAG pipelines, workflow bots — save hours with custom AI that actually works.',
    features: ['OpenAI / LangChain integration', 'Autonomous multi-step agents', 'Email / Slack / CRM bots', 'No-code + code hybrid', 'Monitoring & fallback'],
    accent: 'from-purple-600 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Local Business Websites',
    description: 'High-converting sites for shops, restaurants, services — modern design + built-in growth tools.',
    features: ['AI content suggestions', 'Booking & contact forms', 'Google Maps + reviews', 'Local SEO optimized', 'Fast loading <2s'],
    accent: 'from-emerald-600 to-teal-500',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis & Insights',
    description: 'Custom dashboards, real-time metrics, predictive reports — turn data into decisions.',
    features: ['Supabase / PostgreSQL', 'Realtime charts (Recharts)', 'Export & scheduled reports', 'Anomaly detection', 'Mobile-friendly views'],
    accent: 'from-amber-600 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Lead Generation Systems',
    description: 'Automated funnels, smart scoring, nurturing — attract & convert without constant babysitting.',
    features: ['Landing page A/B testing', 'Email sequences + SMS', 'CRM sync (HubSpot / etc)', 'Lead qualification AI', 'Analytics dashboard'],
    accent: 'from-rose-600 to-red-500',
  },
  {
    icon: Users,
    title: 'Tech Consulting & Strategy',
    description: 'Stack audits, architecture advice, team upskilling — build the right thing the right way.',
    features: ['Tech debt reduction plans', 'Migration roadmaps', 'Code reviews & refactoring', 'AI adoption strategy', 'Scalability planning'],
    accent: 'from-indigo-600 to-violet-500',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 30);
    y.set((e.clientY - centerY) / 30);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group relative break-inside-avoid"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl p-8 shadow-xl transition-all duration-400 group-hover:shadow-2xl group-hover:shadow-[${service.accent}/15] hover:border-white/20`}
      >
        {/* Accent gradient bar */}
        <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${service.accent} opacity-90 group-hover:opacity-100 transition-opacity`} />

        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} bg-opacity-20`}>
          <service.icon className="h-8 w-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-300/90 mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3 text-sm text-gray-400">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className={`text-lg text-transparent bg-clip-text bg-gradient-to-r ${service.accent}`}>→</span>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background orbs for modern depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-2/5 aspect-square bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-15%] w-1/2 aspect-square bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow delay-3000" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto font-light">
              From full-stack apps to AI agents — I build tools that grow businesses and save time.
            </p>
          </motion.div>

          {/* Masonry grid for cards */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(139,92,246,0.2)' }}
              className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Accelerate Your Business?
              </h2>
              <p className="text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto">
                Let's turn your ideas into scalable, AI-powered solutions — fast.
              </p>
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl shadow-purple-900/30 text-lg px-10 py-7 rounded-full">
                <Link href="/contact">
                  Start a Conversation →
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}