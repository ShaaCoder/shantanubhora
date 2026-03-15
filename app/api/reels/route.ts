import { NextResponse } from "next/server";

export async function GET() {
  const reels = [
    {
      title: "Next.js Tips",
      url: "https://www.instagram.com/reel/DTyA2H1Enwb/"
    },
    {
      title: "AI Tools",
      url: "https://www.instagram.com/reel/DTvbnO5Eg8t/"
    },
    {
      title: "Automation Hacks",
      url: "https://www.instagram.com/reel/DTs0xZREs2L/"
    },
    {
      title: "Debugging Tricks",
      url: "https://www.instagram.com/reel/DTnlAQJEiYh/"
    }
  ];

  return NextResponse.json(reels);
}