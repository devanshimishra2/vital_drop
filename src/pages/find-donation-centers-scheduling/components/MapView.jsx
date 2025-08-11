import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MapView = ({ 
  centers, 
  selectedCenter, 
  onCenterSelect, 
  userLocation, 
  radiusFilter,
  onRadiusChange 
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setMapLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const radiusOptions = [
    { value: 5, label: '5 miles' },
    { value: 10, label: '10 miles' },
    { value: 25, label: '25 miles' }
  ];

  const getInventoryColor = (level) => {
    switch (level) {
      case 'critical': return '#DC2626';
      case 'low': return '#D97706';
      case 'adequate': return '#10B981';
      default: return '#6B7280';
    }
  };

  return (
    <div className="relative h-full bg-white rounded-lg overflow-hidden shadow-brand">
      {/* Map Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
        <div className="bg-white rounded-lg shadow-brand p-2">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-life-force" />
            <span className="text-sm font-medium text-text-primary">Radius:</span>
          </div>
          <div className="flex space-x-1 mt-2">
            {radiusOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => onRadiusChange(option?.value)}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  radiusFilter === option?.value
                    ? 'bg-life-force text-white'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                {option?.label}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-brand p-3">
          <div className="text-xs font-medium text-text-primary mb-2">Inventory Levels</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <span className="text-xs text-text-secondary">Critical</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-amber-600"></div>
              <span className="text-xs text-text-secondary">Low</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-text-secondary">Adequate</span>
            </div>
          </div>
        </div>
      </div>
      {/* Map Container */}
      <div className="w-full h-full relative">
        {!mapLoaded ? (
          <div className="flex items-center justify-center h-full bg-gray-50">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-life-force border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-text-secondary">Loading map...</p>
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Donation Centers Map"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${userLocation?.lat},${userLocation?.lng}&z=12&output=embed`}
            className="border-0"
          />
        )}

        {/* Map Pins Overlay */}
        {mapLoaded && (
          <div className="absolute inset-0 pointer-events-none">
            {centers?.map((center, index) => (
              <div
                key={center?.id}
                className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${20 + (index % 5) * 15}%`,
                  top: `${30 + Math.floor(index / 5) * 20}%`
                }}
                onClick={() => onCenterSelect(center)}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 border-white shadow-brand flex items-center justify-center ${
                    selectedCenter?.id === center?.id ? 'ring-2 ring-life-force' : ''
                  }`}
                  style={{ backgroundColor: getInventoryColor(center?.inventoryLevel) }}
                >
                  <Icon name="MapPin" size={12} color="white" />
                </div>
                {selectedCenter?.id === center?.id && (
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-brand-lg p-3 min-w-48 z-20">
                    <div className="text-sm font-medium text-text-primary">{center?.name}</div>
                    <div className="text-xs text-text-secondary mt-1">{center?.address}</div>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} className="text-success-green" />
                        <span className="text-xs text-success-green">Open</span>
                      </div>
                      <div className="text-xs text-text-secondary">•</div>
                      <div className="text-xs text-text-secondary">{center?.waitTime}</div>
                    </div>
                    <Button
                      size="xs"
                      className="mt-2 w-full"
                      onClick={() => onCenterSelect(center)}
                    >
                      View Details
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Current Location Button */}
      <button className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-brand hover:shadow-brand-lg transition-shadow">
        <Icon name="Navigation" size={20} className="text-life-force" />
      </button>
    </div>
  );
};

export default MapView;