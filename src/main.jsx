import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeMain from './HomeMain';
import Home from './Home';
import AddTshirt from './AddTshirt';
import Updatetshirt from './assets/Updatetshirt';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain></HomeMain>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:4000/tshirts'),
      },
      {
        path:'/addtshirt',
        element:<AddTshirt></AddTshirt>
      },
      {
        path:'/updatetshirt/:id',
        element:<Updatetshirt></Updatetshirt>,
        loader:({params})=>fetch(`http://localhost:4000/tshirts/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
