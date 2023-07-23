import React from 'react'
import "./App.css";
import Second from './pages/Second';
import First from './pages/First';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path:'/' ,element:<First/>,
  },
 {
  path:'/second', element:<Second />
 }
]);
const App = () => {

  return (
    
    <RouterProvider router={router} />
   
  )
}

export default App