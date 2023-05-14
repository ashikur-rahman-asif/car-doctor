import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/pages/Home/Home/Home";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
import CheckOut from "../components/pages/checkOut/checkOut";

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
          },
          {
            path: 'checkout/:id',
            element: <CheckOut />,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
          }
      ]
    },
  ]);

  export default router