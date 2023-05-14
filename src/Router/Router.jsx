import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/pages/Home/Home/Home";
import Login from "../components/pages/Login/Login";

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
          }
      ]
    },
  ]);

  export default router