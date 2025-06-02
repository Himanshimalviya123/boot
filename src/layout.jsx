import { Outlet } from "react-router-dom";
import Topnav from "./components/topnav";
import Footer from "./components/footer";

const Layout=()=>{
    return(
        <>
        <Topnav/>
    <Outlet/>
    <Footer/>
        </>
    )
}
export default Layout;