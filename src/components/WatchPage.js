import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {

    const [params] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
        // eslint-disable-next-line
    }, [])


    return (

        <iframe
            className="w-72 h-96 lg:w-[1200px] lg:h-[700px]"
            width="1200"
            height="700"
            src={"https://www.youtube.com/embed/" + params.get('v')}
            title="1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
    )
}

export default WatchPage
