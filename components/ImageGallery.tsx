// components/ImageGallery.tsx
import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
          <img src={src} alt={`Hotel View ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;