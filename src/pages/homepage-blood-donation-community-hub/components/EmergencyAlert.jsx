import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyAlert = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
  const [userLocation, setUserLocation] = useState(null);

  // Mock emergency data
  const emergencyData = {
    id: "EMRG-2025-001",
    bloodType: "O-",
    unitsNeeded: 8,
    unitsCollected: 3,
    priority: "critical",
    hospital: "Austin Medical Center",
    distance: "2.1 miles",
    patientAge: "7-year-old",
    condition: "Emergency Surgery",
    timeLeft: "3 hours",
    matchingCenters: [
      {
        name: "Austin Blood Center",
        distance: "2.3 miles",
        availableSlots: 3
      },
      {
        name: "We Are Blood Donor Center", 
        distance: "3.7 miles",
        availableSlots: 5
      }
    ]
  };

  useEffect(() => {
    // Simulate checking for emergency alerts
    const checkEmergencyAlerts = () => {
      // Mock condition: show alert if it's during certain hours or random chance
      const currentHour = new Date()?.getHours();
      const shouldShowAlert = currentHour >= 9 && currentHour <= 17; // Business hours
      
      if (shouldShowAlert) {
        setIsVisible(true);
      }
    };

    // Check for location permission
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
        }
      );
    }

    checkEmergencyAlerts();
  }, []);

  useEffect(() => {
    if (!isVisible || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, timeRemaining]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  const handleEmergencyResponse = () => {
    navigate('/emergency-response-center', {
      state: { emergencyData }
    });
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const progressPercentage = (emergencyData?.unitsCollected / emergencyData?.unitsNeeded) * 100;

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-red-600 text-white rounded-2xl shadow-2xl border-4 border-red-500 overflow-hidden emergency-pulse">
        {/* Header */}
        <div className="bg-red-700 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="AlertTriangle" size={16} className="animate-pulse" />
            <span className="text-sm font-bold">EMERGENCY ALERT</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white transition-colors"
          >
            <Icon name="X" size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Emergency Details */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">
                {emergencyData?.bloodType} Blood Needed
              </h3>
              <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                {emergencyData?.priority?.toUpperCase()}
              </div>
            </div>
            
            <p className="text-sm text-red-100">
              {emergencyData?.patientAge} child needs {emergencyData?.bloodType} blood for {emergencyData?.condition?.toLowerCase()} at {emergencyData?.hospital}
            </p>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress: {emergencyData?.unitsCollected}/{emergencyData?.unitsNeeded} units</span>
              <span>{Math.round(progressPercentage)}% complete</span>
            </div>
            <div className="w-full bg-red-800 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Location & Time */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={14} />
              <span>{emergencyData?.distance} away</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{formatTime(timeRemaining)} left</span>
            </div>
          </div>

          {/* Matching Centers */}
          <div className="bg-white/10 rounded-lg p-3 space-y-2">
            <div className="text-sm font-medium">Nearby Centers Available:</div>
            {emergencyData?.matchingCenters?.slice(0, 2)?.map((center, index) => (
              <div key={index} className="flex justify-between text-sm text-red-100">
                <span>{center?.name}</span>
                <span>{center?.availableSlots} slots</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              iconName="Heart"
              iconPosition="left"
              className="flex-1 bg-white text-red-600 hover:bg-red-50 font-semibold"
              onClick={handleEmergencyResponse}
            >
              Respond Now
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Share"
              className="text-white hover:bg-white/10"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Emergency Blood Donation Needed',
                    text: `${emergencyData?.bloodType} blood urgently needed for ${emergencyData?.patientAge} child`,
                    url: window.location?.href
                  });
                }
              }}
            >
              Share
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center space-x-2 text-xs text-red-200 pt-2 border-t border-red-500">
            <Icon name="Shield" size={12} />
            <span>Verified by Austin Medical Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlert;