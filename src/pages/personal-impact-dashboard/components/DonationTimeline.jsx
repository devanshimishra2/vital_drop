import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DonationTimeline = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);

  const donationHistory = [
    {
      id: 1,
      date: "2025-01-15",
      location: "City Medical Center",
      type: "Whole Blood",
      volume: "450ml",
      status: "completed",
      healthMetrics: {
        bloodPressure: "118/76",
        pulse: 68,
        ironLevel: 14.2,
        temperature: 98.6
      },
      impact: "Helped 3 patients in emergency surgery",
      recovery: "Excellent - Ready for next donation",
      nextEligible: "2025-03-15"
    },
    {
      id: 2,
      date: "2024-11-20",
      location: "Community Blood Bank",
      type: "Whole Blood",
      volume: "450ml",
      status: "completed",
      healthMetrics: {
        bloodPressure: "120/78",
        pulse: 72,
        ironLevel: 13.8,
        temperature: 98.4
      },
      impact: "Used for pediatric care unit",
      recovery: "Good - Minor fatigue reported",
      nextEligible: "2025-01-20"
    },
    {
      id: 3,
      date: "2024-09-10",
      location: "Regional Hospital",
      type: "Platelets",
      volume: "200ml",
      status: "completed",
      healthMetrics: {
        bloodPressure: "116/74",
        pulse: 70,
        ironLevel: 14.0,
        temperature: 98.2
      },
      impact: "Cancer patient treatment support",
      recovery: "Excellent - No side effects",
      nextEligible: "2024-09-17"
    },
    {
      id: 4,
      date: "2024-07-05",
      location: "City Medical Center",
      type: "Whole Blood",
      volume: "450ml",
      status: "completed",
      healthMetrics: {
        bloodPressure: "122/80",
        pulse: 74,
        ironLevel: 13.5,
        temperature: 98.8
      },
      impact: "Emergency trauma response",
      recovery: "Good - Hydration recommended",
      nextEligible: "2024-09-05"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-success-green';
      case 'scheduled': return 'bg-trust-blue';
      case 'cancelled': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getHealthStatus = (metrics) => {
    const { bloodPressure, pulse, ironLevel } = metrics;
    const [systolic] = bloodPressure?.split('/')?.map(Number);
    
    if (systolic < 120 && pulse < 80 && ironLevel > 13.5) {
      return { status: 'Excellent', color: 'text-success-green', icon: 'CheckCircle' };
    } else if (systolic < 140 && pulse < 90 && ironLevel > 12.5) {
      return { status: 'Good', color: 'text-trust-blue', icon: 'Info' };
    } else {
      return { status: 'Monitor', color: 'text-warning', icon: 'AlertTriangle' };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-trust-blue rounded-lg flex items-center justify-center">
            <Icon name="Clock" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Donation Timeline</h2>
            <p className="text-text-secondary">Your complete donation history with health tracking</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 text-trust-blue hover:text-blue-700 transition-colors duration-200">
          <Icon name="Download" size={16} />
          <span className="text-sm font-medium">Export History</span>
        </button>
      </div>
      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-8">
          {donationHistory?.map((donation, index) => {
            const healthStatus = getHealthStatus(donation?.healthMetrics);
            const isSelected = selectedDonation === donation?.id;

            return (
              <div key={donation?.id} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full ${getStatusColor(donation?.status)} border-4 border-white shadow-brand`}></div>
                {/* Content Card */}
                <div className="ml-16">
                  <div 
                    className={`bg-surface rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer hover:shadow-brand-md ${
                      isSelected ? 'border-trust-blue shadow-brand-lg' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedDonation(isSelected ? null : donation?.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-text-primary">
                            {new Date(donation.date)?.toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(donation?.status)} text-white`}>
                            {donation?.status?.charAt(0)?.toUpperCase() + donation?.status?.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} />
                            <span>{donation?.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Droplets" size={14} />
                            <span>{donation?.type} - {donation?.volume}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`flex items-center space-x-1 ${healthStatus?.color}`}>
                          <Icon name={healthStatus?.icon} size={16} />
                          <span className="text-sm font-medium">{healthStatus?.status}</span>
                        </div>
                        <Icon 
                          name={isSelected ? "ChevronUp" : "ChevronDown"} 
                          size={16} 
                          className="text-text-secondary" 
                        />
                      </div>
                    </div>

                    {/* Impact Summary */}
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Heart" size={16} className="text-life-force" />
                        <span className="text-sm font-medium text-text-primary">Impact</span>
                      </div>
                      <p className="text-sm text-text-secondary">{donation?.impact}</p>
                    </div>

                    {/* Expanded Details */}
                    {isSelected && (
                      <div className="space-y-4 border-t border-border pt-4">
                        {/* Health Metrics */}
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary mb-3">Health Metrics</h4>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-1">
                                <Icon name="Activity" size={14} className="text-life-force" />
                                <span className="text-xs font-medium text-text-secondary">Blood Pressure</span>
                              </div>
                              <div className="text-sm font-semibold text-text-primary">{donation?.healthMetrics?.bloodPressure}</div>
                            </div>
                            <div className="bg-white rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-1">
                                <Icon name="Heart" size={14} className="text-life-force" />
                                <span className="text-xs font-medium text-text-secondary">Pulse</span>
                              </div>
                              <div className="text-sm font-semibold text-text-primary">{donation?.healthMetrics?.pulse} bpm</div>
                            </div>
                            <div className="bg-white rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-1">
                                <Icon name="Zap" size={14} className="text-amber-500" />
                                <span className="text-xs font-medium text-text-secondary">Iron Level</span>
                              </div>
                              <div className="text-sm font-semibold text-text-primary">{donation?.healthMetrics?.ironLevel} g/dL</div>
                            </div>
                            <div className="bg-white rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-1">
                                <Icon name="Thermometer" size={14} className="text-trust-blue" />
                                <span className="text-xs font-medium text-text-secondary">Temperature</span>
                              </div>
                              <div className="text-sm font-semibold text-text-primary">{donation?.healthMetrics?.temperature}°F</div>
                            </div>
                          </div>
                        </div>

                        {/* Recovery & Next Eligible */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Icon name="TrendingUp" size={16} className="text-success-green" />
                              <span className="text-sm font-semibold text-text-primary">Recovery Status</span>
                            </div>
                            <p className="text-sm text-text-secondary">{donation?.recovery}</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Icon name="Calendar" size={16} className="text-trust-blue" />
                              <span className="text-sm font-semibold text-text-primary">Next Eligible</span>
                            </div>
                            <p className="text-sm text-text-secondary">
                              {new Date(donation.nextEligible)?.toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Health Recommendations */}
      <div className="mt-8 bg-gradient-to-r from-trust-blue/5 to-success-green/5 rounded-xl p-6 border border-trust-blue/20">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-trust-blue rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Stethoscope" size={20} color="white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Health Recommendations</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>• Your iron levels are excellent - keep up the iron-rich diet</p>
              <p>• Blood pressure is optimal - continue regular exercise</p>
              <p>• You're eligible for your next donation on March 15, 2025</p>
              <p>• Consider scheduling your next appointment to maintain regular donation schedule</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationTimeline;