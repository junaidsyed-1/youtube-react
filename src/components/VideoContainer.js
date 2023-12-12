import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        getVideos()
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideo(json?.items);
    }

    return (
        <div className="grid mt-7 md:flex lg:flex flex-wrap mx-auto gap-5">
            {video.map(videos => <Link to={'/watch?v=' + videos.id} key={videos.id}> <VideoCard info={videos} /></Link>)}
        </div>
    )
}

export default VideoContainer;
