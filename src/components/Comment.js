import PersonIcon from '@mui/icons-material/Person';


const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
        <>
            <div className="static lg:flex mt-5 bg-slate-200 w-full shadow-md p-3 rounded-md">
                <div className="bg-red-200  rounded-full w-8 h-8 flex items-center justify-center"><PersonIcon color='error' fontSize="medium" /></div>
                <div className="ml-3">
                    <p className='font-bold'>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
};

export default Comment;
