// hotel-types.ts:
export interface Hotel {
    id: string;
    slug: string;
    title: string;
    description: string;
    guestCount: number;
    bedroomCount: number;
    bathroomCount: number;
    amenities: string[];
    hostInfo: string;
    address: string;
    latitude: number;
    longitude: number;
    images: string[];
    rooms: Room[];
  }
  
  export interface Room {
    hotelSlug: string;
    roomSlug: string;
    roomImage: string;
    roomTitle: string;
    bedroomCount: number;
  }