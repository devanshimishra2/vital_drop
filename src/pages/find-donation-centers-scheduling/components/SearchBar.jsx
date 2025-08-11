import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onLocationDetect, isDetectingLocation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSearch(searchQuery);
  };

  const handleLocationDetect = () => {
    onLocationDetect();
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-4 mb-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="Search" size={20} className="text-text-secondary" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            placeholder="Enter city, zip code, or address..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-life-force focus:border-transparent text-text-primary placeholder-text-secondary"
          />
        </div>
        
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="outline"
            size="default"
            iconName="Navigation"
            iconPosition="left"
            onClick={handleLocationDetect}
            disabled={isDetectingLocation}
            className="whitespace-nowrap"
          >
            {isDetectingLocation ? 'Detecting...' : 'Use My Location'}
          </Button>
          
          <Button
            type="submit"
            variant="default"
            size="default"
            iconName="Search"
            iconPosition="left"
            className="whitespace-nowrap"
          >
            Search
          </Button>
        </div>
      </form>
      {/* Quick Location Suggestions */}
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="text-sm text-text-secondary">Quick search:</span>
        {['Downtown', 'Hospital District', 'University Area', 'Mall Area']?.map((location) => (
          <button
            key={location}
            onClick={() => {
              setSearchQuery(location);
              onSearch(location);
            }}
            className="text-sm text-trust-blue hover:text-cta-deep hover:underline"
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;