import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = () => {
  const navigate = useNavigate();
  const [selectedCenter, setSelectedCenter] = useState(null);

  const donationCenters = [
    {
      id: 1,
      name: "Austin Blood Center",
      address: "4300 N Lamar Blvd, Austin, TX 78756",
      distance: "2.3 miles",
      status: "urgent",
      inventory: {
        "O+": 12,
        "O-": 3,
        "A+": 18,
        "A-": 7,
        "B+": 15,
        "B-": 4,
        "AB+": 9,
        "AB-": 2
      },
      hours: "Mon-Fri: 7AM-7PM, Sat-Sun: 8AM-5PM",
      phone: "(512) 206-1266",
      urgentTypes: ["O-", "AB-"],
      lat: 30.3077,
      lng: -97.7431
    },
    {
      id: 2,
      name: "We Are Blood Donor Center",
      address: "1400 E 6th St, Austin, TX 78702",
      distance: "3.7 miles",
      status: "normal",
      inventory: {
        "O+": 25,
        "O-": 8,
        "A+": 22,
        "A-": 12,
        "B+": 19,
        "B-": 6,
        "AB+": 14,
        "AB-": 5
      },
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      phone: "(512) 206-1200",
      urgentTypes: [],
      lat: 30.2672,
      lng: -97.7431
    },
    {
      id: 3,
      name: "South Austin Medical Center",
      address: "901 W Ben White Blvd, Austin, TX 78704",
      distance: "5.1 miles",
      status: "critical",
      inventory: {
        "O+": 8,
        "O-": 1,
        "A+": 11,
        "A-": 3,
        "B+": 7,
        "B-": 2,
        "AB+": 5,
        "AB-": 1
      },
      hours: "24/7 Emergency Donations",
      phone: "(512) 447-2211",
      urgentTypes: ["O-", "B-", "AB-"],
      lat: 30.2240,
      lng: -97.7889
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical': return 'bg-red-600';
      case 'urgent': return 'bg-orange-500';
      case 'normal': return 'bg-success-green';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'critical': return 'Critical Need';
      case 'urgent': return 'Urgent Need';
      case 'normal': return 'Normal Supply';
      default: return 'Unknown';
    }
  };

  const handleScheduleVisit = (center) => {
    navigate('/find-donation-centers-scheduling', { 
      state: { selectedCenter: center } 
    });
  };

  const handleViewAllCenters = () => {
    navigate('/find-donation-centers-scheduling');
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-impact text-text-primary font-bold">
            Find Donation Centers Near You
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Locate nearby donation centers with real-time inventory levels and schedule your life-saving appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
              <div className="aspect-video relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Austin Blood Donation Centers"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=30.2672,-97.7431&z=12&output=embed"
                  className="w-full h-full"
                />
                
                {/* Map Overlay Controls */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-brand">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                      <span>Critical</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>Urgent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success-green rounded-full"></div>
                      <span>Normal</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="MapPin"
                    iconPosition="left"
                    onClick={handleViewAllCenters}
                  >
                    View All Centers
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Centers List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Nearby Centers
            </h3>
            
            {donationCenters?.map((center) => (
              <div
                key={center?.id}
                className={`bg-white rounded-xl p-4 shadow-brand border-l-4 cursor-pointer transition-all duration-200 hover:shadow-brand-lg ${
                  center?.status === 'critical' ? 'border-red-600' :
                  center?.status === 'urgent'? 'border-orange-500' : 'border-success-green'
                } ${selectedCenter?.id === center?.id ? 'ring-2 ring-trust-blue' : ''}`}
                onClick={() => setSelectedCenter(center)}
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary">
                        {center?.name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {center?.distance} away
                      </p>
                    </div>
                    <div className={`inline-flex items-center space-x-1 ${getStatusColor(center?.status)} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                      <Icon name="AlertCircle" size={12} />
                      <span>{getStatusText(center?.status)}</span>
                    </div>
                  </div>

                  {/* Urgent Blood Types */}
                  {center?.urgentTypes?.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" size={14} className="text-orange-500" />
                      <span className="text-sm text-text-secondary">
                        Urgent need: {center?.urgentTypes?.join(', ')}
                      </span>
                    </div>
                  )}

                  {/* Quick Info */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-text-secondary">
                      <Icon name="Clock" size={14} />
                      <span>Open today</span>
                    </div>
                    <div className="flex items-center space-x-1 text-text-secondary">
                      <Icon name="Phone" size={14} />
                      <span>Call now</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant={center?.status === 'critical' ? 'default' : 'outline'}
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    fullWidth
                    className={center?.status === 'critical' ? 'emergency-pulse' : ''}
                    onClick={(e) => {
                      e?.stopPropagation();
                      handleScheduleVisit(center);
                    }}
                  >
                    Schedule Visit
                  </Button>
                </div>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-6">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-800">
                    Emergency Donations Needed
                  </h4>
                  <p className="text-sm text-red-700">
                    Critical shortage of O- and AB- blood types. Your donation could save a life today.
                  </p>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Heart"
                    iconPosition="left"
                    className="bg-red-600 hover:bg-red-700 emergency-pulse"
                    onClick={() => navigate('/emergency-response-center')}
                  >
                    Emergency Response
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;