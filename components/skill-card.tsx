'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { type LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function SkillCard({ icon: Icon, title, description, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
