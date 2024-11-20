// "use client";
// import React, { useState, useEffect } from 'react';
// import { MapPin, Users, Bed, Bath, X } from 'lucide-react';

// interface Hotel {
//   id: string;
//   slug: string;
//   title: string;
//   description: string;
//   guestCount: number;
//   bedroomCount: number;
//   bathroomCount: number;
//   amenities: string[];
//   hostInfo: string;
//   address: string;
//   latitude: number;
//   longitude: number;
//   images: string[];
//   rooms: Room[];
// }

// interface Room {
//   hotelSlug: string;
//   roomSlug: string;
//   roomImage: string;
//   roomTitle: string;
//   bedroomCount: number;
// }

// const HotelGallery = () => {
//   const [hotels, setHotels] = useState<Hotel[]>([]);
//   const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch('/api/hotels');
//         const data = await response.json();
//         setHotels(data);
//       } catch (error) {
//         console.error('Error fetching hotels:', error);
//       }
//     };

//     fetchHotels();
//   }, []);

//   const handleHotelClick = (hotel: Hotel) => {
//     setSelectedHotel(hotel);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Hotel Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {hotels.map((hotel) => (
//           <div 
//             key={hotel.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
//             onClick={() => handleHotelClick(hotel)}
//           >
//             <div className="relative h-64 w-full">
//               {hotel.images[0] ? (
//                 <img
//                   src={`/HotelView/${hotel.images[0]}`}
//                   alt={hotel.title}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                   <span className="text-gray-400">No image available</span>
//                 </div>
//               )}
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{hotel.title}</h3>
//               <div className="flex items-center text-gray-600 mb-2">
//                 <MapPin className="w-4 h-4 mr-1" />
//                 <span className="text-sm">{hotel.address}</span>
//               </div>
//               <p className="text-gray-600 line-clamp-2">{hotel.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Hotel Details Modal */}
//       {isModalOpen && selectedHotel && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold">{selectedHotel.title}</h2>
//                 <button 
//                   onClick={() => setIsModalOpen(false)}
//                   className="p-2 hover:bg-gray-100 rounded-full"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
              
//               {/* Image Gallery */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
//                 {selectedHotel.images.map((image, index) => (
//                   <img
//                     key={index}
//                     src={`/HotelView/${image}`}
//                     alt={`${selectedHotel.title} - Image ${index + 1}`}
//                     className="w-full h-64 object-cover rounded-lg"
//                   />
//                 ))}
//               </div>

//               {/* Hotel Information */}
//               <div className="space-y-6">
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center">
//                     <Users className="w-5 h-5 mr-2" />
//                     <span>{selectedHotel.guestCount} guests</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Bed className="w-5 h-5 mr-2" />
//                     <span>{selectedHotel.bedroomCount} bedrooms</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Bath className="w-5 h-5 mr-2" />
//                     <span>{selectedHotel.bathroomCount} bathrooms</span>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Description</h3>
//                   <p className="text-gray-600">{selectedHotel.description}</p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Amenities</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedHotel.amenities.map((amenity, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 bg-gray-100 rounded-full text-sm"
//                       >
//                         {amenity}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Rooms Section */}
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Available Rooms</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {selectedHotel.rooms.map((room) => (
//                       <div 
//                         key={room.roomSlug}
//                         className="bg-white border rounded-lg p-4"
//                       >
//                         <div className="flex items-center justify-between mb-2">
//                           <h4 className="font-semibold">{room.roomTitle}</h4>
//                           <div className="flex items-center">
//                             <Bed className="w-4 h-4 mr-1" />
//                             <span>{room.bedroomCount}</span>
//                           </div>
//                         </div>
//                         {room.roomImage && (
//                           <img
//                             src={`/HotelView/${room.roomImage}`}
//                             alt={room.roomTitle}
//                             className="w-full h-32 object-cover rounded-lg"
//                           />
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h3 className="text-lg font-semibold">Host</h3>
//                     <p className="text-gray-600">{selectedHotel.hostInfo}</p>
//                   </div>
//                   <div className="text-right">
//                     <h3 className="text-lg font-semibold">Location</h3>
//                     <p className="text-gray-600">{selectedHotel.address}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelGallery;
// components/HotelGallery.tsx
// components/HotelGallery.tsx
// components/HotelGallery/index.tsx
import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

type HotelGalleryProps = {
  images: string[];
};

export async function getHotelImages(): Promise<string[]> {
  const imageDirectory = path.join(process.cwd(), './../public/hotelView');
  try {
    const imageFilenames = fs.readdirSync(imageDirectory);
    return imageFilenames
      .filter(filename => 
        filename.endsWith('.jpg') || 
        filename.endsWith('.jpeg') || 
        filename.endsWith('.png')
      )
      .filter(filename => !filename.includes('property-manager'))
      .map(filename => `/hotelView/${filename}`)
      .slice(0, 5);
  } catch (error) {
    console.error('Error reading image directory:', error);
    return [];
  }
}

const HotelGallery: React.FC<HotelGalleryProps> = ({ images }) => {
  const getClassName = (index: number): string => {
    if (index === 0) return 'col-span-2 row-span-2';
    return 'col-span-1';
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-1 relative h-[500px]">
        {images.slice(0, 5).map((src, index) => (
          <div 
            key={index}
            className={`relative ${getClassName(index)} overflow-hidden`}
          >
            <Image
              src={src}
              alt={`Hotel view ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-md hover:opacity-95 transition-all duration-300"
              priority={index === 0}
            />
          </div>
        ))}
        {images.length > 5 && (
          <button className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
            {images.length - 5}+
          </button>
        )}
      </div>
    </div>
  );
};

export default HotelGallery;