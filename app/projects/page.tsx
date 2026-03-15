'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { ArrowUpRight, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'CRM System',
    description: 'AI-powered CRM with predictive insights, automated workflows, real-time dashboards and smart lead scoring.',
    techStack: ['Next.js 15', 'TypeScript', 'MongoDB', 'OpenAI', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accent: 'from-blue-600 to-cyan-500',
    image: '/projects/crm-preview.jpg', // ← add your screenshot
  },
  {
    title: 'E-commerce Platform',
    description: 'High-performance store with Stripe payments, cart persistence, admin panel, reviews & recommendation engine.',
    techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Shadcn/ui'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accent: 'from-purple-600 to-pink-500',
    image: '/projects/ecom-preview.jpg',
  },
  {
    title: 'Local Business Builder',
    description: 'SaaS for small businesses — drag-drop sites, SEO tools, booking, analytics and AI content suggestions.',
    techStack: ['Next.js', 'Supabase', 'Tailwind', 'TypeScript', 'Vercel AI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accent: 'from-emerald-600 to-teal-500',
    image: '/projects/localbiz-preview.jpg',
  },
  {
    title: 'AI Business Chatbot',
    description: 'Custom-trained GPT chatbot with memory, multi-channel support, handover to human & analytics.',
    techStack: ['FastAPI', 'OpenAI', 'React', 'WebSockets', 'LangChain'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accent: 'from-amber-600 to-orange-500',
    image: '/projects/chatbot-preview.jpg',
  },
  // ... add the rest with similar structure + accent & image
  // For brevity I shortened — extend with your full list
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) / 25);
    y.set((e.clientY - centerY) / 25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="group relative"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:border group-hover:shadow-2xl group-hover:shadow-[${project.accent}/20] p-6 md:p-8 h-full flex flex-col`}
      >
        {/* Gradient accent line */}
        <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

        {/* Image placeholder / preview */}
        <div className="relative aspect-video mb-6 rounded-xl overflow-hidden border border-white/10 shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-10" />
          {/* Replace with real <Image src={project.image} ... /> when ready */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center text-gray-500 text-sm">
            Project Preview
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300/90 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm">Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm">Live Demo</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Subtle animated bg orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-1/3 aspect-square bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-15%] right-[-15%] w-2/5 aspect-square bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Featured Work
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Production-grade apps, AI tools & automation systems I've built for real users and businesses
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Got an Idea?
              </h2>
              <p className="text-xl text-gray-300/90 mb-10 max-w-2xl mx-auto">
                Let's build something powerful together — from AI agents to full SaaS platforms.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-purple-900/30 hover:shadow-purple-600/50 transition-all hover:scale-105"
              >
                Start a Project
                <ArrowUpRight className="h-6 w-6" />
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}