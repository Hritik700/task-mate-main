import React from 'react';
import TaskList from './TaskList';

const MyTasks = ({ tasks, customTitle = 'My Tasks', hideDueDate = false }) => {
  const pendingTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{customTitle}</h2>
      <TaskList title="Pending Tasks" tasks={pendingTasks} hideDueDate={hideDueDate} isCompleted={false} />
      <TaskList title="Completed Tasks" tasks={completedTasks} hideDueDate={hideDueDate} isCompleted={true} />
    </div>
  );
};

export default MyTasks;
