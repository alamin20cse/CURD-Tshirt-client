import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const HomeMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default HomeMain;