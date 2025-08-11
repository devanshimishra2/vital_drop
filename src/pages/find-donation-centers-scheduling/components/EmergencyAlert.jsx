import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyAlert = ({ alert, onRespond, onDismiss }) => {
  if (!alert) return null;

  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg p-4 mb-6">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center emergency-pulse">
            <Icon name="AlertTriangle" size={20} color="white" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-lg font-semibold text-red-800">Emergency Blood Need</h3>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
              URGENT
            </span>
          </div>
          
          <p className="text-red-700 mb-3">{alert?.message}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-white/50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Icon name="Droplets" size={16} className="text-red-600" />
                <div>
                  <div className="text-sm font-medium text-red-800">Blood Type</div>
                  <div className="text-lg font-bold text-red-600">{alert?.bloodType}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-red-600" />
                <div>
                  <div className="text-sm font-medium text-red-800">Location</div>
                  <div className="text-sm text-red-700">{alert?.location}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-red-600" />
                <div>
                  <div className="text-sm font-medium text-red-800">Time Needed</div>
                  <div className="text-sm text-red-700">{alert?.timeNeeded}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <Button
              variant="default"
              size="sm"
              iconName="Heart"
              iconPosition="left"
              onClick={() => onRespond(alert)}
              className="bg-red-600 hover:bg-red-700 emergency-pulse"
            >
              Respond to Emergency
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Share"
              iconPosition="left"
              className="border-red-300 text-red-700 hover:bg-red-50"
            >
              Share Alert
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDismiss(alert?.id)}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Dismiss
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlert;