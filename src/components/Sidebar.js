import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    let toggleMenu = useSelector(store => store.app.isMenuOpen)

    if (!toggleMenu) return null;

    return (
        <div className={`px-4 sm:${toggleMenu = false} fixed bg-white h-screen lg:static`}>
            <div>
                <div className="pt-3">
                    <Link to='/'><h3 className="font-semibold py-1">Home</h3></Link>
                    <h3 className="font-semibold py-2">Shorts</h3>
                    <h3 className="font-semibold py-2">Subscription</h3>
                    <hr className="mt-2" />
                </div>
                <h1 className='font-bold pt-3'>You</h1>
                <ul className='leading-8'>
                    <li>Your Channel</li>
                    <li>History</li>
                    <li>Your Videos</li>
                    <li>Watch Later</li>
                </ul>
                <hr className="mt-2" />
            </div>
            <div>
                <h1 className='font-bold pt-3'>Subscriptions</h1>
                <ul className='leading-8'>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Live</li>
                    <li>Gaming</li>
                </ul>
                <hr className="mt-2" />

            </div>
        </div>
    )
}

export default Sidebar;
