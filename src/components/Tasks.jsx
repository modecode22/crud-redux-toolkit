import React from 'react'
import Task from './Task'

const Tasks = () => {
  
  return (
    <div className="p-5 flex flex-col gap-5">
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default Tasks