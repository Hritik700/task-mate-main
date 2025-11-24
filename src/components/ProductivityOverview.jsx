import React from "react";
import ProductivityChart from "./ProductivityChart";

const ProductivityOverview = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Productivity Overview
      </h2>
      <ProductivityChart />
    </div>
  );
};

export default ProductivityOverview;
