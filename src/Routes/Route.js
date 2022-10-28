import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CardDetail from "../Pages/Shared/CardDetail";
import CheckOut from "../Pages/Shared/CheckOut";
import Faq from './../Pages/Faq/Faq';
import Signup from './../Pages/Login/Signup';
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://different-six.vercel.app/allProducts`)
            },
            {
                path: '/product/:id',
                element: <CardDetail></CardDetail>,
                loader: ({ params }) => fetch(`https://different-six.vercel.app/product/${params.id}`),
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://different-six.vercel.app/product/${params.id}`),
            },
        ]
    }
])