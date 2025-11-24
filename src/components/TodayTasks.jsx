import React, { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';
import TaskItem from './TaskItem';

const TaskSection = ({ title, tasks }) => {
  if (tasks.length === 0) return null;

  return (
    <div className="mt-4">
      <h3 className="text-md font-semibold text-gray-600 mb-3">{title}</h3>
      <ul className="space-y-1">
        {tasks.map((task, index) => (
          <div key={task.id} className={index < tasks.length - 1 ? 'border-b border-gray-200' : ''}>
            <TaskItem task={task} />
          </div>
        ))}
      </ul>
    </div>
  );
};

const TodayTasks = () => {
  const { getTodayTasks } = useContext(TaskContext);

  const todayTasks = getTodayTasks();
  const pendingToday = todayTasks.filter(task => !task.completed);
  const completedToday = todayTasks.filter(task => task.completed);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">My Today's Tasks</h2>

      {todayTasks.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No tasks scheduled for today.</p>
      ) : (
        <>
          <TaskSection title="Pending Tasks" tasks={pendingToday} />
          <TaskSection title="Completed Tasks" tasks={completedToday} />
        </>
      )}
    </div>
  );
};

export default TodayTasks;
