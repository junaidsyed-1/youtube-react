import Sidebar from './Sidebar'
import Main from './Main'

const Body = () => {
    return (
        <div className="grid grid-cols-2">
            <Sidebar />
            <Main />
        </div>
    )
}

export default Body
