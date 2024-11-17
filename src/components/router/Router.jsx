import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/home/Home';
import Main from '../../layout/main/Main';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import AddSpot from '../pages/addSpot/AddSpot';
import ViewDetails from '../pages/viewDetails/ViewDetails';
import AllTouristSpot from '../pages/allTouristSpot/AllTouristSpot';
import MyList from '../pages/myList/MyList';
import PrivateRouter from './privateRouter/PrivateRouter';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/addSpot')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addSpot',
                element: <PrivateRouter><AddSpot></AddSpot></PrivateRouter>
            },
            {
                path: '/viewDetails/:detailsId',
                element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/addSpot/${params.detailsId}`)
            },
            {
                path: '/allSpot',
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('http://localhost:5000/addSpot')
            },
            {
                path: '/myList',
                element: <MyList></MyList>,
                loader: () => fetch('http://localhost:5000/user')
            }
        ]
    },
]);
const Router = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};

export default Router;