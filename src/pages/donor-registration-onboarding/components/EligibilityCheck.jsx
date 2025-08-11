import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EligibilityCheck = ({ onNext, onUpdateData }) => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 'age',
      question: 'How old are you?',
      type: 'radio',
      options: [
        { value: 'under18', label: 'Under 18 years old' },
        { value: '18-65', label: '18-65 years old' },
        { value: 'over65', label: 'Over 65 years old' }
      ],
      tooltip: 'Most donors must be between 18-65 years old, though some locations accept 16-17 year olds with parental consent.',
      icon: 'Calendar'
    },
    {
      id: 'weight',
      question: 'What is your approximate weight?',
      type: 'radio',
      options: [
        { value: 'under110', label: 'Under 110 lbs (50 kg)' },
        { value: 'over110', label: '110 lbs (50 kg) or more' }
      ],
      tooltip: 'Donors must weigh at least 110 pounds to safely donate blood.',
      icon: 'Scale'
    },
    {
      id: 'health',
      question: 'How would you describe your current health?',
      type: 'radio',
      options: [
        { value: 'excellent', label: 'Excellent - I feel great!' },
        { value: 'good', label: 'Good - Minor issues but overall healthy' },
        { value: 'fair', label: 'Fair - Some health concerns' },
        { value: 'poor', label: 'Poor - Significant health issues' }
      ],
      tooltip: 'Donors should be in good general health on the day of donation.',
      icon: 'Heart'
    },
    {
      id: 'medications',
      question: 'Are you currently taking any medications?',
      type: 'radio',
      options: [
        { value: 'none', label: 'No medications' },
        { value: 'common', label: 'Common medications (vitamins, birth control, etc.)' },
        { value: 'prescription', label: 'Prescription medications' },
        { value: 'blood-thinners', label: 'Blood thinners or aspirin' }
      ],
      tooltip: 'Most medications are acceptable, but some may require a waiting period.',
      icon: 'Pill'
    },
    {
      id: 'recent_donation',
      question: 'When did you last donate blood?',
      type: 'radio',
      options: [
        { value: 'never', label: 'Never donated before' },
        { value: 'over8weeks', label: 'More than 8 weeks ago' },
        { value: 'recent', label: 'Within the last 8 weeks' }
      ],
      tooltip: 'There must be at least 8 weeks between whole blood donations.',
      icon: 'Clock'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah from Portland',
      message: 'The process was easier than I expected!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mike from Seattle',
      message: 'I was nervous at first, but the staff made me feel so comfortable.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Jessica from Denver',
      message: 'Knowing I could save lives made it all worthwhile!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const handleAnswerChange = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    onUpdateData({ eligibilityAnswers: newAnswers });
  };

  const handleNext = () => {
    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const checkEligibility = () => {
    const issues = [];
    
    if (answers?.age === 'under18' || answers?.age === 'over65') {
      issues?.push('Age requirements not met');
    }
    if (answers?.weight === 'under110') {
      issues?.push('Weight requirement not met');
    }
    if (answers?.health === 'poor') {
      issues?.push('Health screening needed');
    }
    if (answers?.recent_donation === 'recent') {
      issues?.push('Recent donation - waiting period required');
    }

    return issues;
  };

  const eligibilityIssues = checkEligibility();
  const isEligible = eligibilityIssues?.length === 0;

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            isEligible ? 'bg-success-green' : 'bg-warning'
          }`}>
            <Icon 
              name={isEligible ? "CheckCircle" : "AlertCircle"} 
              size={32} 
              color="white" 
            />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            {isEligible ? 'Great News!' : 'Almost There!'}
          </h2>
          <p className="text-text-secondary">
            {isEligible 
              ? 'You appear to meet the basic eligibility requirements for blood donation.'
              : 'There are a few items that need attention before you can donate.'
            }
          </p>
        </div>
        {!isEligible && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-orange-800 mb-3">Items to Address:</h3>
            <ul className="space-y-2">
              {eligibilityIssues?.map((issue, index) => (
                <li key={index} className="flex items-start space-x-2 text-orange-700">
                  <Icon name="AlertTriangle" size={16} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{issue}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-orange-600 mt-4">
              Don't worry! Many of these can be resolved. Our medical team will provide 
              guidance during your appointment.
            </p>
          </div>
        )}
        {isEligible && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-start space-x-3">
              <Icon name="Heart" size={20} color="#059669" className="mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-800 mb-2">You're Ready to Save Lives!</h3>
                <p className="text-green-700 text-sm">
                  Based on your responses, you meet the basic requirements. A final health 
                  screening will be conducted at your donation appointment.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="flex space-x-4">
          <Button
            variant="outline"
            onClick={() => {
              setShowResults(false);
              setCurrentQuestion(0);
            }}
            className="flex-1"
          >
            Review Answers
          </Button>
          <Button
            variant="default"
            onClick={onNext}
            className="flex-1"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Continue Registration
          </Button>
        </div>
      </div>
    );
  }

  const question = questions?.[currentQuestion];
  const currentTestimonial = testimonials?.[currentQuestion % testimonials?.length];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-brand-lg p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
                <Icon name={question?.icon} size={20} color="white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  Question {currentQuestion + 1} of {questions?.length}
                </h2>
                <p className="text-sm text-text-secondary">Eligibility Check</p>
              </div>
            </div>

            <h3 className="text-lg font-medium text-text-primary mb-6">
              {question?.question}
            </h3>

            <div className="space-y-3 mb-6">
              {question?.options?.map((option) => (
                <label
                  key={option?.value}
                  className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    answers?.[question?.id] === option?.value
                      ? 'border-life-force bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name={question?.id}
                    value={option?.value}
                    checked={answers?.[question?.id] === option?.value}
                    onChange={(e) => handleAnswerChange(question?.id, e?.target?.value)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                    answers?.[question?.id] === option?.value
                      ? 'border-life-force'
                      : 'border-gray-300'
                  }`}>
                    {answers?.[question?.id] === option?.value && (
                      <div className="w-2 h-2 bg-life-force rounded-full" />
                    )}
                  </div>
                  <span className="text-text-primary font-medium">{option?.label}</span>
                </label>
              ))}
            </div>

            {question?.tooltip && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} color="#3B82F6" className="mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-700">{question?.tooltip}</p>
                </div>
              </div>
            )}

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Previous
              </Button>
              <Button
                variant="default"
                onClick={handleNext}
                disabled={!answers?.[question?.id]}
                iconName={currentQuestion === questions?.length - 1 ? "CheckCircle" : "ArrowRight"}
                iconPosition="right"
              >
                {currentQuestion === questions?.length - 1 ? 'Check Eligibility' : 'Next'}
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-life-force to-cta-deep rounded-xl p-6 text-white mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.name}
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
              <div>
                <p className="font-medium">{currentTestimonial?.name}</p>
                <p className="text-white/80 text-sm">First-time donor</p>
              </div>
            </div>
            <blockquote className="text-white/90 italic">
              "{currentTestimonial?.message}"
            </blockquote>
          </div>

          <div className="bg-white rounded-xl shadow-brand p-6">
            <h3 className="font-semibold text-text-primary mb-4">Did You Know?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Droplets" size={16} color="#DC2626" className="mt-1" />
                <div>
                  <p className="text-sm font-medium text-text-primary">One donation saves 3 lives</p>
                  <p className="text-xs text-text-secondary">Your blood is separated into components</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={16} color="#DC2626" className="mt-1" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Process takes 45 minutes</p>
                  <p className="text-xs text-text-secondary">Including registration and recovery</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={16} color="#DC2626" className="mt-1" />
                <div>
                  <p className="text-sm font-medium text-text-primary">100% safe process</p>
                  <p className="text-xs text-text-secondary">All equipment is sterile and single-use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityCheck;