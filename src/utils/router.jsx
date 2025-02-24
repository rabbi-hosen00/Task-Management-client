import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";

import AddTask from "../pages/AddTask"
import ManageTask from "../pages/ManageTask"



const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                
            },
           {
                path: "/login",
                element: <Login></Login>,
            }, 
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/add-task",
                element: <AddTask></AddTask>
            },
            {
                path: "/manage-task",
                element: <ManageTask></ManageTask>
            },
         
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
])

export default router;