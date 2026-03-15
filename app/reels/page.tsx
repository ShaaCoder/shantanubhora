'use client'

import { useEffect, useState } from "react"
import { ReelCard } from "@/components/reel-card"

export default function Reels() {

  const [reels, setReels] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/reels")
      .then(res => res.json())
      .then(data => setReels(data))
  }, [])

  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    }
  }, [reels])

  return (

    <div className="container mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-12">
        Instagram Reels
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {reels.map((reel, index) => (
          <ReelCard
            key={index}
            title={reel.title}
            url={reel.url}
            index={index}
          />
        ))}

      </div>

    </div>

  )
}