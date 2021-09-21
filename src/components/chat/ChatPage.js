import {useState, useEffect} from "react";
import Chat from "./Chat";
import {useLocation, Redirect} from "react-router-dom";


function ChatPage() {
    const initUserChats = [
        {id: 1, title: 'chat1', messageList: []},
        {id: 2, title: 'chat2', messageList: []},
        {id: 3, title: 'chat3', messageList: []},
        {id: 4, title: 'chat4', messageList: []}
    ]

    const [currentChatId, setCurrentChatId] = useState(6546);
    const [userChats, setUserChats] = useState(initUserChats);
    let location = useLocation();

    useEffect(() => {
        const chatId = location.pathname.split('/')
        setCurrentChatId(+chatId[chatId.length-1])
    })



    const updateMessageList = (newMessageList) => {
        const updatedUserChats = [...userChats];
        const foundedChatIndex = updatedUserChats.findIndex(item => item.id === currentChatId);
        updatedUserChats[foundedChatIndex].messageList = newMessageList;
        setUserChats(updatedUserChats);
    }

   const getCurrentUserChat = () => userChats.find(item => currentChatId === item.id);

    const [author, setAuthor] = useState(null);
    useEffect(()=> {
        let name;
        while(!name){
            name = 'Zero';
        }
            setAuthor(name);
    }, []);
if(getCurrentUserChat()){
    return(
        <Chat messageList={getCurrentUserChat().messageList} setMessageList={updateMessageList} author={author}/>
    )
} else {
  return  <Redirect to="/chat/1" />
}

}

export default ChatPage;


