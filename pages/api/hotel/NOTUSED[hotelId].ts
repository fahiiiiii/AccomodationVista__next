import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { hotelId } = req.query;

  const filePath = path.join(process.cwd(), 'public/uploads', `${hotelId}.json`);

  if (fs.existsSync(filePath)) {
    const hotelData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.status(200).json({ message: 'Hotel details retrieved successfully', data: hotelData });
  } else {
    res.status(404).json({ error: 'Hotel not found' });
  }
}