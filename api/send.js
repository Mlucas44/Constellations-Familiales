const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

module.exports = async (req, res) => {
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
        <p><strong>Message :</strong><br/>${message}</p>
      `
    })

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Erreur Resend :', error)
    return res.status(500).json({ success: false, error: String(error) })
  }
}
