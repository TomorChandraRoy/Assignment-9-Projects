import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FooterPage from '../Components/Footer/FooterPage';


const MainLayOut = () => {
    return (
        <div className="max-w-[1300px] mx-auto mt-5 font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            <div className="mt-10 ">
            <FooterPage></FooterPage>
            </div>
        </div>
    );
};

export default MainLayOut;