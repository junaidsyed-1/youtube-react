import Comment from "./Comment";

const CommentLists = ({ comments }) => {
    return (comments && comments.map((comment, index) =>
        <div className="w-full lg:w-3/4" key={index}>
            <Comment data={comment} />
            <div className=" w-5/6 pl-8 border-l-black border-l">
                <CommentLists comments={comment.replies} />
            </div>
        </div>
    ))
};

export default CommentLists;
