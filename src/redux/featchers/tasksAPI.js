import axios from "axios"

export const getTasks = () => axios.get("http://localhost:5000/tasks");

export const createTasks = (name) => {return axios.post("http://localhost:5000/tasks" , {name});}
