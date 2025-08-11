import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const HealthScreening = ({ onNext, onPrevious, onUpdateData, formData }) => {
  const [healthAnswers, setHealthAnswers] = useState(formData?.healthAnswers || {});
  const [currentSection, setCurrentSection] = useState(0);

  const healthSections = [
    {
      id: 'general_health',
      title: 'General Health',
      icon: 'Heart',
      questions: [
        {
          id: 'feeling_well',
          question: 'Are you feeling well and in good health today?',
          type: 'boolean',
          required: true,
          followUp: {
            condition: false,
            question: 'Please describe how you are feeling:'
          }
        },
        {
          id: 'recent_illness',
          question: 'Have you had any cold, flu, or other illness in the past 2 weeks?',
          type: 'boolean',
          followUp: {
            condition: true,
            question: 'Please describe your recent illness:'
          }
        },
        {
          id: 'fever_symptoms',
          question: 'Have you had a fever, cough, or flu-like symptoms in the past 48 hours?',
          type: 'boolean'
        }
      ]
    },
    {
      id: 'medications',
      title: 'Medications & Treatments',
      icon: 'Pill',
      questions: [
        {
          id: 'current_medications',
          question: 'Are you currently taking any prescription medications?',
          type: 'boolean',
          followUp: {
            condition: true,
            question: 'Please list your current medications:'
          }
        },
        {
          id: 'antibiotics',
          question: 'Have you taken antibiotics in the past 7 days?',
          type: 'boolean',
          followUp: {
            condition: true,
            question: 'Which antibiotic and for what condition?'
          }
        },
        {
          id: 'aspirin',
          question: 'Have you taken aspirin or aspirin-containing medications in the past 48 hours?',
          type: 'boolean'
        }
      ]
    },
    {
      id: 'travel_exposure',
      title: 'Travel & Exposure',
      icon: 'Plane',
      questions: [
        {
          id: 'recent_travel',
          question: 'Have you traveled outside the United States in the past 3 months?',
          type: 'boolean',
          followUp: {
            condition: true,
            question: 'Which countries did you visit and when?'
          }
        },
        {
          id: 'tattoo_piercing',
          question: 'Have you had a tattoo, piercing, or acupuncture in the past 3 months?',
          type: 'boolean',
          followUp: {
            condition: true,
            question: 'Please provide details (when and where):'
          }
        },
        {
          id: 'dental_work',
          question: 'Have you had dental work or oral surgery in the past 72 hours?',
          type: 'boolean'
        }
      ]
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle Factors',
      icon: 'Activity',
      questions: [
        {
          id: 'alcohol_consumption',
          question: 'Have you consumed alcohol in the past 24 hours?',
          type: 'boolean',
          followUp: {
            condition: true,
            question: 'How much alcohol did you consume?'
          }
        },
        {
          id: 'sleep',
          question: 'Did you get adequate sleep last night (at least 5 hours)?',
          type: 'boolean'
        },
        {
          id: 'eaten_today',
          question: 'Have you eaten a meal within the past 4 hours?',
          type: 'boolean'
        }
      ]
    }
  ];

  const handleAnswerChange = (questionId, value, followUpValue = '') => {
    const updatedAnswers = {
      ...healthAnswers,
      [questionId]: value,
      [`${questionId}_followup`]: followUpValue
    };
    setHealthAnswers(updatedAnswers);
    onUpdateData({ healthAnswers: updatedAnswers });
  };

  const isCurrentSectionComplete = () => {
    const currentQuestions = healthSections?.[currentSection]?.questions;
    return currentQuestions?.every(question => {
      if (question?.required) {
        return healthAnswers?.[question?.id] !== undefined;
      }
      return true;
    });
  };

  const handleNextSection = () => {
    if (currentSection < healthSections?.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      onNext();
    }
  };

  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else {
      onPrevious();
    }
  };

  const currentSectionData = healthSections?.[currentSection];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-brand-lg p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-life-force rounded-lg flex items-center justify-center">
                <Icon name={currentSectionData?.icon} size={20} color="white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  {currentSectionData?.title}
                </h2>
                <p className="text-sm text-text-secondary">
                  Section {currentSection + 1} of {healthSections?.length}
                </p>
              </div>
            </div>

            {/* Section Progress */}
            <div className="flex space-x-2 mb-8">
              {healthSections?.map((section, index) => (
                <div
                  key={section?.id}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                    index < currentSection
                      ? 'bg-success-green'
                      : index === currentSection
                      ? 'bg-life-force'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <div className="space-y-6">
              {currentSectionData?.questions?.map((question, questionIndex) => (
                <div key={question?.id} className="border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-text-primary mb-4">
                    {question?.question}
                    {question?.required && <span className="text-life-force ml-1">*</span>}
                  </h3>

                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={question?.id}
                        value="true"
                        checked={healthAnswers?.[question?.id] === true}
                        onChange={() => handleAnswerChange(question?.id, true)}
                        className="w-4 h-4 text-life-force border-gray-300 focus:ring-life-force"
                      />
                      <span className="text-text-primary font-medium">Yes</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={question?.id}
                        value="false"
                        checked={healthAnswers?.[question?.id] === false}
                        onChange={() => handleAnswerChange(question?.id, false)}
                        className="w-4 h-4 text-life-force border-gray-300 focus:ring-life-force"
                      />
                      <span className="text-text-primary font-medium">No</span>
                    </label>
                  </div>

                  {/* Follow-up question */}
                  {question?.followUp && 
                   healthAnswers?.[question?.id] === question?.followUp?.condition && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <label className="block text-sm font-medium text-blue-800 mb-2">
                        {question?.followUp?.question}
                      </label>
                      <textarea
                        value={healthAnswers?.[`${question?.id}_followup`] || ''}
                        onChange={(e) => handleAnswerChange(
                          question?.id, 
                          healthAnswers?.[question?.id], 
                          e?.target?.value
                        )}
                        className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows="3"
                        placeholder="Please provide details..."
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePreviousSection}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                {currentSection === 0 ? 'Previous' : 'Previous Section'}
              </Button>
              <Button
                variant="default"
                onClick={handleNextSection}
                disabled={!isCurrentSectionComplete()}
                iconName={currentSection === healthSections?.length - 1 ? "CheckCircle" : "ArrowRight"}
                iconPosition="right"
              >
                {currentSection === healthSections?.length - 1 ? 'Complete Screening' : 'Next Section'}
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-brand p-6 mb-6">
            <h3 className="font-semibold text-text-primary mb-4">Health Screening Progress</h3>
            <div className="space-y-3">
              {healthSections?.map((section, index) => {
                const isCompleted = index < currentSection;
                const isCurrent = index === currentSection;
                
                return (
                  <div
                    key={section?.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      isCurrent
                        ? 'bg-red-50 border border-life-force'
                        : isCompleted
                        ? 'bg-green-50 border border-success-green' :'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? 'bg-success-green text-white'
                          : isCurrent
                          ? 'bg-life-force text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {isCompleted ? (
                        <Icon name="Check" size={16} />
                      ) : (
                        <Icon name={section?.icon} size={16} />
                      )}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${
                        isCurrent || isCompleted ? 'text-text-primary' : 'text-gray-500'
                      }`}>
                        {section?.title}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {section?.questions?.length} questions
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-success-green to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Shield" size={20} color="white" />
              <h3 className="font-semibold">Medical Confidentiality</h3>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Your health information is completely confidential and used only to ensure 
              the safety of both donors and recipients.
            </p>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-white/80 text-xs">
                <Icon name="Info" size={12} className="inline mr-1" />
                A medical professional will review your responses before donation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthScreening;