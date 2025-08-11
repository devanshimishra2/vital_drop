import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="w-full bg-white border-b border-border sticky top-16 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {steps?.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;
            const isUpcoming = stepNumber > currentStep;

            return (
              <div key={step?.id} className="flex items-center flex-1">
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      isCompleted
                        ? 'bg-success-green border-success-green text-white'
                        : isActive
                        ? 'bg-life-force border-life-force text-white'
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
                  >
                    {isCompleted ? (
                      <Icon name="Check" size={20} color="white" />
                    ) : (
                      <span className="text-sm font-semibold">{stepNumber}</span>
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p
                      className={`text-sm font-medium ${
                        isActive || isCompleted ? 'text-text-primary' : 'text-gray-400'
                      }`}
                    >
                      {step?.title}
                    </p>
                    <p className="text-xs text-text-secondary">{step?.description}</p>
                  </div>
                </div>
                {index < steps?.length - 1 && (
                  <div className="flex-1 mx-4">
                    <div
                      className={`h-0.5 transition-all duration-300 ${
                        isCompleted ? 'bg-success-green' : 'bg-gray-200'
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Mobile step indicator */}
        <div className="sm:hidden mt-4">
          <div className="text-center">
            <p className="text-sm font-medium text-text-primary">
              Step {currentStep} of {totalSteps}: {steps?.[currentStep - 1]?.title}
            </p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-life-force h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;