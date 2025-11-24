import React from "react";
import AddNewTask from "../components/AddNewTask";
import TodayTasks from "../components/TodayTasks";
import ProductivityOverview from "../components/ProductivityOverview";
import SeriousnessMeter from "../components/SeriousnessMeter";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AddNewTask />
          <TodayTasks />
        </div>
        <div>
          <ProductivityOverview />
          <SeriousnessMeter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
