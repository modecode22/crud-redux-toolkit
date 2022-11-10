import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './index.css'
import AddTaskPage from './pages/AddTaskPage'
import TasksPage from './pages/TasksPage'
import EditPage from './pages/EditPage'
import ErrorPage from './pages/ErrorPage'
import DetailsPage from './pages/DetailsPage'
import { Provider } from 'react-redux'
import store from './redux/store/store'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TasksPage /> },
      { path: "post/add", element: <AddTaskPage /> },
      { path: "post/:id/edit", element: <EditPage /> },
      { path: "post/:id", element: <DetailsPage /> , loader: ({params})=>{
        if(isNaN(params.id)){
          throw new Response(
            { statusText: "please try other thing" },
            { status: 400 }
          );
        }
      } },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
