import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Faq from './../Pages/Faq/Faq';
import Signup from './../Pages/Login/Signup';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
            path: '/courses',
            element:<Courses></Courses>,
        },
        {
            path: '/faq',
            element:<Faq></Faq>,
        },
        {
            path: '/login',
            element:<Login></Login>,
        },
        {
            path: '/signup',
            element:<Signup></Signup>,
        },
        ]
    }
])