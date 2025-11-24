import React from 'react';
import SeriousnessMeter from '../components/SeriousnessMeter';
import ProductivityChart from '../components/ProductivityChart';
import CompletionRateChart from '../components/CompletionRateChart';
import CompletionRatioChart from '../components/CompletionRationChart';

const AnalyticsPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow-md h-full">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Productivity Over Time</h3>
          <ProductivityChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md h-full">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Task Completion Rate</h3>
          <CompletionRateChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md h-full">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Completion Ratio</h3>
          <CompletionRatioChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md h-full">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Seriousness Meter</h3>
          <SeriousnessMeter />
        </div>

      </div>
    </div>
  );
};

export default AnalyticsPage;
