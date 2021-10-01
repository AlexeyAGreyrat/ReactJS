import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "2px solid black",
    overflow: "auto",
    scrollBehavior: "smooth",
  },
  pow:{
    paddingBottom: "10px",
  },
}));

const MessageListComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.messageList}>
      {props.messagesArray
        .filter((x) => x.chatId === props.propChatId)
        .map((message, i) => (
          <div key={i}>
            {message.time} {message.user}:<div className ={classes.pow}/> {message.msg}
          </div>
        ))}
    </div>
  );
};

export default MessageListComponent;
