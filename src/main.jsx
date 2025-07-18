import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tour from './pages/Tour.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter(
 createRoutesFromElements(
<Route path="/" element={<Layout />} >
<Route path = "" element={<Home />} />
<Route path="tour" element = {<Tour />} />
<Route path = "contact" element = {<Contact />} />
</Route>
 )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
