import React from 'react'
import WatchPage from './WatchPage'
import CommentsContainer from './CommentsContainer'

const WatchPageMain = () => {
    return (
        <div className='pl-5 w-full'>
            <WatchPage />
            <CommentsContainer />
        </div>
    )
}

export default WatchPageMain
