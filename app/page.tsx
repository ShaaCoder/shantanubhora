'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { ProjectCard } from '@/components/project-card';
import { SkillCard } from '@/components/skill-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { ReelCard } from '@/components/reel-card';
import Link from 'next/link';
import Image from 'next/image';
import { Code as Code2, Brain, Sparkles, Database, ArrowRight, Download, Mail } from 'lucide-react';

// Assuming your image is in public/me.png
// If it's somewhere else → adjust the path accordingly
import profileImg from '@/public/me.png';

const featuredProjects = [
  {
    title: 'CRM System',
    description: 'Advanced customer relationship management system with AI-powered insights and automation.',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'AI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with payment integration and real-time inventory management.',
    techStack: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'AI Chatbot',
    description: 'Intelligent chatbot for businesses using GPT-4 and custom training data.',
    techStack: ['Python', 'OpenAI', 'FastAPI', 'React'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

const skills = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building modern web applications with Next.js, TypeScript, Node.js, and MongoDB',
  },
  {
    icon: Brain,
    title: 'AI Tools & Automation',
    description: 'Creating intelligent systems with AI integration and automation workflows',
  },
  {
    icon: Sparkles,
    title: 'Prompt Engineering',
    description: 'Crafting effective prompts for AI models to deliver optimal results',
  },
  {
    icon: Database,
    title: 'Data Analysis',
    description: 'Extracting insights from data using modern analytics tools and techniques',
  },
];

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, Tech Startup',
    content: 'Shantanu delivered an exceptional CRM system that transformed our business operations. His expertise in AI integration was invaluable.',
    avatar: '',
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    content: 'The automation systems built by Shantanu saved us countless hours. His attention to detail and technical skills are outstanding.',
    avatar: '',
  },
  {
    name: 'Mike Chen',
    role: 'Small Business Owner',
    content: 'Working with Shantanu was a game-changer. He understood our needs and delivered a website that exceeded our expectations.',
    avatar: '',
  },
];

const featuredReels = [
  {
    title: "Next.js Performance Tips",
    url: "https://www.instagram.com/reel/DTyA2H1Enwb/",
  },
  {
    title: "AI Tools for Developers",
    url: "https://www.instagram.com/reel/DTvbnO5Eg8t/",
  },
  {
    title: "Automation Hacks",
    url: "https://www.instagram.com/reel/DTiQxokksVb/",
  },
  {
    title: "TypeScript Best Practices",
    url: "https://www.instagram.com/reel/DTSzWgbEq1g/",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 md:pt-0">
        {/* Subtle background noise (optional – delete if you don't have /noise.png) */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat mix-blend-soft-light" />
        </div>

        <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text + Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                <span className="block text-gray-200">Hey There,</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  I’m Shantanu
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-gray-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I design & build beautiful things.<br />
                AI-powered full stack developer — and I love what I do.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-7 sm:px-9 py-5 sm:py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/30 transition-all"
                  asChild
                >
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-7 sm:px-9 py-5 sm:py-6 border-white/35 hover:bg-white/10 hover:border-white/60 transition-all"
                  asChild
                >
                  <a href="mailto:yourname@example.com">
                    <Mail className="mr-2 h-5 w-5" /> Contact Me
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base sm:text-lg px-7 sm:px-9 py-5 sm:py-6 bg-white/10 hover:bg-white/20 transition-all"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" /> Resume
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-5">
                <div className="px-5 py-2 bg-white/6 backdrop-blur rounded-full border border-white/20 text-sm font-medium flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">5+</span> Years Experience
                </div>
                <div className="px-5 py-2 bg-white/6 backdrop-blur rounded-full border border-white/20 text-sm font-medium flex items-center gap-2">
                  Full-Stack • AI • Automation
                </div>
              </div>
            </motion.div>

            {/* Image + Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25 }}
              className="relative mx-auto max-w-[340px] sm:max-w-[420px] lg:max-w-[500px]"
            >
              {/* Background glow */}
              <div className="absolute -inset-12 lg:-inset-16 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/25 via-cyan-500/30 to-purple-600/20 blur-3xl rounded-full opacity-70 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/15 via-blue-500/10 blur-2xl rounded-full opacity-50" />
              </div>

              <div className="relative rounded-3xl overflow-hidden border-[6px] border-white/12 shadow-2xl shadow-black/60 bg-gradient-to-b from-white/5 to-transparent p-1">
                <Image
                  src={profileImg}
                  alt="Shantanu Bhora"
                  width={600}
                  height={800}
                  priority
                  className="w-full h-auto object-cover rounded-2xl transition-all duration-700 hover:scale-105 hover:brightness-110"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-5 sm:px-6 py-3 rounded-2xl text-base sm:text-lg font-bold shadow-xl border border-white/20">
                AI-Powered Dev
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Skills & Expertise
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.title} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <Button variant="outline" asChild>
                <Link href="/projects">View All</Link>
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

     {/* Reels */}
<section className="py-20 bg-black/30">
  <div className="container mx-auto px-6">
    <AnimatedSection>
      <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Instagram Reels
        </h2>

        <Button variant="outline" asChild>
          <Link href="/reels">View All</Link>
        </Button>
      </div>
    </AnimatedSection>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {featuredReels.map((reel, index) => (
        <ReelCard
          key={reel.title}
          title={reel.title}
          url={reel.url}
          index={index}
        />
      ))}
    </div>
  </div>
</section>
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Clients Say
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-teal-900/20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-300">
                Let's work together to bring your ideas to life with modern technology and AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}