// api/send.ts
import { Resend } from 'resend'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { name, email, subject, message } = req.body

  try {
    const data = await resend.emails.send({
      from: 'Contact <contact@tonsite.com>',
      to: 'ton.email@exemple.com',
      subject: `📩 Nouveau message : ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `
    })

    return res.status(200).json({ success: true, data })
  } catch (error: unknown) {
    console.error('Erreur Resend :', error)
    return res.status(500).json({ success: false, error: String(error) })
  }
}
