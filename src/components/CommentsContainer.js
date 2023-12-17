import CommentLists from "./CommentLists";

const commentsData = [
    {
        name: "Junaid Syed",
        text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
        replies: [
            {
                name: "Junaid Syed",
                text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
                replies: []
            },
        ]
    },
    {
        name: "Junaid Syed",
        text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
        replies: [{
            name: "Junaid Syed",
            text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
            replies: [{
                name: "Junaid Syed",
                text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
                replies: [{
                    name: "Junaid Syed",
                    text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
                    replies: []
                },]
            },]
        },]
    },
    {
        name: "Junaid Syed",
        text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
        replies: []
    },
    {
        name: "Junaid Syed",
        text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
        replies: [{
            name: "Junaid Syed",
            text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
            replies: []
        },]
    },
    {
        name: "Junaid Syed",
        text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
        replies: [{
            name: "Junaid Syed",
            text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
            replies: [{
                name: "Junaid Syed",
                text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
                replies: [{
                    name: "Junaid Syed",
                    text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
                    replies: [{
                        name: "Junaid Syed",
                        text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
                        replies: []
                    },]
                },]
            },]
        },]
    },
    {
        name: "Junaid Syed",
        text: "Llorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnamo",
        replies: []
    }
]


const CommentsContainer = () => {
    return (
        <>
            <div className="text-2xl font-bold pt-3 box-border">
                Comments :
            </div>
            {/* <Comment data={commentsData[0]} /> */}
            <CommentLists comments={commentsData} />
        </>
    )
}

export default CommentsContainer;
