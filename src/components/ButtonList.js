import Button from "./Button";


const ButtonList = () => {

    const list = ["All", "Gaming", "Mixes", "Movies", "Music", "News", "Motivation", "Live", "Sports", "Computers", "Watched", "New To You", "Cricket", "Drama", "Favourites", "Featured", "Volleybvall", "Videos", "Liked"]

    return (
        <div className="flex overflow-auto">
            {list.map(list => <Button key={list} name={list} />)}
        </div>
    )
}

export default ButtonList;