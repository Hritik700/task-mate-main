import React, { useContext } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TaskContext } from '../store/TaskContext';

const COLORS = ['#10B981', '#F59E0B']; // Green for Completed, Amber for Pending

const CompletionRatioChart = () => {
  const { tasks } = useContext(TaskContext);

  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.filter(task => !task.completed).length;

  const data = [
    { name: 'Completed', value: completed },
    { name: 'Pending', value: pending },
  ];

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CompletionRatioChart;
