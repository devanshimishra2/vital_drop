import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const BloodJourneyMap = () => {
  const [activeJourney, setActiveJourney] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  const journeyData = [
    {
      id: 1,
      donationDate: "2025-01-15",
      volume: "450ml",
      type: "Whole Blood",
      destinations: [
        {
          hospital: "City General Hospital",
          usage: "Emergency Surgery",
          patients: 2,
          outcome: "2 lives saved in trauma unit",
          distance: "2.3 miles",
          timeUsed: "6 hours after donation"
        },
        {
          hospital: "Children\'s Medical Center",
          usage: "Pediatric Care",
          patients: 1,
          outcome: "Child recovered from surgery",
          distance: "4.1 miles",
          timeUsed: "12 hours after donation"
        }
      ],
      totalImpact: "3 lives directly impacted"
    },
    {
      id: 2,
      donationDate: "2024-11-20",
      volume: "450ml",
      type: "Whole Blood",
      destinations: [
        {
          hospital: "Regional Medical Center",
          usage: "Cancer Treatment",
          patients: 2,
          outcome: "Supported chemotherapy patients",
          distance: "5.7 miles",
          timeUsed: "2 days after donation"
        },
        {
          hospital: "Metro Emergency Center",
          usage: "Blood Transfusion",
          patients: 1,
          outcome: "Accident victim recovery",
          distance: "3.2 miles",
          timeUsed: "18 hours after donation"
        }
      ],
      totalImpact: "3 patients supported"
    },
    {
      id: 3,
      donationDate: "2024-09-10",
      volume: "200ml",
      type: "Platelets",
      destinations: [
        {
          hospital: "Cancer Treatment Center",
          usage: "Platelet Transfusion",
          patients: 1,
          outcome: "Enabled continued chemotherapy",
          distance: "6.8 miles",
          timeUsed: "4 hours after donation"
        }
      ],
      totalImpact: "1 cancer patient supported"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getUsageColor = (usage) => {
    switch (usage?.toLowerCase()) {
      case 'emergency surgery': return 'text-life-force bg-red-50 border-red-200';
      case 'pediatric care': return 'text-trust-blue bg-blue-50 border-blue-200';
      case 'cancer treatment': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'blood transfusion': return 'text-success-green bg-green-50 border-green-200';
      case 'platelet transfusion': return 'text-amber-600 bg-amber-50 border-amber-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const currentJourney = journeyData?.[activeJourney];

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Your Blood's Journey</h2>
            <p className="text-text-secondary">Track where your donations made an impact</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-secondary">Journey:</span>
          <select 
            value={activeJourney}
            onChange={(e) => setActiveJourney(parseInt(e?.target?.value))}
            className="bg-surface border border-border rounded-lg px-3 py-1 text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-trust-blue"
          >
            {journeyData?.map((journey, index) => (
              <option key={journey?.id} value={index}>
                {new Date(journey.donationDate)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {journey?.type}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Journey Visualization */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 mb-8 border border-blue-200">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Donation on {new Date(currentJourney.donationDate)?.toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h3>
          <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Droplets" size={16} className="text-life-force" />
              <span>{currentJourney?.volume} {currentJourney?.type}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Heart" size={16} className="text-success-green" />
              <span>{currentJourney?.totalImpact}</span>
            </div>
          </div>
        </div>

        {/* Animated Journey Flow */}
        <div className="relative">
          {/* Donation Center (Start) */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-life-force to-red-700 rounded-full flex items-center justify-center shadow-brand-lg mb-3">
              <Icon name="Heart" size={24} color="white" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-text-primary">Your Donation</div>
              <div className="text-sm text-text-secondary">Community Blood Center</div>
            </div>
          </div>

          {/* Animated Flow Lines */}
          <div className="flex justify-center mb-8">
            <div className="relative w-1 h-16 bg-gradient-to-b from-life-force to-transparent">
              <div 
                className={`absolute w-3 h-3 bg-life-force rounded-full -left-1 transition-all duration-1500 ${
                  animationStep >= 1 ? 'top-full opacity-0' : 'top-0 opacity-100'
                }`}
              ></div>
            </div>
          </div>

          {/* Destinations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentJourney?.destinations?.map((destination, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 border-2 transition-all duration-500 ${
                  animationStep >= index + 2 ? 'border-success-green shadow-brand-md scale-105' : 'border-border'
                }`}
              >
                {/* Hospital Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-trust-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" size={20} color="white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">{destination?.hospital}</h4>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={12} />
                        <span>{destination?.distance}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{destination?.timeUsed}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Usage Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border mb-4 ${getUsageColor(destination?.usage)}`}>
                  {destination?.usage}
                </div>

                {/* Impact Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Patients Helped:</span>
                    <span className="font-semibold text-text-primary">{destination?.patients}</span>
                  </div>
                  <div className="bg-surface rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Heart" size={16} className="text-success-green" />
                      <span className="text-sm font-medium text-text-primary">Outcome</span>
                    </div>
                    <p className="text-sm text-text-secondary">{destination?.outcome}</p>
                  </div>
                </div>

                {/* Animation Indicator */}
                {animationStep >= index + 2 && (
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center space-x-2 text-success-green">
                      <Icon name="CheckCircle" size={16} />
                      <span className="text-sm font-medium">Impact Delivered</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Journey Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-life-force/5 to-red-500/5 rounded-xl p-6 border border-life-force/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={20} color="white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-life-force">
                {journeyData?.reduce((sum, journey) => sum + journey?.destinations?.length, 0)}
              </div>
              <div className="text-sm text-text-secondary">Hospitals Reached</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-success-green/5 to-emerald-500/5 rounded-xl p-6 border border-success-green/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-success-green rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} color="white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-success-green">
                {journeyData?.reduce((sum, journey) => 
                  sum + journey?.destinations?.reduce((destSum, dest) => destSum + dest?.patients, 0), 0
                )}
              </div>
              <div className="text-sm text-text-secondary">Patients Helped</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-trust-blue/5 to-blue-500/5 rounded-xl p-6 border border-trust-blue/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-trust-blue rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={20} color="white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-trust-blue">4.2</div>
              <div className="text-sm text-text-secondary">Avg. Hours to Use</div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-life-force to-red-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Ready to Create More Impact?</h3>
            <p className="text-white/90 text-sm">Your next donation could save up to 3 more lives. Schedule your appointment today.</p>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2 ml-6">
            <Icon name="Calendar" size={16} color="white" />
            <span className="font-medium">Schedule Donation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BloodJourneyMap;