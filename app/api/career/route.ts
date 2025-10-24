import { NextRequest, NextResponse } from "next/server"
import { transport } from "@/lib/nodemailer"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const qualification = formData.get("qualification") as string
    const position = formData.get("position") as string
    const resumeFile = formData.get("resume") as File | null

    let attachments = []
    if (resumeFile && typeof resumeFile.arrayBuffer === "function") {
      const buffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
      })
    }

    const mailOptions = {
      from: "lakshyabhardwaj200315@gmail.com",
      to: "lakshyanoblekode@gmail.com",
      subject: "New Career Application",
      text: `
Name: ${name}
Email: ${email}
Qualification: ${qualification}
Position: ${position}
      `,
      attachments,
    }

    await transport.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}