import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(8000),
  _hp: z.string().optional(),
})

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      { error: 'Please check your name, email, and message.' },
      { status: 400 }
    )
  }

  const { name, email, message, _hp } = parsed.data
  if (_hp?.trim()) {
    return Response.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    return Response.json(
      { error: 'Contact form is not configured on the server.' },
      { status: 503 }
    )
  }

  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    'Portfolio <onboarding@resend.dev>'

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<h2>New message from your portfolio</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
  })

  if (error) {
    console.error('[contact]', error)
    return Response.json(
      { error: 'Could not send your message. Please try again later.' },
      { status: 502 }
    )
  }

  return Response.json({ ok: true })
}
