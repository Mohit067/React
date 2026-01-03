import React from 'react'
import './App.css'
import Navbar from './RouterV7/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './RouterV7/Home'
import About from './RouterV7/About'
import Help from './RouterV7/Help'
import Contact from './RouterV7/Contact'
import ContactDetails from './RouterV7/ContactDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />,
        loader: () => {
          return fetch('https://jsonplaceholder.typicode.com/users');
        }
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: 'user',
            element: <ContactDetails />
          }
        ]
      }
    ]
  }

])
function App() {

  return (
    <div>
      {/* <Navbar /> */}
      
      <RouterProvider router={router} />

    </div>
  )
}

export default App