import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import Github from './components/github/github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },{
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> 
        <Route path="about" element={<About/>} />
        <Route path="" element={<Home/>} />
        <Route path="contact" element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route
        // loader={()=>{}}
        path='github' element={<Github />} />

        
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
