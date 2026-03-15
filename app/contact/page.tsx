'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      window.open(data.whatsappUrl, "_blank");

      toast({
        title: "Opening WhatsApp",
        description: "Send the message to complete the contact request.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // 3D tilt helpers for cards
  const useTilt = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 120, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 120, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left - rect.width / 2) / 30);
      y.set((e.clientY - rect.top - rect.height / 2) / 30);
    };

    const onLeave = () => { x.set(0); y.set(0); };

    return { rotateX, rotateY, onMove, onLeave };
  };

  const formTilt = useTilt();
  const infoTilt = useTilt();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-muted/40">
      {/* Animated orbs background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-15%] w-1/3 aspect-square bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-25%] right-[-20%] w-2/5 aspect-square bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Let's Build Something
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto font-light">
              Got a project, question, or just want to say hi? Drop me a line.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto items-start">
            {/* Left: Form – glassmorphic with tilt */}
            <AnimatedSection>
              <motion.div
                {...formTilt}
                onMouseMove={formTilt.onMove}
                onMouseLeave={formTilt.onLeave}
                style={{
                  rotateX: formTilt.rotateX,
                  rotateY: formTilt.rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent pointer-events-none" />

                <h2 className="text-3xl font-bold mb-2">Send a Message</h2>
                <p className="text-muted-foreground mb-8">
                  I'll usually reply within 1–2 business days.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Shantanu Bhora"
                      required
                      className="bg-white/5 border-white/20 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@shantanubhora.com"
                      required
                      className="bg-white/5 border-white/20 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hey Shantanu, I have an idea for an AI-powered CRM..."
                      rows={6}
                      required
                      className="bg-white/5 border-white/20 focus:border-primary/50 min-h-[140px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-900/20 py-6 text-lg rounded-xl"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </AnimatedSection>

            {/* Right: Info cards + social + resume */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                {/* Contact Info Card */}
                <motion.div
                  {...infoTilt}
                  onMouseMove={infoTilt.onMove}
                  onMouseLeave={infoTilt.onLeave}
                  style={{
                    rotateX: infoTilt.rotateX,
                    rotateY: infoTilt.rotateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                  <h3 className="text-2xl font-bold mb-6">Reach Out Directly</h3>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                       <a href="mailto:shaanbhora222@gmail.com" className="text-primary hover:underline">
  shaanbhora222@gmail.com
</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-green-500/10 text-green-400">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                       <a href="tel:+918810524651" className="text-primary hover:underline">
  +91 8810524651
</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                   <p className="text-muted-foreground">
  H-106 Meer Vihar Mubarakpur Dabas  
  New Delhi - 110081
</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: Github, href: 'https://github.com', label: 'GitHub' },
                      { icon: Linkedin, href: 'https://linkedin.com/in/shantanubhora', label: 'LinkedIn' },
                      { icon: Instagram, href: 'https://instagram.com/shantanubhora', label: 'Instagram' },
                      { icon: Mail, href: 'mailto:shantanu@example.com', label: 'Email' },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-primary transition-all duration-300"
                        aria-label={item.label}
                      >
                        <item.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Freelance CTA */}
                <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-primary/20 rounded-3xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">Available for Freelance</h3>
                  <p className="text-muted-foreground mb-6">
                    Full-time projects, consulting, AI integrations, or full-stack builds.
                  </p>
                  <Button variant="outline" size="lg" asChild className="border-primary/50 hover:bg-primary/10">
                    <a href="/resume.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}