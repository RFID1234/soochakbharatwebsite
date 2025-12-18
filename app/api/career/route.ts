import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = formData.get('name') as string | null
    const email = formData.get('email') as string | null
    const phone = formData.get('phone') as string | null
    const location = formData.get('location') as string | null
    const role = formData.get('role') as string | null
    const experience = formData.get('experience') as string | null
    const message = formData.get('message') as string | null
    const resume = formData.get('resume') as File | null

    if (!name || !email || !role || !experience || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 },
      )
    }

    let attachments: { filename: string; content: string }[] | undefined

    if (resume) {
      const arrayBuffer = await resume.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      attachments = [
        {
          filename: resume.name,
          content: buffer.toString('base64'),
        },
      ]
    }

    const toEmail = process.env.CAREER_TO_EMAIL || 'info@soochakbharat.com'
    const fromEmail =
      process.env.CAREER_FROM_EMAIL || 'Soochak Careers <onboarding@resend.dev>'

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New career application: ${name} – ${role}`,
      replyTo: email || undefined,
      html: `
        <h2>New career application from the website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Current location:</strong> ${location || '-'}</p>
        <p><strong>Role / Department:</strong> ${role}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
        ${
          resume
            ? '<p><strong>Resume:</strong> Attached as PDF file.</p>'
            : '<p><strong>Resume:</strong> Not provided.</p>'
        }
      `,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending career email', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 },
    )
  }
}

