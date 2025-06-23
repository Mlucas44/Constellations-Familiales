import { Resend } from 'resend';
import fetch from 'node-fetch'; // utile si ce n’est pas global dans ton runtime

const resend = new Resend('re_YX2oW4fr_GH6HbVoyxgpqmBRGG2VbrcoR');
const RECAPTCHA_SECRET = '6LekpmorAAAAAFFL2VoZR81JJI1krUXGTbIfJ7mL'; // à remplacer (ex: dans une variable d'environnement)

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, email, subject, message, token } = req.body;

  // 🔐 Vérification du token reCAPTCHA
  const recaptchaRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET,
        response: token
      })
    }
  );

  const recaptchaJson = await recaptchaRes.json();

  if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
    return res.status(403).json({
      success: false,
      error: 'Échec de la vérification reCAPTCHA'
    });
  }

  // 📩 Envoi de l'e-mail
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'fantatwist11@gmail.com',
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
