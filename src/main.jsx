import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './LayOut/MainLayOut';
import ErrorPage from './Components/Error/ErrorPage';
import Banner from './Components/Banner/Banner';
import LearnMore from './Components/LearnMorePage/LearnMore';
import LogIn from './Components/LogInPage/LogIn';
import SignUp from './Components/SignUpPage/SignUp';
import AuthProvider from './ContextApi/AuthProvider';
import DetailsPage from './Components/Details/DetailsPage';
import PrivecteRoute from './Components/PrivecteRoute/PrivecteRoute';
import About from './Components/AboutPage/About';
import Contect from './Components/ContectPage/Contect';
import FeaturedEvents from './Components/FeaturedPage/FeaturedEvents';
import GamesPage from './Components/GamesPage/GamesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>,
        loader: () => fetch('/services.json')
      },

      {
        path:"/serivesData1/:id",
        element: <PrivecteRoute><DetailsPage></DetailsPage></PrivecteRoute>,
        loader: () => fetch('/services.json')

      },

      {
        path:'/Learn More',
        element:<LearnMore></LearnMore>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/sigup',
        element:<SignUp></SignUp>
      },
      {
        path:'/games',
        element:<PrivecteRoute><GamesPage></GamesPage></PrivecteRoute>,
        loader: () =>fetch('/games.json')
        
      },
      {
        path:'/event',
        element:<PrivecteRoute><FeaturedEvents></FeaturedEvents></PrivecteRoute> ,
        loader: () =>fetch('/events.json')
       
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contect></Contect>
       
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
