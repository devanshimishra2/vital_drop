import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const SchedulingModal = ({ center, isOpen, onClose, onSchedule }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bloodType: '',
    lastDonation: ''
  });
  const [step, setStep] = useState(1);

  if (!isOpen || !center) return null;

  const bloodTypeOptions = [
    { value: '', label: 'Select Blood Type' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' }
  ];

  const availableDates = [
    { value: '2025-01-12', label: 'Today - Jan 12' },
    { value: '2025-01-13', label: 'Tomorrow - Jan 13' },
    { value: '2025-01-14', label: 'Tuesday - Jan 14' },
    { value: '2025-01-15', label: 'Wednesday - Jan 15' },
    { value: '2025-01-16', label: 'Thursday - Jan 16' }
  ];

  const availableTimes = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const handleInputChange = (field, value) => {
    setDonorInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    const appointmentData = {
      center,
      date: selectedDate,
      time: selectedTime,
      donorInfo
    };
    onSchedule(appointmentData);
    onClose();
  };

  const isStep1Valid = selectedDate && selectedTime;
  const isStep2Valid = donorInfo?.firstName && donorInfo?.lastName && donorInfo?.email && donorInfo?.phone && donorInfo?.bloodType;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-brand-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Schedule Appointment</h2>
            <p className="text-sm text-text-secondary">{center?.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 1 ? 'bg-life-force text-white' : 'bg-gray-200 text-text-secondary'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 rounded ${
              step >= 2 ? 'bg-life-force' : 'bg-gray-200'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= 2 ? 'bg-life-force text-white' : 'bg-gray-200 text-text-secondary'
            }`}>
              2
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-text-secondary">Select Time</span>
            <span className="text-xs text-text-secondary">Your Info</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-medium text-text-primary mb-3">Choose Date & Time</h3>
                
                <Select
                  label="Select Date"
                  options={availableDates}
                  value={selectedDate}
                  onChange={setSelectedDate}
                  className="mb-4"
                />

                <Select
                  label="Select Time"
                  options={availableTimes}
                  value={selectedTime}
                  onChange={setSelectedTime}
                />
              </div>

              {/* Center Info */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} className="text-life-force mt-1" />
                  <div>
                    <div className="text-sm font-medium text-text-primary">{center?.name}</div>
                    <div className="text-xs text-text-secondary">{center?.address}</div>
                    <div className="text-xs text-text-secondary mt-1">
                      Expected wait time: {center?.waitTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Preparation Tips */}
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} className="text-trust-blue mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-trust-blue">Preparation Tips</div>
                    <ul className="text-xs text-trust-blue mt-1 space-y-1">
                      <li>• Eat a healthy meal before donating</li>
                      <li>• Stay hydrated - drink plenty of water</li>
                      <li>• Bring a valid ID and donor card</li>
                      <li>• Get a good night's sleep</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-md font-medium text-text-primary mb-3">Your Information</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="First Name"
                  type="text"
                  value={donorInfo?.firstName}
                  onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                  required
                />
                <Input
                  label="Last Name"
                  type="text"
                  value={donorInfo?.lastName}
                  onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                  required
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                value={donorInfo?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                value={donorInfo?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                required
              />

              <Select
                label="Blood Type"
                options={bloodTypeOptions}
                value={donorInfo?.bloodType}
                onChange={(value) => handleInputChange('bloodType', value)}
                required
              />

              <Input
                label="Last Donation Date (Optional)"
                type="date"
                value={donorInfo?.lastDonation}
                onChange={(e) => handleInputChange('lastDonation', e?.target?.value)}
              />

              {/* Appointment Summary */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm font-medium text-text-primary mb-2">Appointment Summary</div>
                <div className="space-y-1 text-xs text-text-secondary">
                  <div>Date: {availableDates?.find(d => d?.value === selectedDate)?.label}</div>
                  <div>Time: {availableTimes?.find(t => t?.value === selectedTime)?.label}</div>
                  <div>Location: {center?.name}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          {step === 1 ? (
            <>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="default"
                onClick={handleNext}
                disabled={!isStep1Valid}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Next
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="default"
                onClick={handleSubmit}
                disabled={!isStep2Valid}
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulingModal;