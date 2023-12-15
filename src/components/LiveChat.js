import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateRandomComments, generateRandomName } from "../utils/helper";

const LiveChat = () => {
    const [liveChatMessage, setLiveChatMessage] = useState("")
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
        <div className="box-border w-full">
            <div className="py-1 border bg-gray-100 mx-4 rounded-t-lg">
                <h1 className="text-center text-lg font-bold block">Live Chat</h1>
            </div>
            <div className="border bg-gray-100 h-[620px] mx-4 rounded-b-lg overflow-y-scroll flex flex-col-reverse">

                <hr className="border border-black" />
                {liveMessages.map((m, i) => <ChatMessage key={i} name={m.name} message={m.message} />)}
            </div>
            <div className="mx-4 my-3 ">
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        dispatch(addMessage({
                            name: "Junaid Syed✔",
                            message: liveChatMessage
                        }));
                        setLiveChatMessage("")
                    }}
                    className="flex justify-between">
                    <input
                        value={liveChatMessage}
                        onChange={(e) => {
                            setLiveChatMessage(e.target.value)
                        }}
                        type="text" className="border border-black py-1 px-4 rounded-lg w-4/5" />
                    <button className="bg-[#FF0000] text-white px-3 py-1 rounded-lg mx-2">Send</button>
                </form>
            </div>
        </div>
    )
}

export default LiveChat