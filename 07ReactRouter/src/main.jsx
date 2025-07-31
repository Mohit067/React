import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { User } from './components/User/User.jsx'
import { Github, GithubLoaderInfo } from './components/Github/Github.jsx'

// const router = createBrowserRouter([{
//   path:"/",
//   element: <App />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "About",
//       element: <About />
//     },
//     {
//       path: "Contact",
//       element: <Contact />
//     },
//     {
//       path: "Home",
//       element: <Home />
//     },
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='' element={<Home />}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='User/:userid' element={<User/>}/>
    <Route 
      loader={GithubLoaderInfo}
      path='Github' 
      element={<Github/>}
    />
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
