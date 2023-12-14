import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center p-3 shadow-sm">
            <AccountCircleIcon />
            <span className="text-sm text-slate-700 ml-1 mr-2">{name} </span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage
