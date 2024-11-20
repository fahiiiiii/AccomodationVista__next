
"use client";


import React, { useEffect, useState } from 'react';
import TopContainer from '../components/TopContainer';
import HotelList from './../components/HotelList';
import AboutHome from "../components/AboutHome";
import { Hotel } from '../lib/hotel-types'; // Import the Hotel interface

const AfterNav: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[] | null>(null);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('/api/hotels'); // Correct API path
        if (!response.ok) {
          throw new Error('Failed to fetch hotels');
        }
        const data: Hotel[] = await response.json();
        setHotels(data);
      } catch (err) {
        setError('Failed to load hotels');
        console.error(err);
      }
    };
  
    fetchHotels();
  }, []);
  
  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Hotels</h1>
        <p className="text-center text-red-600">{error}</p>
      </div>
    );
  }

  if (!hotels) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Hotels</h1>
        <p className="text-center text-gray-600">Loading hotels...</p>
      </div>
    );
  }

  return (
    <div>
      <TopContainer />
      <HotelList hotels={hotels} /> {/* Pass the hotels to the HotelList component */}
      <AboutHome />
    </div>
  );
};

export default AfterNav;
