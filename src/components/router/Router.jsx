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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/addSpot')
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
                element: <AddSpot></AddSpot>
            },
            {
                path: '/viewDetails/:detailsId',
                element: <ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/addSpot/${params.detailsId}`)
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