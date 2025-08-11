import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UpcomingAppointments = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const upcomingAppointments = [
    {
      id: 1,
      date: "2025-03-15",
      time: "10:30 AM",
      location: "City Medical Center",
      address: "123 Healthcare Blvd, Downtown",
      type: "Whole Blood",
      estimatedDuration: "45 minutes",
      status: "confirmed",
      preparationTips: [
        "Eat iron-rich foods 24 hours before donation",
        "Stay well-hydrated - drink plenty of water",
        "Get a good night's sleep (7-8 hours)",
        "Avoid alcohol 24 hours before donation",
        "Bring a valid ID and donor card"
      ],
      healthChecks: [
        "Blood pressure check",
        "Hemoglobin level test",
        "Temperature measurement",
        "General health questionnaire"
      ],
      reminderSet: true,
      canReschedule: true
    },
    {
      id: 2,
      date: "2025-06-20",
      time: "2:00 PM",
      location: "Community Blood Bank",
      address: "456 Wellness Ave, Midtown",
      type: "Platelets",
      estimatedDuration: "90 minutes",
      status: "tentative",
      preparationTips: [
        "Avoid aspirin 48 hours before donation",
        "Eat calcium-rich foods",
        "Stay hydrated with water and juice",
        "Wear comfortable clothing",
        "Plan for longer appointment time"
      ],
      healthChecks: [
        "Platelet count verification",
        "Blood pressure check",
        "Comprehensive health screening",
        "Medication review"
      ],
      reminderSet: false,
      canReschedule: true
    }
  ];

  const eligibilityStatus = {
    nextEligibleDate: "2025-03-15",
    daysUntilEligible: 32,
    currentStatus: "eligible",
    lastDonation: "2025-01-15",
    healthStatus: "excellent"
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-success-green text-white';
      case 'tentative': return 'bg-amber-500 text-white';
      case 'cancelled': return 'bg-gray-400 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return 'CheckCircle';
      case 'tentative': return 'Clock';
      case 'cancelled': return 'XCircle';
      default: return 'Calendar';
    }
  };

  const handleReschedule = (appointmentId) => {
    // Mock reschedule functionality
    alert(`Reschedule appointment ${appointmentId} - This would open a scheduling modal`);
  };

  const handleCancel = (appointmentId) => {
    // Mock cancel functionality
    if (confirm('Are you sure you want to cancel this appointment?')) {
      alert(`Appointment ${appointmentId} cancelled - This would update the appointment status`);
    }
  };

  const toggleReminder = (appointmentId) => {
    // Mock reminder toggle
    alert(`Reminder toggled for appointment ${appointmentId}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-trust-blue rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Upcoming Appointments</h2>
            <p className="text-text-secondary">Manage your donation schedule</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          onClick={() => alert('Schedule new appointment - This would open scheduling flow')}
        >
          Schedule New
        </Button>
      </div>
      {/* Eligibility Status */}
      <div className="bg-gradient-to-r from-success-green/10 to-emerald-500/10 rounded-xl p-6 mb-8 border border-success-green/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-success-green rounded-lg flex items-center justify-center">
              <Icon name="CheckCircle" size={24} color="white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">Donation Eligibility</h3>
              <p className="text-text-secondary">
                You're eligible to donate! Next available date: {new Date(eligibilityStatus.nextEligibleDate)?.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-success-green">{eligibilityStatus?.daysUntilEligible}</div>
            <p className="text-sm text-text-secondary">days until eligible</p>
          </div>
        </div>
      </div>
      {/* Appointments List */}
      <div className="space-y-6">
        {upcomingAppointments?.map((appointment) => (
          <div
            key={appointment?.id}
            className={`bg-surface rounded-xl p-6 border-2 transition-all duration-300 ${
              selectedAppointment === appointment?.id 
                ? 'border-trust-blue shadow-brand-lg' 
                : 'border-transparent hover:border-gray-200'
            }`}
          >
            {/* Appointment Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-trust-blue rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={20} color="white" />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {new Date(appointment.date)?.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment?.status)}`}>
                      <Icon name={getStatusIcon(appointment?.status)} size={12} className="inline mr-1" />
                      {appointment?.status?.charAt(0)?.toUpperCase() + appointment?.status?.slice(1)}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm text-text-secondary">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{appointment?.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Timer" size={14} />
                        <span>{appointment?.estimatedDuration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Droplets" size={14} />
                        <span>{appointment?.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{appointment?.location} - {appointment?.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleReminder(appointment?.id)}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    appointment?.reminderSet 
                      ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' :'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                  title={appointment?.reminderSet ? 'Reminder set' : 'Set reminder'}
                >
                  <Icon name="Bell" size={16} />
                </button>
                <button
                  onClick={() => setSelectedAppointment(selectedAppointment === appointment?.id ? null : appointment?.id)}
                  className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                >
                  <Icon name={selectedAppointment === appointment?.id ? "ChevronUp" : "ChevronDown"} size={16} />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-3 mb-4">
              <Button
                variant="outline"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => alert('Add to calendar - This would generate calendar event')}
              >
                Add to Calendar
              </Button>
              {appointment?.canReschedule && (
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Edit"
                  iconPosition="left"
                  onClick={() => handleReschedule(appointment?.id)}
                >
                  Reschedule
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                iconPosition="left"
                onClick={() => handleCancel(appointment?.id)}
                className="text-life-force hover:text-red-700"
              >
                Cancel
              </Button>
            </div>

            {/* Expanded Details */}
            {selectedAppointment === appointment?.id && (
              <div className="border-t border-border pt-6 space-y-6">
                {/* Preparation Tips */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="CheckSquare" size={18} className="text-success-green" />
                    <span>Preparation Tips</span>
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {appointment?.preparationTips?.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 border border-border">
                        <div className="w-5 h-5 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={12} color="white" />
                        </div>
                        <span className="text-sm text-text-secondary">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Health Checks */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="Stethoscope" size={18} className="text-trust-blue" />
                    <span>Health Checks</span>
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {appointment?.healthChecks?.map((check, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-border">
                        <div className="w-5 h-5 bg-trust-blue rounded-full flex items-center justify-center">
                          <Icon name="Activity" size={12} color="white" />
                        </div>
                        <span className="text-sm text-text-secondary">{check}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Details */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="MapPin" size={18} className="text-life-force" />
                    <span>Location Details</span>
                  </h4>
                  <div className="bg-white rounded-lg p-4 border border-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-medium text-text-primary mb-1">{appointment?.location}</h5>
                        <p className="text-sm text-text-secondary mb-3">{appointment?.address}</p>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <button className="flex items-center space-x-1 text-trust-blue hover:text-blue-700 transition-colors duration-200">
                            <Icon name="Navigation" size={14} />
                            <span>Get Directions</span>
                          </button>
                          <button className="flex items-center space-x-1 text-trust-blue hover:text-blue-700 transition-colors duration-200">
                            <Icon name="Phone" size={14} />
                            <span>Call Center</span>
                          </button>
                        </div>
                      </div>
                      <div className="w-24 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon name="Map" size={20} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* No Appointments State */}
      {upcomingAppointments?.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Calendar" size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">No Upcoming Appointments</h3>
          <p className="text-text-secondary mb-6">Schedule your next donation to continue saving lives</p>
          <Button
            variant="default"
            iconName="Plus"
            iconPosition="left"
            onClick={() => alert('Schedule appointment - This would open scheduling flow')}
          >
            Schedule Donation
          </Button>
        </div>
      )}
      {/* Emergency Alert */}
      <div className="mt-8 bg-gradient-to-r from-life-force/10 to-red-500/10 rounded-xl p-6 border border-life-force/20">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-life-force rounded-lg flex items-center justify-center animate-pulse">
            <Icon name="AlertTriangle" size={24} color="white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-1">Emergency Blood Need</h3>
            <p className="text-text-secondary text-sm mb-3">
              Critical shortage of O- blood type in your area. Your donation could save lives today.
            </p>
            <Button
              variant="default"
              size="sm"
              iconName="Heart"
              iconPosition="left"
              className="emergency-pulse"
            >
              Respond to Emergency
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;