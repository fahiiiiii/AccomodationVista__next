
// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Hotel } from '../lib/hotel-types'; // Assuming `hotel-types` defines the Hotel interface
// import HotelDetailModal from './HotelDetailModal';

// interface HotelListProps {
//   hotels: Hotel[];
// }

// const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
//   const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleImageClick = (hotel: Hotel) => {
//     setSelectedHotelId(hotel.id);
//   };

//   const closeModal = () => {
//     setSelectedHotelId(null);
//     setError(null);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Our Hotels</h1>
      
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {hotels?.map((hotel) => (
//           <div
//             key={hotel.id}
//             className={`bg-white rounded-lg shadow-md overflow-hidden 
//               ${isLoading ? 'opacity-50 cursor-wait' : 'hover:shadow-xl cursor-pointer'}
//               transition-all duration-300`}
//             onClick={() => !isLoading && handleImageClick(hotel)}
//           >
//             {hotel.images && hotel.images.length > 0 ? (
//               <div className="relative w-full h-64">
//                 <Image
//                   src={`/hotelView/${hotel.images[0]}`}
//                   alt={hotel.title || 'Hotel image'}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />
//               </div>
//             ) : (
//               <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
//                 No Image Available
//               </div>
//             )}
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{hotel.title}</h2>
//               <p className="text-gray-600 line-clamp-2">{hotel.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedHotelId && (
//         <HotelDetailModal
//           hotelId={selectedHotelId}
//           onClose={closeModal}
//         />
//       )}
//     </div>
//   );
// };

// export default HotelList;


'use client';
import React, { useState } from 'react';

interface Hotel {
  id: string;
  title: string;
  description: string;
  images: string[];
}

interface HotelListProps {
  hotels: Hotel[];
}

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [hotelDetails, setHotelDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageClick = async (hotel: Hotel) => {
    setIsLoading(true);
    setSelectedHotel(hotel);
    
    try {
      const response = await fetch(`/details/${hotel.id}.json`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch hotel details');
      }
      
      const data = await response.json();
      setHotelDetails(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedHotel(null);
    setHotelDetails(null);
    setError(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Hotels</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels?.map((hotel) => (
          <div
            key={hotel.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden 
              ${isLoading ? 'opacity-50 cursor-wait' : 'hover:shadow-xl cursor-pointer'}
              transition-all duration-300`}
            onClick={() => !isLoading && handleImageClick(hotel)}
          >
            {hotel.images && hotel.images.length > 0 ? (
              <div className="w-full h-64 relative">
                <img
                  src={`/hotelView/${hotel.images[0]}`}
                  alt={hotel.title || 'Hotel image'}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                No Image Available
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hotel.title}</h2>
              <p className="text-gray-600 line-clamp-2">{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      {selectedHotel && hotelDetails && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedHotel.title}</h2>
                <button 
                  onClick={closeModal} 
                  className="text-gray-600 hover:text-gray-900"
                >
                  ×
                </button>
              </div>

              {selectedHotel.images && selectedHotel.images.length > 0 && (
                <div className="w-full h-64 relative mb-4">
                  <img
                    src={`/hotelView/${selectedHotel.images[0]}`}
                    alt={selectedHotel.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              )}

              <div className="space-y-2">
                {Object.entries(hotelDetails).map(([key, value]) => (
                  <p key={key}>
                    <span className="font-semibold capitalize">{key}:</span>{' '}
                    {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelList;