import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TaskContext } from '../store/TaskContext';

const ProductivityChart = () => {
  const { tasks } = useContext(TaskContext);

  // Helper to get the last 7 days
  const last7Days = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d.toISOString().slice(0, 10);
  }).reverse();

  const data = last7Days.map(date => {
    const completedTasks = tasks.filter(task => 
        task.completed && task.completedDate && task.completedDate.startsWith(date)
    );
    return {
      date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      completed: completedTasks.length,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" style={{ fontSize: '12px' }} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={2} name="Tasks Completed" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProductivityChart;