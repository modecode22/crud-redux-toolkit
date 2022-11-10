import React from 'react'
import { useDispatch, useSelector } from "react-redux";
 import { useEffect } from "react";
 import { fetchtasks } from "../redux/featchers/tasksSlice";
import Task from '../components/Task';
const TasksPage = () => {
    const dispatch = useDispatch();
    const tasks  = useSelector((state) => state.tasks.data);
     useEffect(() => {
       dispatch(fetchtasks());
     }, [dispatch]);
    console.log(tasks);
  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        <Task id={tasks[0].id} title={tasks[0].title} key={tasks[0].id} />

        {/* {tasks.map((t) => (
          <Task key={t.id} id={t.id} title={t.title} />
        ))} */}
      </div>
    </div>
  );
};

export default TasksPage
