import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/coffe')
      },
      {
        path: '/addcoffe',
        element: <AddCoffee />
      },
      {
        path: '/updatecoffe/:id',
        element: <UpdateCoffe />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffe/${params.id}`)
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
