import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        getVideos()
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideo(json?.items);
        console.log(json.items);
    }

    return (
        <div className="grid mt-7 md:flex lg:flex flex-wrap mx-auto gap-4">
            {video.map(videos => <VideoCard key={videos.id} info={videos} />)}
        </div>
    )
}

export default VideoContainer;
