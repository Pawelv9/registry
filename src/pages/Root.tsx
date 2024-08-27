import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

function Root() {
    return (
        <div className='container mx-auto px-20'>
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;