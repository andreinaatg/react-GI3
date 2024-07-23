import React, { useState } from 'react';

// TaskCard component defined within the same file
const TaskCard = ({ handleRemove, index }) => {
  return (
    <div className="taskCard">
      <input type="checkbox" />
      <input type="text" placeholder="Task..." />
      <button onClick={() => handleRemove(index)}>&#10005;</button>
    </div>
  );
};

export default function Todo() {
  const [taskList, setTaskList] = useState([]);

  const handleRemove = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const handleAddTask = () => {
    setTaskList([...taskList, {}]); // Adding an empty object to represent a new task
  };

  return (
    <div>
      <h1>Click + to add a task</h1>
      {taskList.map((task, index) => (
        <TaskCard key={index} handleRemove={handleRemove} index={index} />
      ))}
      <button id="addTaskBtn" onClick={handleAddTask}>+</button>
    </div>
  );
}
