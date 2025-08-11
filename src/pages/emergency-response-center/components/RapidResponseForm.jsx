import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const RapidResponseForm = ({ alert, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    availability: 'immediate',
    preferredCenter: '',
    contactMethod: 'phone',
    specialNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availabilityOptions = [
    { value: 'immediate', label: 'Available Immediately' },
    { value: 'within-2-hours', label: 'Within 2 Hours' },
    { value: 'within-4-hours', label: 'Within 4 Hours' },
    { value: 'today', label: 'Later Today' }
  ];

  const centerOptions = [
    { value: 'mercy-general', label: 'Mercy General Hospital - 0.8 miles' },
    { value: 'city-medical', label: 'City Medical Center - 1.2 miles' },
    { value: 'regional-blood', label: 'Regional Blood Bank - 2.1 miles' },
    { value: 'university-hospital', label: 'University Hospital - 3.4 miles' }
  ];

  const contactOptions = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'sms', label: 'Text Message' },
    { value: 'email', label: 'Email' }
  ];

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit({
      ...formData,
      alertId: alert?.id,
      timestamp: new Date()?.toISOString()
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-brand-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={24} color="white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Emergency Response</h2>
                <p className="text-sm text-gray-600">{alert?.bloodType} Blood Donation</p>
              </div>
            </div>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Alert Summary */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Icon name="AlertTriangle" size={20} color="#DC2626" />
              <div>
                <h3 className="font-semibold text-red-900">{alert?.hospitalName}</h3>
                <p className="text-sm text-red-700">
                  Needs {alert?.unitsNeeded} units of {alert?.bloodType} blood
                </p>
                <p className="text-sm text-red-700">
                  Critical in {alert?.timeRemaining}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Select
              label="When can you donate?"
              options={availabilityOptions}
              value={formData?.availability}
              onChange={(value) => handleInputChange('availability', value)}
              required
            />

            <Select
              label="Preferred donation center"
              description="Sorted by distance from your location"
              options={centerOptions}
              value={formData?.preferredCenter}
              onChange={(value) => handleInputChange('preferredCenter', value)}
              required
            />

            <Select
              label="How should we contact you?"
              options={contactOptions}
              value={formData?.contactMethod}
              onChange={(value) => handleInputChange('contactMethod', value)}
              required
            />

            <Input
              label="Special notes (optional)"
              type="text"
              placeholder="Any medical conditions or scheduling preferences..."
              value={formData?.specialNotes}
              onChange={(e) => handleInputChange('specialNotes', e?.target?.value)}
            />

            {/* Pre-filled donor info display */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Your Information</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Name:</span> Sarah Johnson</p>
                <p><span className="font-medium">Blood Type:</span> {alert?.bloodType}</p>
                <p><span className="font-medium">Phone:</span> (555) 123-4567</p>
                <p><span className="font-medium">Last Donation:</span> 3 months ago</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                iconName="Heart"
                iconPosition="left"
                loading={isSubmitting}
                className="flex-1 cta-magnetic emergency-pulse"
                disabled={!formData?.preferredCenter}
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Donation'}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>

          {/* Emergency Contact */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Phone" size={16} />
              <span>Emergency Hotline: (555) 911-BLOOD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RapidResponseForm;