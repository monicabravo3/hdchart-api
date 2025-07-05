export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { birthDate, birthTime, birthLocation } = req.body;

  // Dummy Human Design chart data (replace with real logic later)
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

  res.status(200).json({ chart });
}
