// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Hotel } from './../lib/hotel-types';
// import { X, MapPin, Users, Bed, Bath } from 'lucide-react';

// interface HotelDetailModalProps {
//   hotel: Hotel;
//   onClose: () => void;
// }

// const HotelDetailModal: React.FC<HotelDetailModalProps> = ({ hotel, onClose }) => {
//   const imagePath = '/accomo-vista/public';

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 z-10 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
//         >
//           <X size={24} />
//         </button>

//         {/* Image Gallery */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
//           {hotel.images.length > 0 ? (
//             hotel.images.map((image, index) => (
//               <div key={index} className="relative h-64">
//                 {/* <Image
//                   src={`/hotelView/${image}`}
//                   alt={`${hotel.title} - Image ${index + 1}`}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="rounded-lg"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 /> */}
//                 <Image
//   src={`/hotelView/${image}`}  // Corrected path
//   alt={`${hotel.title} - Image ${index + 1}`}
//   fill
//   style={{ objectFit: 'cover' }}
//   className="rounded-lg"
//   sizes="(max-width: 768px) 100vw, 50vw"
// />

//               </div>
//             ))
//           ) : (
//             <div className="col-span-full bg-gray-200 h-64 flex items-center justify-center rounded-lg">
//               No Images Available
//             </div>
//           )}
//         </div>

//         {/* Hotel Details */}
//         <div className="p-6">
//           <h2 className="text-3xl font-bold mb-4">{hotel.title}</h2>
//           <p className="text-gray-600 mb-4">{hotel.description}</p>

//           <div className="grid md:grid-cols-2 gap-4 mb-4">
//             <div className="flex items-center space-x-2">
//               <MapPin className="text-blue-500" />
//               <span>{hotel.address}</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users className="text-green-500" />
//               <span>{hotel.guestCount} Guests</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Bed className="text-purple-500" />
//               <span>{hotel.bedroomCount} Bedrooms</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Bath className="text-teal-500" />
//               <span>{hotel.bathroomCount} Bathrooms</span>
//             </div>
//           </div>

//           {/* Amenities */}
//           <div className="mb-4">
//             <h3 className="text-xl font-semibold mb-2">Amenities</h3>
//             <div className="flex flex-wrap gap-2">
//               {hotel.amenities.map((amenity, index) => (
//                 <span 
//                   key={index} 
//                   className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
//                 >
//                   {amenity.trim()}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Rooms */}
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Rooms</h3>
//             <div className="grid md:grid-cols-2 gap-4">
//               {hotel.rooms.map((room, index) => (
//                 <div 
//                   key={index} 
//                   className="border rounded-lg p-4 flex items-center space-x-4"
//                 >
//                   {room.roomImage ? (
//                     <div className="relative w-24 h-24">
//                       <Image
//                         src={`${imagePath}${room.roomImage}`}
//                         alt={room.roomTitle}
//                         fill
//                         style={{ objectFit: 'cover' }}
//                         className="rounded-lg"
//                         sizes="100px"
//                       />
//                     </div>
//                   ) : (
//                     <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
//                       No Image
//                     </div>
//                   )}
//                   <div>
//                     <h4 className="font-semibold">{room.roomTitle}</h4>
//                     <p className="text-sm text-gray-600">{room.bedroomCount} Bedroom</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelDetailModal;
// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import axios from 'axios';
// import { X, MapPin, Users, Bed, Bath } from 'lucide-react';
// import { Hotel } from './../lib/hotel-types'; // Import the Hotel type

// interface HotelDetailModalProps {
//   hotelId: string;  // Expect hotelId as a string
//   onClose: () => void;
// }

// const HotelDetailModal: React.FC<HotelDetailModalProps> = ({ hotelId, onClose }) => {
//   const [hotel, setHotel] = useState<Hotel | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch hotel data using the hotelId
//   useEffect(() => {
//     const fetchHotelData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Define the type for response data as Hotel (or if you prefer, define a wrapper with a data field)
//         const response = await axios.get(`/api/hotels/${hotelId}`);
        
//         // Type the response.data directly
//         setHotel(response.data as Hotel);
//       } catch (err: any) {
//         setError('Error fetching hotel details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (hotelId) {
//       fetchHotelData();
//     }
//   }, [hotelId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   if (!hotel) return <div>No hotel data available</div>;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 z-10 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
//         >
//           <X size={24} />
//         </button>

//         {/* Image Gallery */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
//           {hotel.images.length > 0 ? (
//             hotel.images.map((image, index) => (
//               <div key={index} className="relative h-64">
//                 <Image
//                   src={image}  // Correct image path
//                   alt={`${hotel.title} - Image ${index + 1}`}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="rounded-lg"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full bg-gray-200 h-64 flex items-center justify-center rounded-lg">
//               No Images Available
//             </div>
//           )}
//         </div>

//         {/* Hotel Details */}
//         <div className="p-6">
//           <h2 className="text-3xl font-bold mb-4">{hotel.title}</h2>
//           <p className="text-gray-600 mb-4">{hotel.description}</p>

//           <div className="grid md:grid-cols-2 gap-4 mb-4">
//             <div className="flex items-center space-x-2">
//               <MapPin className="text-blue-500" />
//               <span>{hotel.address}</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users className="text-green-500" />
//               <span>{hotel.guestCount} Guests</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Bed className="text-purple-500" />
//               <span>{hotel.bedroomCount} Bedrooms</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Bath className="text-teal-500" />
//               <span>{hotel.bathroomCount} Bathrooms</span>
//             </div>
//           </div>

//           {/* Amenities */}
//           <div className="mb-4">
//             <h3 className="text-xl font-semibold mb-2">Amenities</h3>
//             <div className="flex flex-wrap gap-2">
//               {hotel.amenities.map((amenity, index) => (
//                 <span 
//                   key={index} 
//                   className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
//                 >
//                   {amenity.trim()}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Rooms */}
//           <div>
//             <h3 className="text-xl font-semibold mb-2">Rooms</h3>
//             <div className="grid md:grid-cols-2 gap-4">
//               {hotel.rooms.map((room, index) => (
//                 <div 
//                   key={index} 
//                   className="border rounded-lg p-4 flex items-center space-x-4"
//                 >
//                   {room.roomImage ? (
//                     <div className="relative w-24 h-24">
//                       <Image
//                         src={`/uploads/${room.roomImage}`} // Correct path for room images
//                         alt={room.roomTitle}
//                         fill
//                         style={{ objectFit: 'cover' }}
//                         className="rounded-lg"
//                         sizes="100px"
//                       />
//                     </div>
//                   ) : (
//                     <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
//                       No Image
//                     </div>
//                   )}
//                   <div>
//                     <h4 className="font-semibold">{room.roomTitle}</h4>
//                     <p className="text-sm text-gray-600">{room.bedroomCount} Bedroom</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelDetailModal;
// ---------------------------------------------
// HotelDetailModal.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { X, MapPin, Users, Bed, Bath } from 'lucide-react';
import { Hotel } from './../lib/hotel-types'; // Import the Hotel type

interface HotelDetailModalProps {
  hotelId: string;  // Expect hotelId as a string
  onClose: () => void;
}

const HotelDetailModal: React.FC<HotelDetailModalProps> = ({ hotelId, onClose }) => {
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch hotel data using the hotelId
  useEffect(() => {
    const fetchHotelData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/hotels/${hotelId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch hotel details');
        }
        const data = await response.json();
        setHotel(data.data);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Error fetching hotel details';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
  
    if (hotelId) {
      fetchHotelData();
    }
  }, [hotelId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!hotel) return <div>No hotel data available</div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
        >
          <X size={24} />
        </button>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {hotel.images.length > 0 ? (
            hotel.images.map((image, index) => (
              <div key={index} className="relative h-64">
                <Image
                  src={image}  // Correct image path
                  alt={`${hotel.title} - Image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              No Images Available
            </div>
          )}
        </div>

        {/* Hotel Details */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{hotel.title}</h2>
          <p className="text-gray-600 mb-4">{hotel.description}</p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <MapPin className="text-blue-500" />
              <span>{hotel.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-green-500" />
              <span>{hotel.guestCount} Guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bed className="text-purple-500" />
              <span>{hotel.bedroomCount} Bedrooms</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bath className="text-teal-500" />
              <span>{hotel.bathroomCount} Bathrooms</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {hotel.amenities.map((amenity, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {amenity.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Rooms */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Rooms</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {hotel.rooms.map((room, index) => (
                <div 
                  key={index} 
                  className="border rounded-lg p-4 flex items-center space-x-4"
                >
                  {room.roomImage ? (
                    <div className="relative w-24 h-24">
                      <Image
                        src={`/uploads/${room.roomImage}`} // Correct path for room images
                        alt={room.roomTitle}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                        sizes="100px"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg">
                      No Image
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold">{room.roomTitle}</h4>
                    <p className="text-sm text-gray-600">{room.bedroomCount} Bedroom</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailModal;
