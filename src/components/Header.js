import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { useState, useEffect } from 'react';
import { cacheResult } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState();
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

    const searchCache = useSelector(store => store.search)

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSearchResult(searchCache[searchQuery])
            } else {
                getSearchResult()
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
        // eslint-disable-next-line
    }, [searchQuery])


    const getSearchResult = async () => {
        // console.log("Api Call - " + searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSearchResult(json[1])
        dispatch(cacheResult({
            [searchQuery]: json[1]
        }))
    };


    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <>
            <div className="grid grid-flow-col p-2 px-4 shadow-lg">

                <div className="flex col-span-1 items-center">
                    <MenuIcon
                        onClick={() => toggleMenuHandler()}
                        className="cursor-pointer" />
                    <a href='/'>
                        <img
                            className='hidden md:block w-28 ml-4 cursor-pointer'
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="logo" />
                    </a>
                </div>

                <div className="col-span-10 flex justify-center">
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search'
                        className='w-1/2 border border-gray-400  py-2 px-4  rounded-l-full'
                        type="text"
                        onFocus={() => setShowSearchSuggestions(true)}
                        onBlur={() => setShowSearchSuggestions(false)}

                    />
                    <button className='border border-gray-400 py-2 px-4 rounded-r-full cursor-pointer'><SearchIcon /></button>
                </div>


                <div className="col-span-1 md:flex items-center justify-end hidden">
                    <NotificationsIcon className=' cursor-pointer' />
                    <PersonIcon className='mx-4 cursor-pointer' />
                </div>
            </div>

            {showSearchSuggestions && <div className='text-left left-[32%] fixed bg-white w-[37%] rounded-lg shadow-sm border border-gray-100'>
                <ul className='py-2'>{searchResult &&
                    searchResult.map(s => <li key={s} className='p-1 hover:bg-gray-100 font-bold'><SearchIcon /><span className='mx-2'>{s}</span></li>)
                }
                </ul>
            </div>}
        </>
    )
}

export default Header
