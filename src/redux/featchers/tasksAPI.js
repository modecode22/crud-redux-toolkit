import axios from "axios"

export const getTasks = () =>   axios.get("http://localhost:5000/tasks");

export const createTasks = (id) => { return axios.post(`http://localhost:5000/tasks/${id}`);}

export const deleteTasks = (id) => {
  return axios.delete(`http://localhost:5000/tasks/${id}`);
};

