
"use client";

import React, { useState } from 'react';
import { Globe } from 'lucide-react';

// Currency mapping for each region
const currencyMap: Record<string, string> = {
  
  'United States': 'USD',
  'Portugal': 'EUR',
  'United Kingdom': 'GBP',
  'France': 'EUR',
  'Germany': 'EUR',
  'Canada': 'CAD',
  'Australia': 'AUD',
  'Brazil': 'BRL',
  'China': 'CNY',
  'India': 'INR',
  'Japan': 'JPY',
  'South Korea': 'KRW',
  'Italy': 'EUR',
  'Mexico': 'MXN',
  'Spain': 'EUR',
  'Russia': 'RUB',
  'Netherlands': 'EUR',
  'Sweden': 'SEK',
  'Norway': 'NOK',
  'Switzerland': 'CHF',
  'Argentina': 'ARS',
  'South Africa': 'ZAR',
  'Egypt': 'EGP',
  'Turkey': 'TRY',
  'Saudi Arabia': 'SAR',
  'United Arab Emirates': 'AED',
  'Israel': 'ILS',
  'Thailand': 'THB',
  'Philippines': 'PHP',
  'Vietnam': 'VND',
  'Malaysia': 'MYR',
  'Indonesia': 'IDR',
  'New Zealand': 'NZD',
  'Ireland': 'EUR',
  'Austria': 'EUR',
  'Belgium': 'EUR',
  'Denmark': 'DKK',
  'Finland': 'EUR',
  'Poland': 'PLN',
  'Czech Republic': 'CZK',
  'Hungary': 'HUF',
  'Greece': 'EUR',
  'Ukraine': 'UAH',
  'Colombia': 'COP',
  'Chile': 'CLP',
  'Peru': 'PEN',
  'Venezuela': 'VES',
  'Pakistan': 'PKR',
  'Bangladesh': 'BDT',
  'Romania': 'RON'
  // Add more currency mappings for other regions as needed
};

const regions = [
  "United States", "Portugal", "United Kingdom", "France", "Germany",
  "Canada", "Australia", "Brazil", "China", "India", "Japan",
  "South Korea", "Italy", "Mexico", "Spain", "Russia",
  "Netherlands", "Sweden", "Norway", "Switzerland", "Argentina",
  "South Africa", "Egypt", "Turkey", "Saudi Arabia",
  "United Arab Emirates", "Israel", "Thailand", "Philippines",
  "Vietnam", "Malaysia", "Indonesia", "New Zealand",
  "Ireland", "Austria", "Belgium", "Denmark",
  "Finland", "Poland", "Czech Republic", "Hungary",
  "Greece", "Ukraine", "Colombia", "Chile",
  "Peru", "Venezuela", "Pakistan", "Bangladesh",
  "Romania"
];

const TopNavbar = () => {
  const [selectedRegion, setSelectedRegion] = useState("United States");
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegion = event.target.value;
    setSelectedRegion(newRegion);
    setSelectedCurrency(currencyMap[newRegion] || 'USD'); // Default to USD if no mapping exists
    setShowConfirmationModal(true);
    setTimeout(() => setShowConfirmationModal(false), 2000);
    setShowSettingsModal(false);
  };

  return (
    <div className="w-full ">
      <nav className="flex justify-end items-center border-b border-gray-300 shadow p-4 m-0">
        
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setShowSettingsModal(true)}
        >
          <Globe className="w-5 h-5 " />
          <span >{selectedRegion}</span>
          <span className="hidden">({selectedCurrency})</span>
        </div>

        <div className="hidden md:flex gap-4">
          <a href="#" className="block p-2  hover:bg-gray-200">🏠 Trip Boards</a>
          <a href="#" className="block p-2  hover:bg-gray-200">📝 List your property</a>
          <a href="#" className="block p-2  hover:bg-gray-200">❓ Help</a>
          <a href="#" className="block p-2  hover:bg-gray-200">✈️ My trips</a>
          <a href="#" className="p-2 text-blue-600 hover:bg-blue-100 rounded">Sign in</a>
        </div>

        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✖️' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#" className="block p-2 text-text-blue-600 ">🏠 Trip Boards</a>
          <a href="#" className="block p-2 text-text-blue-600 ">📝 List your property</a>
          <a href="#" className="block p-2 text-text-blue-600 ">❓ Help</a>
          <a href="#" className="block p-2 text-text-blue-600 ">✈️ My trips</a>
          <a href="#" className="block p-2 text-blue-600 hover:bg-blue-100">Sign in</a>
        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded w-full max-w-md mx-4">
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-lg text-gray-600">Display settings</h2>
                <button 
                  onClick={() => setShowSettingsModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="
              bg-yellow-100 border border-yellow-300 text-yellow-700 p-4 mb-4 rounded">
                <p>Changing your region could change your rewards program.</p>
                <p>To stay with your current rewards program keep your region the same.</p>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2">
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  className="w-full p-2 border border-gray-200 rounded text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-600 mb-2">
                  Currency
                </label>
                <div className="p-2 bg-gray-100 rounded text-gray-700">
                  {selectedCurrency}
                </div>
              </div>

              <button
                onClick={() => setShowSettingsModal(false)}
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded p-6 text-center">
            <div className="text-green-500 text-4xl mb-2">✓</div>
            <h3 className="text-lg text-gray-600">Region Updated</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;