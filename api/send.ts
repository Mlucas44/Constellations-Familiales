import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Méthode non autorisée')
  }

  const { name, email, subject, message } = req.body

  try {
    const response = await resend.emails.send({
      from: 'Portfolio <contact@tonsite.com>',
      to: 'mlucas44@outlook.fr',
      subject: `📩 Nouveau message - ${subject}`,
      reply_to: email,
      html: `
        <h3>Message du formulaire de contact</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `
    })

    res.status(200).json({ success: true, response })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}
