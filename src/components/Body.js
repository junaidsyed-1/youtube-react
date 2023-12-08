import Sidebar from './Sidebar'
import Main from './Main'

const Body = () => {
    return (
        <div className="grid grid-cols-10 pt-3">
            <Sidebar />
            <Main />
        </div>
    )
}

export default Body
