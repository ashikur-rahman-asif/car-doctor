import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/pages/Home/Home/Home";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";
// import CheckOut from "../components/pages/checkOut/checkOut";
import BookService from "../components/pages/BookService/BookService";
import Bookings from "../components/pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
            path: 'book/:id',
            element: <BookService />,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path: 'bookings',
            element: <PrivateRoute>
              <Bookings />
            </PrivateRoute>,
       
          }
      ]
    },
  ]);

  export default router