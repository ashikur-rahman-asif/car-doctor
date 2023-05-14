import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/pages/Home/Home/Home";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
          },
          {
            path: '/login',
            element:<Login/>
          },
          {
            path: '/signup',
            element: <SignUp/>
          }
      ]
    },
  ]);

  export default router