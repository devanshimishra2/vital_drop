import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import EmergencyAlert from './components/EmergencyAlert';
import ShortageMap from './components/ShortageMap';
import RapidResponseForm from './components/RapidResponseForm';
import EmergencyTestimonials from './components/EmergencyTestimonials';
import ResponseDashboard from './components/ResponseDashboard';
import HospitalPartners from './components/HospitalPartners';

const EmergencyResponseCenter = () => {
  const [showResponseForm, setShowResponseForm] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Mock emergency alerts data
  const emergencyAlerts = [
    {
      id: 1,
      bloodType: "O-",
      urgencyLevel: "critical",
      unitsNeeded: 12,
      hospitalName: "Mercy General Hospital",
      timeRemaining: "2 hours",
      patientsAffected: 3,
      location: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 2,
      bloodType: "AB+",
      urgencyLevel: "urgent",
      unitsNeeded: 8,
      hospitalName: "City Medical Center",
      timeRemaining: "4 hours",
      patientsAffected: 2,
      location: { lat: 40.7589, lng: -73.9851 }
    },
    {
      id: 3,
      bloodType: "B-",
      urgencyLevel: "moderate",
      unitsNeeded: 5,
      hospitalName: "Regional Blood Bank",
      timeRemaining: "8 hours",
      patientsAffected: 1,
      location: { lat: 40.6892, lng: -74.0445 }
    }
  ];

  // Mock regional shortage data
  const regionalShortages = [
    {
      id: 1,
      name: "Manhattan District",
      severity: "critical",
      timeToCritical: "1.5 hours",
      hospitalsAffected: 8,
      bloodTypesNeeded: ["O-", "AB+", "A-"]
    },
    {
      id: 2,
      name: "Brooklyn Area",
      severity: "urgent",
      timeToCritical: "3 hours",
      hospitalsAffected: 5,
      bloodTypesNeeded: ["B-", "O+"]
    },
    {
      id: 3,
      name: "Queens Region",
      severity: "moderate",
      timeToCritical: "6 hours",
      hospitalsAffected: 3,
      bloodTypesNeeded: ["A+", "AB-"]
    },
    {
      id: 4,
      name: "Bronx District",
      severity: "stable",
      timeToCritical: "12+ hours",
      hospitalsAffected: 0,
      bloodTypesNeeded: []
    }
  ];

  // Mock testimonials data
  const emergencyTestimonials = [
    {
      id: 1,
      recipientName: "Maria Rodriguez",
      recipientPhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      condition: "Emergency Surgery",
      bloodType: "O-",
      timeAgo: "2 days ago",
      hospital: "Mercy General Hospital",
      responseTime: "45 minutes",
      donorsHelped: 8,
      story: `I was in a car accident and needed emergency surgery. Thanks to the rapid response from Vital Drop donors, I received the O- blood I needed within 45 minutes. I'm alive today because of their quick action.`,
      donorMessage: "Knowing I helped save Maria's life gives me incredible purpose. I'll always respond to emergency calls."
    },
    {
      id: 2,
      recipientName: "James Chen",recipientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",condition: "Severe Anemia",bloodType: "AB+",timeAgo: "1 week ago",hospital: "City Medical Center",responseTime: "1.2 hours",
      donorsHelped: 5,
      story: `My rare AB+ blood type made it challenging to find donors quickly. The emergency alert system connected me with compatible donors in record time. The community response was overwhelming.`,
      donorMessage: "As an AB+ donor myself, I understand how critical it is to respond quickly for rare blood types."
    },
    {
      id: 3,
      recipientName: "Sarah Williams",recipientPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",condition: "Childbirth Complications",bloodType: "B-",timeAgo: "3 days ago",hospital: "University Hospital",responseTime: "38 minutes",
      donorsHelped: 12,
      story: `During my delivery, unexpected complications required immediate blood transfusion. The emergency response team mobilized B- donors so quickly that my daughter and I are both healthy today.`,
      donorMessage: "Being part of bringing new life into the world through blood donation is the most rewarding experience."
    }
  ];

  // Mock dashboard metrics
  const dashboardMetrics = {
    donorsMobilized: 247,
    appointmentsScheduled: 89,
    activeAlerts: 7,
    avgResponseTime: "52 min",
    recentActivity: [
      {
        type: "response",
        message: "12 donors responded to O- emergency alert at Mercy General",
        timestamp: "2 minutes ago",
        location: "Manhattan"
      },
      {
        type: "donation",
        message: "Emergency donation completed - 2 units of AB+ collected",
        timestamp: "8 minutes ago",
        location: "Brooklyn"
      },
      {
        type: "alert",
        message: "New critical alert: B- blood needed at Regional Medical",
        timestamp: "15 minutes ago",
        location: "Queens"
      },
      {
        type: "response",
        message: "Emergency response team dispatched to City Medical Center",
        timestamp: "23 minutes ago",
        location: "Manhattan"
      },
      {
        type: "donation",
        message: "Priority appointment scheduled for O- donor",
        timestamp: "31 minutes ago",
        location: "Bronx"
      }
    ],
    bloodTypeStatus: [
      { type: "O+", status: "stable", units: 45 },
      { type: "O-", status: "critical", units: 8 },
      { type: "A+", status: "stable", units: 32 },
      { type: "A-", status: "low", units: 15 },
      { type: "B+", status: "stable", units: 28 },
      { type: "B-", status: "critical", units: 6 },
      { type: "AB+", status: "low", units: 12 },
      { type: "AB-", status: "stable", units: 18 }
    ]
  };

  // Mock hospital partners data
  const hospitalPartners = [
    {
      id: 1,
      name: "Mercy General Hospital",
      location: "Manhattan, NY",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
      doctorPhoto: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      doctorName: "Dr. Sarah Mitchell",
      doctorTitle: "Chief of Emergency Medicine",
      endorsement: "Vital Drop's emergency response system has revolutionized how we handle critical blood shortages. Their rapid donor mobilization has saved countless lives in our ER."
    },
    {
      id: 2,
      name: "City Medical Center",
      location: "Brooklyn, NY",
      logo: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=200&h=100&fit=crop",
      doctorPhoto: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      doctorName: "Dr. Michael Rodriguez",
      doctorTitle: "Director of Transfusion Services",
      endorsement: "The coordination and speed of Vital Drop\'s emergency network is unmatched. We\'ve seen response times improve by 60% since partnering with them."
    },
    {
      id: 3,
      name: "Regional Blood Bank",
      location: "Queens, NY",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop"
    },
    {
      id: 4,
      name: "University Hospital",
      location: "Bronx, NY",
      logo: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=200&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Metropolitan Medical",
      location: "Staten Island, NY",
      logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=100&fit=crop"
    },
    {
      id: 6,
      name: "Central Hospital",
      location: "Long Island, NY",
      logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=100&fit=crop"
    },
    {
      id: 7,
      name: "Community Health Center",
      location: "Westchester, NY",
      logo: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200&h=100&fit=crop"
    },
    {
      id: 8,
      name: "Riverside Medical",
      location: "New Jersey",
      logo: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=200&h=100&fit=crop"
    }
  ];

  const handleEmergencyResponse = (alert) => {
    setSelectedAlert(alert);
    setShowResponseForm(true);
  };

  const handleFormSubmit = (responseData) => {
    console.log('Emergency response submitted:', responseData);
    setShowResponseForm(false);
    setSelectedAlert(null);
    // Show success message or redirect
  };

  const handleFormCancel = () => {
    setShowResponseForm(false);
    setSelectedAlert(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Emergency Header Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="AlertTriangle" size={32} color="white" className="animate-pulse" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Emergency Response Center</h1>
                <p className="text-red-100 mt-2">Rapid donor mobilization for critical blood shortages</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{currentTime?.toLocaleTimeString()}</div>
              <div className="text-red-100 text-sm">Live Emergency Status</div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Critical Alerts Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Critical Blood Shortages</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span>Real-time alerts</span>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {emergencyAlerts?.map((alert) => (
              <EmergencyAlert
                key={alert?.id}
                alert={alert}
                onRespond={handleEmergencyResponse}
              />
            ))}
          </div>
        </div>

        {/* Shortage Map */}
        <div className="mb-8">
          <ShortageMap regions={regionalShortages} />
        </div>

        {/* Response Dashboard */}
        <div className="mb-8">
          <ResponseDashboard metrics={dashboardMetrics} />
        </div>

        {/* Emergency Testimonials */}
        <div className="mb-8">
          <EmergencyTestimonials testimonials={emergencyTestimonials} />
        </div>

        {/* Hospital Partners */}
        <div className="mb-8">
          <HospitalPartners partners={hospitalPartners} />
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-white rounded-lg shadow-brand-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-life-force rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Icon name="Phone" size={32} color="white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">24/7 Emergency Hotline</h2>
            <p className="text-gray-600 mb-6">
              For immediate assistance or to report critical blood shortages, contact our emergency response team
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={20} color="#DC2626" />
                <span className="text-xl font-bold text-life-force">(555) 911-BLOOD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MessageSquare" size={20} color="#3B82F6" />
                <span className="text-lg text-trust-blue">Text: EMERGENCY to 55555</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button
                variant="default"
                size="lg"
                iconName="Heart"
                iconPosition="left"
                className="cta-magnetic emergency-pulse"
                onClick={() => window.location.href = '/find-donation-centers-scheduling'}
              >
                Schedule Regular Donation
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Rapid Response Form Modal */}
      {showResponseForm && selectedAlert && (
        <RapidResponseForm
          alert={selectedAlert}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
    </div>
  );
};

export default EmergencyResponseCenter;