import React, { useCallback  , memo } from 'react'
import { useDispatch, useSelector } from "react-redux";
 import { useEffect } from "react";
 import { fetchtasks , deletetasks } from "../redux/featchers/tasksSlice";
import Task from '../components/Task';
const TasksPage = () => {
    const dispatch = useDispatch();

     useEffect( () => {
        dispatch(fetchtasks());
     }, [dispatch]);
         const tasks = useSelector((state) => {
           return state.tasks.data;
         });

        const deleteTask = useCallback(
        (id) => {
          dispatch(deletetasks(id))
        },
      [dispatch],
        )
      
  return (
    <div>
      <div className="p-5 flex flex-col gap-5">
        {/* <Task id={tasks[0].id} title={tasks[0].title} key={tasks[0].id} />
        <Task id={tasks[1].id} title={tasks[1].title} key={tasks[1].id} />
        <Task id={tasks[2].id} title={tasks[2].title} key={tasks[2].id} /> */}

        {tasks ? (
          tasks.map((t) => (
            <Task
              key={t.id}
              id={t.id}
              deleteTask={deleteTask}
              title={t.title}
            />
          ))
        ) : (
          <div>no data her</div>
        )}
      </div>
    </div>
  );
};

export default memo(TasksPage)
