//hotel-utils.ts
import fs from 'fs';
import path from 'path';
import { Hotel } from './../hotel-types';

const uploadsDir = path.join(process.cwd(), 'public/uploads');

const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

export const getHotels = async (): Promise<Hotel[]> => {
  try {
    ensureDirectoryExists(uploadsDir);

    const files = fs.readdirSync(uploadsDir);
    const hotels = await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map(async file => {
          const filePath = path.join(uploadsDir, file);
          const fileContents = await fs.promises.readFile(filePath, 'utf8');
          return JSON.parse(fileContents) as Hotel;
        })
    );

    return hotels.filter((hotel): hotel is Hotel => hotel !== null);
  } catch (error) {
    console.error('Error loading hotels:', error);
    return []; // Return an empty array if an error occurs
  }
};
