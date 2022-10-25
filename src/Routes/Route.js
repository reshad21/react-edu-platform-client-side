import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Faq from './../Pages/Faq/Faq';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/home',
            element:<Home></Home>,
        },
        {
            path: '/blog',
            element:<Blog></Blog>,
        },
        {
            path: '/about',
            element:<About></About>,
        },
        {
            path: '/faq',
            element:<Faq></Faq>,
        },
        {
            path: '/login',
            element:<login></login>,
        },
        ]
    }
])