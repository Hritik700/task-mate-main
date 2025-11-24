import React, { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';

const SeriousnessMeter = () => {
  const { getSeriousnessPercentage } = useContext(TaskContext);
  const percentage = getSeriousnessPercentage();

  const strokeWidth = 10;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Seriousness Meter</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 120 120">
            <circle
              className="text-gray-200"
              strokeWidth={strokeWidth}
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
            />
            <circle
              className="text-blue-600 transition-all duration-1000"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-800">{percentage}%</span>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold text-gray-600">Commitment Level</p>
      </div>
    </div>
  );
};

export default SeriousnessMeter;
