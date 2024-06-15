// src/TaskList.js
import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {task}
          <div>
            <button
              className="btn btn-secondary btn-sm me-2"
              onClick={() => editTask(index)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
