import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyAlert = ({ alert, onRespond }) => {
  const getUrgencyColor = (level) => {
    switch (level) {
      case 'critical': return 'bg-red-600 border-red-700';
      case 'urgent': return 'bg-orange-500 border-orange-600';
      case 'moderate': return 'bg-yellow-500 border-yellow-600';
      default: return 'bg-gray-500 border-gray-600';
    }
  };

  const getUrgencyIcon = (level) => {
    switch (level) {
      case 'critical': return 'AlertTriangle';
      case 'urgent': return 'Clock';
      case 'moderate': return 'Info';
      default: return 'Bell';
    }
  };

  return (
    <div className={`rounded-lg border-2 p-6 ${getUrgencyColor(alert?.urgencyLevel)} text-white emergency-pulse`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <Icon 
              name={getUrgencyIcon(alert?.urgencyLevel)} 
              size={32} 
              color="white" 
              className="animate-pulse" 
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{alert?.bloodType} Blood Needed</h3>
            <p className="text-sm opacity-90">{alert?.urgencyLevel?.toUpperCase()} SHORTAGE</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{alert?.unitsNeeded}</div>
          <div className="text-sm opacity-90">units needed</div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm mb-2">
          <Icon name="MapPin" size={16} color="white" className="inline mr-1" />
          {alert?.hospitalName}
        </p>
        <p className="text-sm mb-2">
          <Icon name="Clock" size={16} color="white" className="inline mr-1" />
          Critical in {alert?.timeRemaining}
        </p>
        <p className="text-sm">
          <Icon name="Users" size={16} color="white" className="inline mr-1" />
          {alert?.patientsAffected} patients affected
        </p>
      </div>
      <div className="flex space-x-3">
        <Button
          variant="outline"
          size="sm"
          iconName="Heart"
          iconPosition="left"
          className="bg-white text-gray-900 hover:bg-gray-100 border-white cta-magnetic flex-1"
          onClick={() => onRespond(alert)}
        >
          I Can Donate Now
        </Button>
        <Button
          variant="ghost"
          size="sm"
          iconName="Share2"
          className="text-white hover:bg-white/20"
        >
          Share Alert
        </Button>
      </div>
    </div>
  );
};

export default EmergencyAlert;