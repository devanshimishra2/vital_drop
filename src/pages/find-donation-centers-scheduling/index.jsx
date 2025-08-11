import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import MapView from './components/MapView';
import CenterCard from './components/CenterCard';
import FilterPanel from './components/FilterPanel';
import SchedulingModal from './components/SchedulingModal';
import EmergencyAlert from './components/EmergencyAlert';
import SearchBar from './components/SearchBar';

const FindDonationCentersScheduling = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [userLocation, setUserLocation] = useState({ lat: 40.7128, lng: -74.0060 });
  const [radiusFilter, setRadiusFilter] = useState(10);
  
  const [filters, setFilters] = useState({
    sortBy: 'distance',
    bloodType: 'all',
    openNow: false,
    weekendHours: false,
    extendedHours: false,
    mobileDrive: false,
    firstTimeDonor: false,
    wheelchairAccessible: false,
    parkingAvailable: false,
    criticalNeed: false,
    lowStock: false,
    minRating: 0
  });

  // Mock data for donation centers
  const mockCenters = [
    {
      id: 1,
      name: "Central Blood Bank",
      address: "123 Main Street, Downtown",
      distance: "0.8 miles",
      lat: 40.7589,
      lng: -73.9851,
      phone: "(555) 123-4567",
      isOpen: true,
      todayHours: "8:00 AM - 6:00 PM",
      waitTime: "15 min",
      rating: 4.8,
      reviewCount: 342,
      inventoryLevel: "critical",
      bloodTypesNeeded: ["O-", "A-", "B-"],
      availableSlots: ["10:30 AM", "2:00 PM", "4:30 PM", "5:00 PM"],
      badges: ["Extended Hours", "First-Time Friendly"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      recentReview: {
        text: "Great staff, very professional and caring. Quick process!",
        author: "Sarah M."
      }
    },
    {
      id: 2,
      name: "Community Health Center",
      address: "456 Oak Avenue, Midtown",
      distance: "1.2 miles",
      lat: 40.7505,
      lng: -73.9934,
      phone: "(555) 234-5678",
      isOpen: true,
      todayHours: "9:00 AM - 5:00 PM",
      waitTime: "25 min",
      rating: 4.6,
      reviewCount: 198,
      inventoryLevel: "low",
      bloodTypesNeeded: ["O+", "A+"],
      availableSlots: ["11:00 AM", "1:30 PM", "3:00 PM"],
      badges: ["Weekend Hours"],
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop",
      recentReview: {
        text: "Clean facility with friendly volunteers. Highly recommend!",
        author: "Mike R."
      }
    },
    {
      id: 3,
      name: "University Medical Center",
      address: "789 College Road, University District",
      distance: "2.1 miles",
      lat: 40.7282,
      lng: -73.9942,
      phone: "(555) 345-6789",
      isOpen: true,
      todayHours: "7:00 AM - 8:00 PM",
      waitTime: "10 min",
      rating: 4.9,
      reviewCount: 567,
      inventoryLevel: "adequate",
      bloodTypesNeeded: ["AB+", "AB-"],
      availableSlots: ["9:00 AM", "12:00 PM", "3:30 PM", "6:00 PM", "7:00 PM"],
      badges: ["Extended Hours", "Parking Available"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      recentReview: {
        text: "State-of-the-art facility with excellent medical staff.",
        author: "Jennifer L."
      }
    },
    {
      id: 4,
      name: "Red Cross Mobile Unit",
      address: "Shopping Mall Parking Lot, West Side",
      distance: "3.5 miles",
      lat: 40.7614,
      lng: -74.0055,
      phone: "(555) 456-7890",
      isOpen: false,
      todayHours: "Closed - Returns Tomorrow 10:00 AM",
      waitTime: "N/A",
      rating: 4.4,
      reviewCount: 89,
      inventoryLevel: "critical",
      bloodTypesNeeded: ["O-", "O+", "A-"],
      availableSlots: [],
      badges: ["Mobile Drive", "First-Time Friendly"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      recentReview: {
        text: "Convenient mobile unit, great for busy schedules.",
        author: "David K."
      }
    },
    {
      id: 5,
      name: "St. Mary\'s Hospital Blood Center",
      address: "321 Hospital Drive, Medical District",
      distance: "4.2 miles",
      lat: 40.7831,
      lng: -73.9712,
      phone: "(555) 567-8901",
      isOpen: true,
      todayHours: "6:00 AM - 10:00 PM",
      waitTime: "20 min",
      rating: 4.7,
      reviewCount: 423,
      inventoryLevel: "adequate",
      bloodTypesNeeded: ["B+", "B-"],
      availableSlots: ["8:00 AM", "11:30 AM", "2:30 PM", "5:30 PM", "8:00 PM"],
      badges: ["24/7 Emergency", "Wheelchair Accessible"],
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
      recentReview: {
        text: "Professional hospital setting with experienced staff.",
        author: "Lisa P."
      }
    }
  ];

  // Mock emergency alert
  const emergencyAlert = {
    id: 1,
    message: "Critical shortage of O- blood type needed for emergency surgeries at nearby hospitals.",
    bloodType: "O-",
    location: "Downtown Medical District",
    timeNeeded: "Within 2 hours",
    priority: "critical"
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    // In a real app, this would trigger an API call to search centers
  };

  const handleLocationDetect = () => {
    setIsDetectingLocation(true);
    // Simulate geolocation detection
    setTimeout(() => {
      setUserLocation({ lat: 40.7128, lng: -74.0060 });
      setIsDetectingLocation(false);
    }, 2000);
  };

  const handleCenterSelect = (center) => {
    setSelectedCenter(center);
  };

  const handleSchedule = (center) => {
    setSelectedCenter(center);
    setIsSchedulingModalOpen(true);
  };

  const handleScheduleConfirm = (appointmentData) => {
    console.log('Appointment scheduled:', appointmentData);
    // In a real app, this would save the appointment
    alert('Appointment scheduled successfully! You will receive a confirmation email shortly.');
  };

  const handleGetDirections = (center) => {
    const url = `https://maps.google.com/maps?daddr=${encodeURIComponent(center?.address)}`;
    window.open(url, '_blank');
  };

  const handleEmergencyRespond = (alert) => {
    // Filter centers that match the emergency blood type
    const matchingCenters = mockCenters?.filter(center => 
      center?.bloodTypesNeeded?.includes(alert?.bloodType) && center?.isOpen
    );
    
    if (matchingCenters?.length > 0) {
      setSelectedCenter(matchingCenters?.[0]);
      setIsSchedulingModalOpen(true);
    }
  };

  const handleEmergencyDismiss = (alertId) => {
    console.log('Emergency alert dismissed:', alertId);
  };

  const handleNavigation = (path) => {
    // In a real app, this would use react-router or similar navigation
    console.log('Navigating to:', path);
    // For now, just log the navigation path
    // window.location.href = path; // Uncomment if you want actual navigation
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      sortBy: 'distance',
      bloodType: 'all',
      openNow: false,
      weekendHours: false,
      extendedHours: false,
      mobileDrive: false,
      firstTimeDonor: false,
      wheelchairAccessible: false,
      parkingAvailable: false,
      criticalNeed: false,
      lowStock: false,
      minRating: 0
    });
  };

  // Filter and sort centers based on current filters
  const filteredCenters = mockCenters?.filter(center => {
    if (filters?.openNow && !center?.isOpen) return false;
    if (filters?.bloodType !== 'all' && !center?.bloodTypesNeeded?.includes(filters?.bloodType)) return false;
    if (filters?.criticalNeed && center?.inventoryLevel !== 'critical') return false;
    if (filters?.lowStock && center?.inventoryLevel !== 'low') return false;
    if (filters?.minRating && center?.rating < filters?.minRating) return false;
    if (filters?.mobileDrive && !center?.badges?.includes('Mobile Drive')) return false;
    if (filters?.firstTimeDonor && !center?.badges?.includes('First-Time Friendly')) return false;
    if (filters?.wheelchairAccessible && !center?.badges?.includes('Wheelchair Accessible')) return false;
    if (filters?.weekendHours && !center?.badges?.includes('Weekend Hours')) return false;
    if (filters?.extendedHours && !center?.badges?.includes('Extended Hours')) return false;
    return true;
  })?.sort((a, b) => {
    switch (filters?.sortBy) {
      case 'rating':
        return b?.rating - a?.rating;
      case 'waitTime':
        return parseInt(a?.waitTime) - parseInt(b?.waitTime);
      case 'availability':
        return b?.availableSlots?.length - a?.availableSlots?.length;
      default: // distance
        return parseFloat(a?.distance) - parseFloat(b?.distance);
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-text-secondary mb-3">
              <span>Home</span>
              <Icon name="ChevronRight" size={16} />
              <span className="text-life-force font-medium">Find Blood Banks</span>
            </div>
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
                Every Drop Counts
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl">
                Find nearby blood donation centers and schedule your life-saving appointment. 
                Your donation creates a vital connection between you and those in urgent need.
              </p>
            </div>
            
            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-life-force mb-1">15,000+</div>
                <div className="text-sm text-text-secondary">Lives Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-life-force mb-1">8,500+</div>
                <div className="text-sm text-text-secondary">Active Donors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-life-force mb-1">150+</div>
                <div className="text-sm text-text-secondary">Partner Hospitals</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                variant="default"
                size="lg"
                iconName="Heart"
                iconPosition="left"
                className="cta-magnetic bg-life-force hover:bg-cta-deep text-white px-8 py-4 text-lg"
                onClick={() => handleNavigation('/donor-registration-onboarding')}
              >
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Info"
                iconPosition="left"
                className="border-life-force text-life-force hover:bg-life-force hover:text-white px-8 py-4 text-lg"
                onClick={() => handleNavigation('/community-stories-impact-hub')}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Emergency Alert */}
          <EmergencyAlert
            alert={emergencyAlert}
            onRespond={handleEmergencyRespond}
            onDismiss={handleEmergencyDismiss}
          />

          {/* Search Bar */}
          <SearchBar
            onSearch={handleSearch}
            onLocationDetect={handleLocationDetect}
            isDetectingLocation={isDetectingLocation}
          />

          {/* View Toggle & Results Count */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-sm text-text-secondary">
                {filteredCenters?.length} centers found within {radiusFilter} miles
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded-lg shadow-brand p-1 flex border border-gray-200">
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list' ?'bg-life-force text-white' :'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon name="List" size={16} />
                  <span>List</span>
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'map' ?'bg-life-force text-white' :'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon name="Map" size={16} />
                  <span>Map</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <FilterPanel
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterPanelOpen}
                onToggle={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
              />
            </div>

            {/* Results Area */}
            <div className="lg:col-span-3">
              {viewMode === 'list' ? (
                <div className="space-y-4">
                  {filteredCenters?.length > 0 ? (
                    filteredCenters?.map((center) => (
                      <CenterCard
                        key={center?.id}
                        center={center}
                        onSchedule={handleSchedule}
                        onGetDirections={handleGetDirections}
                        isSelected={selectedCenter?.id === center?.id}
                      />
                    ))
                  ) : (
                    <div className="bg-white rounded-lg shadow-brand p-8 text-center">
                      <Icon name="MapPin" size={48} className="text-text-secondary mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-text-primary mb-2">No centers found</h3>
                      <p className="text-text-secondary mb-4">
                        Try adjusting your filters or search in a different area.
                      </p>
                      <Button
                        variant="outline"
                        onClick={handleClearFilters}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-[600px] rounded-lg overflow-hidden">
                  <MapView
                    centers={filteredCenters}
                    selectedCenter={selectedCenter}
                    onCenterSelect={handleCenterSelect}
                    userLocation={userLocation}
                    radiusFilter={radiusFilter}
                    onRadiusChange={setRadiusFilter}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Scheduling Modal */}
      <SchedulingModal
        center={selectedCenter}
        isOpen={isSchedulingModalOpen}
        onClose={() => setIsSchedulingModalOpen(false)}
        onSchedule={handleScheduleConfirm}
      />
    </div>
  );
};

export default FindDonationCentersScheduling;