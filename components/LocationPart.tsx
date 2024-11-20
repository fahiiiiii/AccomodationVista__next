import React from 'react';
import { Globe } from 'lucide-react';

const LocationSelector = () => {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState('United States');
  const [selectedCurrency, setSelectedCurrency] = React.useState('USD');

  const currencyMap: Record<string, string> = {
    'United States': 'USD',
    'Portugal': 'EUR',
    'United Kingdom': 'GBP',
    'France': 'EUR',
    'Germany': 'EUR',
    'Netherlands': 'EUR',
    'Japan': 'JPY',
    'Australia': 'AUD',
    'Canada': 'CAD',
    'India': 'INR',
    'China': 'CNY'
  };

  const handleLocationClick = () => {
    setIsSettingsOpen(true);
  };

  const handleClose = () => {
    setIsSettingsOpen(false);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRegion = e.target.value;
    setSelectedCurrency(currencyMap[newRegion]);
  };

  const handleSave = () => {
    const regionSelect = document.getElementById('regionSelect') as HTMLSelectElement;
    const newRegion = regionSelect.value;
    setSelectedRegion(newRegion);
    setSelectedCurrency(currencyMap[newRegion]);
    setIsSettingsOpen(false);
    setIsConfirmationOpen(true);
    setTimeout(() => setIsConfirmationOpen(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Rest of the component remains the same */}
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Accomo Vista</h1>
          
          {/* Location Selector Button */}
          <div 
            onClick={handleLocationClick}
            className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-50"
          >
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">{selectedRegion}</span>
            <span className="text-gray-500">({selectedCurrency})</span>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
          <div className="bg-white rounded w-full max-w-md mx-4">
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-lg text-gray-600">Display settings</h2>
                <button 
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-6 p-4 bg-yellow-50 text-sm text-orange-700 rounded">
                <p>Changing your region could change your rewards program.</p>
                <p>To stay with your current rewards program keep your region the same.</p>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2">
                  Region
                </label>
                <select
                  id="regionSelect"
                  onChange={handleRegionChange}
                  defaultValue={selectedRegion}
                  className="w-full p-2 border border-gray-200 rounded text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  {Object.keys(currencyMap).map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
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
                onClick={handleSave}
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isConfirmationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 text-center">
            <div className="text-green-500 text-4xl mb-2">✓</div>
            <h3 className="text-lg text-gray-600">Region Updated</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;