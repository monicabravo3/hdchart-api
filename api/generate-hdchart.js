export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { birthDate, birthTime, birthLocation } = req.body;

    // Static chart result
    const chart = {
      type: 'Manifesting Generator',
      strategy: 'To Respond',
      authority: 'Emotional',
      profile: '1/3',
      definedCenters: ['Sacral', 'Root'],
      undefinedCenters: ['Heart', 'Ajna'],
      gates: ['2', '14', '34'],
      channels: ['34-20', '2-14'],
      incarnationCross: 'Right Angle Cross of the Sleeping Phoenix'
    };

    return res.status(200).json({ chart });
  } catch (error) {
    return res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
}
