
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=" + API_KEY

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS_API = "https://jsonplaceholder.typicode.com/comments";

export const LIVE_COMMENT = 25;