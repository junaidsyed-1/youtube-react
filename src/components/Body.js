import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {


    return (
        <div className="grid grid-cols-10 pt-3">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body
