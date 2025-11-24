import React, { useState, useContext } from 'react';
import { TaskContext } from '../store/TaskContext';
import TaskList from '../components/TaskList';
import AddNewTaskModal from '../components/AddNewTaskModal';

const TasksPage = () => {
  const { getTasksByFilter } = useContext(TaskContext);
  const [filter, setFilter] = useState('All'); // 'All', 'Pending', 'Completed', 'Due Today'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTasks = getTasksByFilter(filter);
  const filterButtons = ['All', 'Pending', 'Completed', 'Due Today'];

  return (
    <>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">All Tasks</h1>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add New Task
            </button>
          </div>
          
          <div className="flex space-x-2 border-b border-gray-200 mb-4">
            {filterButtons.map(btn => (
              <button 
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-4 py-2 text-sm font-semibold rounded-t-lg ${filter === btn ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {btn}
              </button>
            ))}
          </div>

          <TaskList tasks={filteredTasks} />
        </div>
      </div>
      {isModalOpen && <AddNewTaskModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default TasksPage;
