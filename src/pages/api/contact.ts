import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Gebruik alleen POST.' });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Vul naam, e-mail en bericht in.' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Ongeldig e-mailadres.' });
  }

  const webhookUrl = process.env.CONTACT_ME_WEBHOOK;
  if (!webhookUrl) {
    return res.status(500).json({ success: false, error: 'Webhook-URL ontbreekt.' });
  }

  try {
    const embed = {
      embeds: [
        {
          title: `Nieuw Contactformulier Bericht${
            process.env.NODE_ENV === 'development' && ' DEV'
          }`,
          color: 3447003,
          fields: [
            { name: 'Naam', value: name, inline: true },
            { name: 'E-mail', value: email, inline: true },
            { name: 'Bericht', value: message },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    await axios.post(webhookUrl, embed);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Fout bij het versturen van de webhook:', error);
    return res.status(500).json({ success: false, error: 'Kon webhook niet verzenden.' });
  }
}
