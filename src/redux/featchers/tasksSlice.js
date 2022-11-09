import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const fetchtasks = createAsyncThunk("tasks/fetchtasks",async(_ , thunkAPI)=>{
  const {rejectedWhithValue} = thunkAPI

  try{
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }catch(error){
    return rejectedWhithValue(error.message)
  }
});

const initialState={tasks:[], loading: false , error:null}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {
    //fetch tasks
    [fetchtasks.pending]: (state) => {
      state.loading = true
    },
    [fetchtasks.fulfilled]: () => {},
    [fetchtasks.rejected]: () => {},
    // create task
    // delete task
    // edit task
  },
});





export default tasksSlice.reducer

