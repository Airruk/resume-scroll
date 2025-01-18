import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const msg = {
      to: 'eric@doster.fyi',
      from: 'hello@doster.fyi', // Verified sender
      replyTo: email,
      subject: 'Doster.fyi Contact Inquiry',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br><br>
        <strong>Message:</strong><br>
        ${message.replace(/\n/g, '<br>')}
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('SendGrid Error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
