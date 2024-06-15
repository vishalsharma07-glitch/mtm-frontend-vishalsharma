// src/App.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({ index: null, text: '' });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setIsEditing(true);
    setCurrentTask({ index, text: tasks[index] });
  };

  const saveTask = (text) => {
    const newTasks = tasks.slice();
    newTasks[currentTask.index] = text;
    setTasks(newTasks);
    setIsEditing(false);
    setCurrentTask({ index: null, text: '' });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} editTask={startEditing} deleteTask={deleteTask} />
      {isEditing && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Task</h5>
                <button type="button" className="btn-close" onClick={() => setIsEditing(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={currentTask.text}
                  onChange={(e) => setCurrentTask({ ...currentTask, text: e.target.value })}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={() => saveTask(currentTask.text)}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
