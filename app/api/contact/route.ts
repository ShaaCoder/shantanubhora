import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const phoneNumber = "918810524651";

    const text = `New Contact Form Message

Name: ${name}
Email: ${email}

Message:
${message}
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    return NextResponse.json({
      success: true,
      whatsappUrl,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}