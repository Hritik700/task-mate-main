import React, { useState, useContext } from 'react';
import { TaskContext } from '../store/TaskContext';

const EyeIcon = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const TaskItem = ({ task }) => {
  const { toggleTask } = useContext(TaskContext);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <li className="py-3 border-b border-gray-200 last:border-b-0">
        <div className="flex items-center">
            <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                onChange={() => toggleTask(task.id)}
                checked={task.completed}
            />
            <div className="ml-3 flex-grow">
                <p className={`text-sm font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>{task.title}</p>
                {task.completed ? (
                    <p className="text-xs text-gray-500">Completed: {task.completedDate || '-'}</p>
                ) : (
                    <p className="text-xs text-gray-500">Due: {task.taskDueDate || 'No due date'}</p>
                )}
            </div>
            {task.description && (
                <button onClick={() => setIsDescriptionVisible(!isDescriptionVisible)} className="p-1 text-gray-400 hover:text-blue-600 rounded-full">
                    <EyeIcon />
                </button>
            )}
        </div>
        {isDescriptionVisible && task.description && (
            <div className="pl-8 pt-2">
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">{task.description}</p>
            </div>
        )}
    </li>
  );
};

export default TaskItem;
