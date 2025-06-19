// send.js ou send.mjs
import { Resend } from 'resend';

const resend = new Resend('re_YX2oW4fr_GH6HbVoyxgpqmBRGG2VbrcoR');

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Contact <contact@tonsite.com>',
      to: 'mlucas44@outlook.fr',
      subject: `📩 Nouveau message : ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erreur Resend :', error);
    return res.status(500).json({ success: false, error: String(error) });
  }
};
