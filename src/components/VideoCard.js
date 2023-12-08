
const VideoCard = ({ info }) => {
    if (info === undefined) return "Wait"

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    function formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'm';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'k';
        }
        else if (views >= 1000000000) {
            return (views / 1000000000).toFixed(1) + 'b'
        } else {
            return views.toString();
        }
    }

    return (
        <div className="w-72 mb-8">
            <img alt="video" className="rounded-lg" src={thumbnails.medium.url} />
            <h2 className="px-2 font-bold">{title.length >= 51 ? title.slice(0, 51) + '...' : title}</h2>
            <h4 className="px-2 text-sm">{channelTitle}</h4>
            <span className="px-2 text-sm">{formatViews(statistics.viewCount)} views</span>

        </div>
    )
};

export default VideoCard;