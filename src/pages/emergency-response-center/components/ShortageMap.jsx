import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ShortageMap = ({ regions }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'urgent': return 'bg-orange-500';
      case 'moderate': return 'bg-yellow-500';
      case 'stable': return 'bg-green-500';
      default: return 'bg-gray-400';
    }
  };

  const getSeverityText = (severity) => {
    switch (severity) {
      case 'critical': return 'Critical Shortage';
      case 'urgent': return 'Urgent Need';
      case 'moderate': return 'Moderate Shortage';
      case 'stable': return 'Stable Supply';
      default: return 'Unknown Status';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-brand-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Regional Blood Supply Status</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Icon name="RefreshCw" size={16} />
          <span>Updated 2 min ago</span>
        </div>
      </div>
      {/* Map Container */}
      <div className="relative bg-gray-50 rounded-lg h-96 mb-6 overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Blood Supply Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=40.7128,-74.0060&z=8&output=embed"
          className="rounded-lg"
        />
        
        {/* Overlay markers for regions */}
        <div className="absolute inset-0 pointer-events-none">
          {regions?.map((region, index) => (
            <div
              key={region?.id}
              className={`absolute w-4 h-4 rounded-full ${getSeverityColor(region?.severity)} border-2 border-white shadow-lg animate-pulse pointer-events-auto cursor-pointer`}
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${30 + (index * 10)}%`
              }}
              onClick={() => setSelectedRegion(region)}
            />
          ))}
        </div>
      </div>
      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { severity: 'critical', label: 'Critical', count: 3 },
          { severity: 'urgent', label: 'Urgent', count: 5 },
          { severity: 'moderate', label: 'Moderate', count: 2 },
          { severity: 'stable', label: 'Stable', count: 8 }
        ]?.map((item) => (
          <div key={item?.severity} className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${getSeverityColor(item?.severity)}`} />
            <span className="text-sm text-gray-700">{item?.label} ({item?.count})</span>
          </div>
        ))}
      </div>
      {/* Region Details */}
      {selectedRegion && (
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-life-force">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{selectedRegion?.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{getSeverityText(selectedRegion?.severity)}</p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Time to Critical:</span> {selectedRegion?.timeToCritical}</p>
                <p><span className="font-medium">Hospitals Affected:</span> {selectedRegion?.hospitalsAffected}</p>
                <p><span className="font-medium">Blood Types Needed:</span> {selectedRegion?.bloodTypesNeeded?.join(', ')}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedRegion(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortageMap;