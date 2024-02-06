import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {

    const [params] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
        // eslint-disable-next-line
    }, [])


    return (
        <div className="static lg:flex">
            <div>
                <iframe
                    className="w-72 h-96 lg:w-[1200px] lg:h-[700px] mb-3 mx-auto"
                    width="1200"
                    height="700"
                    src={"https://www.youtube.com/embed/" + params.get('v')}
                    title="1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
            <LiveChat />
        </div>
    )
}

export default WatchPage;
