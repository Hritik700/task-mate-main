import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TaskContext } from '../store/TaskContext';

const CompletionRateChart = () => {
  const { tasks } = useContext(TaskContext);

  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  const data = [
    { name: 'Status', completed: completedCount, pending: pendingCount },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" hide />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" stackId="a" fill="#3b82f6" name="Completed" />
        <Bar dataKey="pending" stackId="a" fill="#e5e7eb" name="Pending" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CompletionRateChart;