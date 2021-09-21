import {useEffect, useState} from "react";
import App from "./App";
import Message from "./Message";

const Chat = ({messageList, setMessageList, author}) => {

    const [messageText,setMessageText] = useState('');


    useEffect(()=> {
        if(messageList.length && messageList[messageList.length-1].author !== 'Bot'){

            setTimeout(()=> {
                const botMessage = {author: 'Bot', messageText: 'Сообщение от Bot'};
                setMessageList([...messageList, botMessage]);
            }, 3000)
        }
    }, [messageList])

    const inputHandler = (e) => setMessageText(e.target.value);

    const updateMessageList = () => {
        const message = {author, messageText};
        setMessageList([...messageList, message]);
        setMessageText('');
    }

    const renderMessages = () => messageList.map((item, i) =>
       <Message {...item} key={i}/>

    )


    return(
        <div className="containerChat">
            <div className="chatField">
                {renderMessages()}
            </div>
            
            <div className="inputField">
                <input 
                type="text" value={messageText} onChange={inputHandler} className="message"
                onKeyDown ={({ key }) => {
                    if (key === "Enter") {
                      console.log("Enter");
                      updateMessageList();
                    }
                  }}
                />
                
                <button className="submitMessage" onClick={updateMessageList}>Send</button>
            </div>
        </div>
    )
}
export default Chat;

