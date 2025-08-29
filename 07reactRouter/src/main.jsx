import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import Root from './Root.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub , {GitHubInfoLoader} from './components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Root/>,
//     children : [
//     {
//      path:"",
//      element : <Home/>
//     },
//     {
//      path: "about",
//      element : <About/>
//     },
//     {
//      path: "contact",
//      element : <Contact/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Root/>}>
      <Route path='' element = {<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      <Route path='/user/:userId' element = {<User/>}></Route>
      <Route 
      loader = {GitHubInfoLoader} // optimisation for api fetch
      path='/github' 
      element = {<GitHub/>}>
      </Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
