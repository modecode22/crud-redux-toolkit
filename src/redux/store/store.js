import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../featchers/tasksSlice"


 const store =configureStore({
  reducer:{
    tasks:tasksReducer,
  }
})

export default store