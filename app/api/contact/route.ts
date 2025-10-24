import { NextRequest, NextResponse } from "next/server"
import { transport, smtpEmail } from "@/lib/nodemailer"

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { name, email, phone, requirements, calculatorData } = data

  const mailOptions = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Contact Form Submission",
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Requirements: ${requirements}

Services: ${calculatorData?.services?.join(", ")}
Industry: ${calculatorData?.industry?.join(", ")}
Features: ${calculatorData?.features?.join(", ")}
    `,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}