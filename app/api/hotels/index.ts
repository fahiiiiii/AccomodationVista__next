// pages/api/hotels/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getHotels } from '../../../lib/server/hotel-utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const hotels = await getHotels();
      res.status(200).json(hotels);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      res.status(500).json({ error: 'Failed to fetch hotels' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
