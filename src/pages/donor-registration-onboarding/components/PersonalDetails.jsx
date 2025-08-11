import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PersonalDetails = ({ onNext, onPrevious, onUpdateData, formData }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: formData?.firstName || '',
    lastName: formData?.lastName || '',
    email: formData?.email || '',
    phone: formData?.phone || '',
    dateOfBirth: formData?.dateOfBirth || '',
    gender: formData?.gender || '',
    bloodType: formData?.bloodType || '',
    address: formData?.address || '',
    city: formData?.city || '',
    state: formData?.state || '',
    zipCode: formData?.zipCode || '',
    emergencyContactName: formData?.emergencyContactName || '',
    emergencyContactPhone: formData?.emergencyContactPhone || '',
    emergencyContactRelation: formData?.emergencyContactRelation || '',
    profilePhoto: formData?.profilePhoto || null
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(null);

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  const bloodTypeOptions = [
    { value: 'unknown', label: "I don't know my blood type" },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' }
  ];

  const stateOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' }
  ];

  const relationOptions = [
    { value: 'spouse', label: 'Spouse' },
    { value: 'parent', label: 'Parent' },
    { value: 'child', label: 'Child' },
    { value: 'sibling', label: 'Sibling' },
    { value: 'friend', label: 'Friend' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    const updatedInfo = { ...personalInfo, [field]: value };
    setPersonalInfo(updatedInfo);
    onUpdateData(updatedInfo);
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      if (file?.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors({ ...errors, profilePhoto: 'Photo must be less than 5MB' });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e?.target?.result);
        handleInputChange('profilePhoto', file);
      };
      reader?.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!personalInfo?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!personalInfo?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!personalInfo?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(personalInfo?.email)) newErrors.email = 'Email is invalid';
    if (!personalInfo?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!personalInfo?.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!personalInfo?.gender) newErrors.gender = 'Gender is required';
    if (!personalInfo?.address?.trim()) newErrors.address = 'Address is required';
    if (!personalInfo?.city?.trim()) newErrors.city = 'City is required';
    if (!personalInfo?.state) newErrors.state = 'State is required';
    if (!personalInfo?.zipCode?.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!personalInfo?.emergencyContactName?.trim()) newErrors.emergencyContactName = 'Emergency contact name is required';
    if (!personalInfo?.emergencyContactPhone?.trim()) newErrors.emergencyContactPhone = 'Emergency contact phone is required';
    if (!personalInfo?.emergencyContactRelation) newErrors.emergencyContactRelation = 'Emergency contact relation is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-brand-lg p-6 sm:p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
            <Icon name="User" size={20} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Personal Information</h2>
            <p className="text-text-secondary">Help us create your donor profile</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Photo Upload */}
            <div className="bg-surface rounded-lg p-6">
              <h3 className="font-semibold text-text-primary mb-4">Profile Photo (Optional)</h3>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                    {photoPreview ? (
                      <img src={photoPreview} alt="Profile preview" className="w-full h-full object-cover" />
                    ) : (
                      <Icon name="Camera" size={32} color="#6B7280" />
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <div>
                  <p className="text-sm text-text-primary font-medium mb-1">Upload your photo</p>
                  <p className="text-xs text-text-secondary mb-2">This will be used for your donor ID card</p>
                  <p className="text-xs text-text-secondary">JPG, PNG up to 5MB</p>
                </div>
              </div>
              {errors?.profilePhoto && (
                <p className="text-red-600 text-sm mt-2">{errors?.profilePhoto}</p>
              )}
            </div>

            {/* Basic Information */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={personalInfo?.firstName}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                error={errors?.firstName}
                required
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={personalInfo?.lastName}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                error={errors?.lastName}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={personalInfo?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                value={personalInfo?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                required
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Input
                label="Date of Birth"
                type="date"
                value={personalInfo?.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e?.target?.value)}
                error={errors?.dateOfBirth}
                required
              />
              <Select
                label="Gender"
                options={genderOptions}
                value={personalInfo?.gender}
                onChange={(value) => handleInputChange('gender', value)}
                error={errors?.gender}
                placeholder="Select gender"
                required
              />
              <Select
                label="Blood Type"
                options={bloodTypeOptions}
                value={personalInfo?.bloodType}
                onChange={(value) => handleInputChange('bloodType', value)}
                placeholder="Select blood type"
                description="We'll confirm this during your visit"
              />
            </div>

            {/* Address Information */}
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-text-primary mb-4">Address Information</h3>
              <div className="space-y-4">
                <Input
                  label="Street Address"
                  type="text"
                  placeholder="123 Main Street"
                  value={personalInfo?.address}
                  onChange={(e) => handleInputChange('address', e?.target?.value)}
                  error={errors?.address}
                  required
                />
                <div className="grid sm:grid-cols-3 gap-4">
                  <Input
                    label="City"
                    type="text"
                    placeholder="City"
                    value={personalInfo?.city}
                    onChange={(e) => handleInputChange('city', e?.target?.value)}
                    error={errors?.city}
                    required
                  />
                  <Select
                    label="State"
                    options={stateOptions}
                    value={personalInfo?.state}
                    onChange={(value) => handleInputChange('state', value)}
                    error={errors?.state}
                    placeholder="Select state"
                    searchable
                    required
                  />
                  <Input
                    label="ZIP Code"
                    type="text"
                    placeholder="12345"
                    value={personalInfo?.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e?.target?.value)}
                    error={errors?.zipCode}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold text-text-primary mb-4">Emergency Contact</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Contact Name"
                    type="text"
                    placeholder="Full name"
                    value={personalInfo?.emergencyContactName}
                    onChange={(e) => handleInputChange('emergencyContactName', e?.target?.value)}
                    error={errors?.emergencyContactName}
                    required
                  />
                  <Input
                    label="Contact Phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={personalInfo?.emergencyContactPhone}
                    onChange={(e) => handleInputChange('emergencyContactPhone', e?.target?.value)}
                    error={errors?.emergencyContactPhone}
                    required
                  />
                </div>
                <Select
                  label="Relationship"
                  options={relationOptions}
                  value={personalInfo?.emergencyContactRelation}
                  onChange={(value) => handleInputChange('emergencyContactRelation', value)}
                  error={errors?.emergencyContactRelation}
                  placeholder="Select relationship"
                  required
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-trust-blue to-blue-600 rounded-xl p-6 text-white mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" size={20} color="white" />
                <h3 className="font-semibold">Your Privacy Matters</h3>
              </div>
              <p className="text-white/90 text-sm mb-4">
                All personal information is encrypted and protected according to HIPAA standards. 
                We never share your data without your explicit consent.
              </p>
              <div className="flex items-center space-x-2 text-white/80 text-xs">
                <Icon name="Lock" size={14} />
                <span>256-bit SSL encryption</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-brand p-6">
              <h3 className="font-semibold text-text-primary mb-4">Why We Need This Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="UserCheck" size={16} color="#DC2626" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Identity Verification</p>
                    <p className="text-xs text-text-secondary">Ensures safe donation process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} color="#DC2626" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Location Matching</p>
                    <p className="text-xs text-text-secondary">Find nearby donation centers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={16} color="#DC2626" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Emergency Contact</p>
                    <p className="text-xs text-text-secondary">Safety during donation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          <Button
            variant="outline"
            onClick={onPrevious}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Previous
          </Button>
          <Button
            variant="default"
            onClick={handleNext}
            iconName="ArrowRight"
            iconPosition="right"
          >
            Continue to Health Screening
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;