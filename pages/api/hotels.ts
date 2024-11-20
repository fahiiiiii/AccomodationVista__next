// // pages/api/hotels.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
// import path from 'path';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const uploadsDir = path.join(process.cwd(), './../../../uploads');
//     const files = fs.readdirSync(uploadsDir);
    
//     const hotels = files
//       .filter(file => file.endsWith('.json'))
//       .map(file => {
//         const filePath = path.join('./../../../uploads', file);
//         const fileContent = fs.readFileSync(filePath, 'utf8');
//         return JSON.parse(fileContent);
//       });

//     res.status(200).json(hotels);
//   } catch (error) {
//     console.error('Error reading hotel data:', error);
//     res.status(500).json({ message: 'Error reading hotel data' });
//   }
// }

import { NextApiRequest, NextApiResponse } from 'next';  // Import the Next.js API types
import path from 'path';  // Import path module
import fs from 'fs';  // Import fs module

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const uploadsDir = path.join(process.cwd(), 'public/uploads');  // Correct path
    const files = fs.readdirSync(uploadsDir);  // Read files in the uploads directory
    
    const hotels = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(uploadsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
      });

    res.status(200).json(hotels);  // Return hotels as response
  } catch (error) {
    console.error('Error reading hotel data:', error);
    res.status(500).json({ message: 'Error reading hotel data' });
  }
}
