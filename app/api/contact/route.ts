import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body as {
      name?: string
      email?: string
      phone?: string
      company?: string
      subject?: string
      message?: string
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@soochakbharat.com'
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || 'Soochak Website <onboarding@resend.dev>'

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New website enquiry: ${subject}`,
      reply_to: email,
      html: `
        <h2>New enquiry from the website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending contact email', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 },
    )
  }
}


