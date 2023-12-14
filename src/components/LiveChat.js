import { useEffect } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateRandomComments, generateRandomName } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const liveMessages = useSelector(store => store.chat.message)

    useEffect(() => {
        // API Polling
        const timer = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomComments()
            }))
        }, 1200)

        return () => {
            clearInterval(timer)
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="border border-black w-full bg-gray-100 h-[700px] mx-4 rounded-lg overflow-y-scroll flex flex-col-reverse">
            <div className="py-1">
                <h1 className="text-center text-lg font-bold block">Live Chat</h1>
            </div>
            <hr className="border border-black" />
            {liveMessages.map((m, i) => <ChatMessage key={i} name={m.name} message={m.message} />)}
        </div>
    )
}

export default LiveChat