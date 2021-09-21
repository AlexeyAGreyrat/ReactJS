import {useEffect, useState, useRef} from "react";
import Message from "./Message";
import {Button, TextField, List, ListItem, ListItemIcon, ListItemText, Divider  } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import {generateId} from "../utils";
import {ChatsList} from "./ChatsList";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    appWrapper: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    mainWrapper: {
        display: "flex",
        justifyContent: "center",
    },
    chatsListWrapper:{
        height: "650px",
        width: "100px",
        border: "2px solid darkorange",
    },

    containerForChat: {
        display: "flex",
        flexDirection: "column",
       alignItems: "center",
       
    
    },
    chatField:{
        border: "2px solid darkorange",
        width: "550px",
        height: "500px",
        overflow: "auto",
    },

    inputField : {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "550px",
        height: "150px",
        border: "2px solid darkorange",
    },
    
    message:{
        width: "70%",
    
    },
    MyButton: {
        backgroundColor: '#4caf50',
    },
  }));

const Chat = ({messageList, setMessageList, author}) => {
    const [messageText,setMessageText] = useState('');
    const inputRef = useRef(null);

    const classes = useStyles();

    useEffect(()=> {
        if(messageList.length && messageList[messageList.length-1].author !== 'Bot'){
            setTimeout(()=> {
                const botMessage = {author: 'Bot', messageText: 'Сообщение от Bot', id: generateId()};
                setMessageList([...messageList, botMessage]);
            }, 1500)
        }
    }, [messageList, setMessageList])

    useEffect(() => {
        document.addEventListener('keydown', () => {

        })
    },[])

    const inputHandler = (e) => setMessageText(e.target.value);

    const updateMessageList = () => {
        if(!messageText) {
            return
        }
        const message = {author, messageText, id: generateId()};
        setMessageList([...messageList, message]);
        setMessageText('');
        inputRef.current.focus();
    }

    const renderMessages = () => messageList.map(item => <Message {...item} key={item.id}/>);

    return(
        <div className={classes.mainWrapper}>
            <div className={classes.chatsListWrapper}>
                <ChatsList />
            </div>
        <div className={classes.containerForChat}>
            <div className={classes.chatField}>
                {renderMessages()}
            </div>
            <div className={classes.inputField}>
                <TextField
                    inputRef={inputRef}
                    autoFocus
                    label="Введите сообщение"
                    className={classes.message}
                    value={messageText}
                    onChange={inputHandler}
                    onKeyDown={({ key }) => {
                        if (key === "Enter") {
                            console.log("Enter");
                            updateMessageList();
                        }
                    }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.submitMessage}
                    onClick={updateMessageList}>Отправить
                </Button>
            </div>
        </div>

        </div>
    )
}
export default Chat;