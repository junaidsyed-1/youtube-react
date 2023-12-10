import React from 'react'
import WatchPage from './WatchPage'
import WatchPageSidePanel from './WatchPageSidePanel'

const WatchPageMain = () => {
    return (
        <div className='grid grid-cols-12 px-10 lg:px-20 w-full'>
            <WatchPage />
            <WatchPageSidePanel />
        </div>
    )
}

export default WatchPageMain
