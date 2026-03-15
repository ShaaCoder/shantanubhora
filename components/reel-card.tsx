'use client'

import { useEffect } from "react"
import { motion } from "framer-motion"

interface ReelCardProps {
  title: string
  url: string
  index: number
}

export function ReelCard({ title, url, index }: ReelCardProps) {

  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    }
  }, [])

  return (

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-black border border-white/10 rounded-xl p-4"
    >

      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          width: "100%",
          minWidth: "100%"
        }}
      />

      <p className="text-sm text-center mt-3">
        {title}
      </p>

    </motion.div>

  )
}