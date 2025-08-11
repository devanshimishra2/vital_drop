import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ProgressIndicator from './components/ProgressIndicator';
import EligibilityCheck from './components/EligibilityCheck';
import PersonalDetails from './components/PersonalDetails';
import HealthScreening from './components/HealthScreening';
import WelcomeScreen from './components/WelcomeScreen';
import Icon from '../../components/AppIcon';


const DonorRegistrationOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [savedProgress, setSavedProgress] = useState(null);

  const steps = [
    {
      id: 'eligibility',
      title: 'Eligibility Check',
      description: 'Quick health assessment'
    },
    {
      id: 'personal',
      title: 'Personal Details',
      description: 'Basic information'
    },
    {
      id: 'health',
      title: 'Health Screening',
      description: 'Medical questionnaire'
    },
    {
      id: 'welcome',
      title: 'Welcome',
      description: 'Registration complete'
    }
  ];

  // Load saved progress on component mount
  useEffect(() => {
    const saved = localStorage.getItem('donor_registration_progress');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setSavedProgress(parsedData);
        setFormData(parsedData?.formData || {});
        setCurrentStep(parsedData?.currentStep || 1);
      } catch (error) {
        console.error('Error loading saved progress:', error);
      }
    }
  }, []);

  // Save progress whenever formData or currentStep changes
  useEffect(() => {
    if (Object.keys(formData)?.length > 0 || currentStep > 1) {
      const progressData = {
        currentStep,
        formData,
        timestamp: new Date()?.toISOString()
      };
      localStorage.setItem('donor_registration_progress', JSON.stringify(progressData));
    }
  }, [formData, currentStep]);

  const handleUpdateData = (newData) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  const handleNext = () => {
    if (currentStep < steps?.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const clearSavedProgress = () => {
    localStorage.removeItem('donor_registration_progress');
    setSavedProgress(null);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <EligibilityCheck
            onNext={handleNext}
            onUpdateData={handleUpdateData}
            formData={formData}
          />
        );
      case 2:
        return (
          <PersonalDetails
            onNext={handleNext}
            onPrevious={handlePrevious}
            onUpdateData={handleUpdateData}
            formData={formData}
          />
        );
      case 3:
        return (
          <HealthScreening
            onNext={handleNext}
            onPrevious={handlePrevious}
            onUpdateData={handleUpdateData}
            formData={formData}
          />
        );
      case 4:
        return (
          <WelcomeScreen
            formData={formData}
            onComplete={clearSavedProgress}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {/* Progress Indicator */}
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={steps?.length}
        steps={steps}
      />
      {/* Saved Progress Banner */}
      {savedProgress && currentStep === 1 && (
        <div className="bg-blue-50 border-b border-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-trust-blue rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={16} color="white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-800">
                    Welcome back! You have saved progress from{' '}
                    {new Date(savedProgress.timestamp)?.toLocaleDateString()}
                  </p>
                  <p className="text-xs text-blue-600">
                    Continue where you left off or start fresh
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setCurrentStep(savedProgress?.currentStep);
                    setFormData(savedProgress?.formData);
                  }}
                  className="px-4 py-2 bg-trust-blue text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Continue
                </button>
                <button
                  onClick={clearSavedProgress}
                  className="px-4 py-2 border border-blue-300 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  Start Fresh
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        {renderCurrentStep()}
      </main>
      {/* Footer */}
      <footer className="bg-white border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-life-force rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={16} color="white" />
              </div>
              <span className="text-lg font-bold text-life-force">Vital Drop</span>
            </div>
            <p className="text-sm text-text-secondary mb-4">
              Need help with registration? Our support team is here to assist you.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <a href="tel:1-800-VITALDROP" className="flex items-center space-x-1 hover:text-life-force transition-colors duration-200">
                <Icon name="Phone" size={14} />
                <span>1-800-VITAL-DROP</span>
              </a>
              <a href="mailto:support@vitaldrop.org" className="flex items-center space-x-1 hover:text-life-force transition-colors duration-200">
                <Icon name="Mail" size={14} />
                <span>support@vitaldrop.org</span>
              </a>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>24/7 Support</span>
              </div>
            </div>
            <p className="text-xs text-text-secondary mt-4">
              © {new Date()?.getFullYear()} Vital Drop. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonorRegistrationOnboarding;