
import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  label: string;
  completed?: boolean;
  current?: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
  className?: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, className = '' }) => {
  return (
    <div className={`flex w-full flex-col space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full
                  ${
                    step.completed
                      ? 'bg-teachfx-blue text-white'
                      : step.current
                      ? 'border-2 border-teachfx-blue bg-white text-teachfx-blue'
                      : 'border border-gray-300 bg-white text-gray-400'
                  }
                  transition-all duration-300
                `}
              >
                {step.completed ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium 
                  ${
                    step.completed || step.current
                      ? 'text-teachfx-blue'
                      : 'text-gray-500'
                  }
                `}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line between steps */}
            {index < steps.length - 1 && (
              <div
                className={`h-[2px] flex-1 transition-colors duration-300 ${
                  step.completed ? 'bg-teachfx-blue' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
