import { Outlet } from "react-router-dom";
import Footer from "../components/pages/Shared/Footer/Footer";
import NavBar from "../components/pages/Shared/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;