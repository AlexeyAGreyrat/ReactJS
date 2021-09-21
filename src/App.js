import {useState, useEffect} from "react";
import Chat from "./Chat";




function App() {
    const initUserChats = [
        {id: 6546, title: 'chat1', messageList: []},
        {id: 66586, title: 'chat2', messageList: []}
    ]

    const [currentChatId, setCurrentChatId] = useState(6546);
    const [userChats, setUserChats] = useState(initUserChats);

    const updateMessageList = (newMessageList) => {
        const updatedUserChats = [...userChats];
        const foundedChatIndex = updatedUserChats.findIndex(item => item.id === currentChatId);
        updatedUserChats[foundedChatIndex].messageList = newMessageList;
        setUserChats(updatedUserChats)
    }

   const getCurrentUserChat = () => userChats.find(item => currentChatId === item.id);

    const changeChat = () => {

    }

    const [author, setAuthor] = useState(null);
    useEffect(()=> {
        let name;
        while(!name){
            name = 'Author';
        }
            setAuthor(name);
    }, []);

  return(

      <Chat messageList={getCurrentUserChat().messageList} setMessageList={updateMessageList} author={author}/>


  )


}

export default App;
