import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

    const toggleMenu = useSelector(store => store.app.isMenuOpen)

    if (!toggleMenu) return null;

    return (
        <div className="w-48">
            <div>
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

export default Sidebar
