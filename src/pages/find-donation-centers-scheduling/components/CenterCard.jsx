import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CenterCard = ({ center, onSchedule, onGetDirections, isSelected }) => {
  const getInventoryBadge = (level) => {
    const configs = {
      critical: { color: 'bg-red-100 text-red-800', icon: 'AlertTriangle', text: 'Critical Need' },
      low: { color: 'bg-amber-100 text-amber-800', icon: 'AlertCircle', text: 'Low Stock' },
      adequate: { color: 'bg-emerald-100 text-emerald-800', icon: 'CheckCircle', text: 'Good Stock' }
    };
    return configs?.[level] || configs?.adequate;
  };

  const inventoryBadge = getInventoryBadge(center?.inventoryLevel);

  return (
    <div className={`bg-white rounded-lg shadow-brand hover:shadow-brand-lg transition-all duration-200 overflow-hidden ${
      isSelected ? 'ring-2 ring-life-force' : ''
    }`}>
      {/* Center Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={center?.image}
          alt={center?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${inventoryBadge?.color}`}>
            <Icon name={inventoryBadge?.icon} size={12} />
            <span>{inventoryBadge?.text}</span>
          </div>
        </div>
        {center?.badges && center?.badges?.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-col space-y-1">
            {center?.badges?.map((badge, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-text-primary">
                {badge}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Center Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{center?.name}</h3>
            <div className="flex items-center space-x-1 text-sm text-text-secondary mt-1">
              <Icon name="MapPin" size={14} />
              <span>{center?.address}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-text-primary">{center?.distance}</div>
            <div className="text-xs text-text-secondary">away</div>
          </div>
        </div>

        {/* Status Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon 
                name="Clock" 
                size={14} 
                className={center?.isOpen ? 'text-success-green' : 'text-red-500'} 
              />
              <span className={`text-sm font-medium ${
                center?.isOpen ? 'text-success-green' : 'text-red-500'
              }`}>
                {center?.isOpen ? 'Open' : 'Closed'}
              </span>
            </div>
            <div className="text-sm text-text-secondary">
              Wait: {center?.waitTime}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={14} className="text-amber-500 fill-current" />
            <span className="text-sm font-medium text-text-primary">{center?.rating}</span>
            <span className="text-xs text-text-secondary">({center?.reviewCount})</span>
          </div>
        </div>

        {/* Hours */}
        <div className="mb-3">
          <div className="text-xs text-text-secondary mb-1">Today's Hours</div>
          <div className="text-sm font-medium text-text-primary">{center?.todayHours}</div>
        </div>

        {/* Blood Types Needed */}
        {center?.bloodTypesNeeded && center?.bloodTypesNeeded?.length > 0 && (
          <div className="mb-3">
            <div className="text-xs text-text-secondary mb-1">Blood Types Needed</div>
            <div className="flex flex-wrap gap-1">
              {center?.bloodTypesNeeded?.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-life-force/10 text-life-force"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Available Slots */}
        {center?.availableSlots && center?.availableSlots?.length > 0 && (
          <div className="mb-4">
            <div className="text-xs text-text-secondary mb-2">Next Available</div>
            <div className="flex flex-wrap gap-2">
              {center?.availableSlots?.slice(0, 3)?.map((slot, index) => (
                <div
                  key={index}
                  className="px-2 py-1 bg-gray-50 rounded text-xs font-medium text-text-primary"
                >
                  {slot}
                </div>
              ))}
              {center?.availableSlots?.length > 3 && (
                <div className="px-2 py-1 bg-gray-50 rounded text-xs text-text-secondary">
                  +{center?.availableSlots?.length - 3} more
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            iconName="Calendar"
            iconPosition="left"
            className="flex-1"
            onClick={() => onSchedule(center)}
            disabled={!center?.isOpen}
          >
            Schedule
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Navigation"
            iconPosition="left"
            onClick={() => onGetDirections(center)}
          >
            Directions
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Phone"
            onClick={() => window.open(`tel:${center?.phone}`, '_self')}
          >
            <Icon name="Phone" size={16} />
          </Button>
        </div>

        {/* Recent Reviews */}
        {center?.recentReview && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-xs text-text-secondary mb-1">Recent Review</div>
            <div className="text-sm text-text-primary italic">"{center?.recentReview?.text}"</div>
            <div className="text-xs text-text-secondary mt-1">- {center?.recentReview?.author}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterCard;