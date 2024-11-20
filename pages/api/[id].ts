// src/pages/api/hotels/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { Hotel } from './../../lib/hotel-types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    
    // Construct the path to the JSON file
    const filePath = path.join(process.cwd(), 'public', 'uploads', `${id}.json`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    // Read and parse the JSON file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const hotelData: Hotel = JSON.parse(fileContent);

    // Process image paths to ensure they're correct
    const processedData = {
      ...hotelData,
      images: hotelData.images.map(img => `/hotelView/${img}`),
      rooms: hotelData.rooms.map(room => ({
        ...room,
        roomImage: room.roomImage ? `/hotelView/roomview/${room.roomImage}` : null
      }))
    };

    return res.status(200).json({ data: processedData });
  } catch (error) {
    console.error('Error reading hotel data:', error);
    return res.status(500).json({ message: 'Error loading hotel data' });
  }
}