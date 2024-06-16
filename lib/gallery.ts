// lib/gallery.ts
import fs from 'fs';
import path from 'path';

export interface ImageData {
  src: string;
  alt: string;
}

export interface EventData {
  eventName: string;
  images: ImageData[];
}

export function getLocalImages(): EventData[] {
  const galleryDir = path.join(process.cwd(), 'public', 'assets', 'gallery');
  const eventDirectories = fs.readdirSync(galleryDir);

  return eventDirectories.map(eventDir => {
    const eventDirPath = path.join(galleryDir, eventDir);
    const eventImages = fs.readdirSync(eventDirPath);

    const images = eventImages.map(image => ({
      src: `/assets/gallery/${eventDir}/${image}`,
      alt: image.replace(/\.[^/.]+$/, ''), // Remove the file extension for alt text
    }));

    return {
      eventName: eventDir,
      images,
    };
  });
}
