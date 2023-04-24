import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./components/Main";
import Appartmentpage from './pages/Appartmentpage';
import About from './pages/About';
import Errorpage from './pages/Errorpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
          <App/>
      </>
    ),
    errorElement:<Errorpage/>
  },

  {
    path: "/flat",
    element: (
      <>
        <Main>
          <Navbar/>
          <Appartmentpage/>
        </Main>
        <Footer/>
      </>
    )
  },

  {
    path: "/about",
    element: (
      <>
      <Main>
        <Navbar/>
        <About/>
      </Main>
      <Footer/>
    </>
    )
  },
]);
    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
