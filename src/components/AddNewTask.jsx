import React, { useState, useContext } from "react";
import { TaskContext } from "../store/TaskContext";

const Icon = ({ path, className = "h-5 w-5 text-gray-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const AddNewTask = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(title, description, dueDate, startTime, endTime);
    setTitle("");
    setDescription("");
    setDueDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Task</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
        <textarea placeholder="Description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg"></textarea>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </span>
            <input type="text" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg" />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </span>
            <input type="text" placeholder="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")} className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg" />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </span>
            <input type="text" placeholder="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")} className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg" />
          </div>
        </div>
        <button type="submit" className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg">Add Task</button>
      </form>
    </div>
  );
};

export default AddNewTask;
