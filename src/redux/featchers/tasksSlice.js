import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { createTasks, getTasks, deleteTasks } from "./tasksAPI";


export const fetchtasks = createAsyncThunk("tasks/fetchtasks",async()=>{
  const response = await getTasks();
  return  response.data
});

export const posttasks = createAsyncThunk(
  "tasks/posttasks",
   async (name) => {
    const response =await  createTasks(name);
    return  response.data;
  }
);

export const deletetasks = createAsyncThunk("tasks/deletetasks", async (name , thunkAPI) => {
  const {rejectedWithValue} = thunkAPI
  const response = await deleteTasks(name).catch((err) =>{
    return rejectedWithValue(err.message)
})
  return response.data;
});


const initialState={tasks:[], loading: false , error:null}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetch tasks
      .addCase(fetchtasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchtasks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchtasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // create task
      .addCase(posttasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(posttasks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(posttasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete task
      .addCase(deletetasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletetasks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = console.log(action)
      })
      .addCase(deletetasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // edit task
  },
});





export default tasksSlice.reducer

