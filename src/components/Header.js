import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className="grid grid-flow-col p-5 shadow-lg">

            <div className="flex col-span-1 items-center">
                <MenuIcon className="cursor-pointer" />
                <img
                    className='hidden md:block w-28 ml-4'
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="logo" />
            </div>

            <div className="col-span-10 flex items-center justify-center ">
                <input className='w-1/2 border border-gray-400  py-2 px-4  rounded-l-full' type="text" />
                <div className='border border-gray-400 py-2 px-4 rounded-r-full cursor-pointer'><SearchIcon /></div>
            </div>

            <div className="col-span-1 md:flex items-center justify-end hidden">
                <NotificationsIcon className=' cursor-pointer' />
                <PersonIcon className='mx-4 cursor-pointer' />
            </div>
        </div>
    )
}

export default Header
