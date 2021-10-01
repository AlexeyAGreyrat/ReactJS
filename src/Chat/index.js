import React, { useState, useEffect } from "react";
import ChatListComponent from "./ChatListC";
import InputWrapperComponent from "./InputMessagesC";
import MessageListComponent from "./MessageListC";
import { AddMessage } from "./chatModel";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  Container: {
    maxWidth: "1140px",
    margin: "0 auto",
  },
  hidden: {
    display: "none",
  },

  chatsStyle: {
    backgroundColor: "#0ABAB5",
    display: "flex",
    justifyContent: "center",
    fontSize: "45px",
    color: "white",
  },
  appWrapper: {
    maxWidth: "1140px",
    margin: "0 auto",
    display: "flex",
  },

  ChatListComponent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "4000px",
    height: "700px",
    border: "11px solid black",
    display: "flex",
    flexDirection: "column",
    fontSize: "25px",
    color: "#black",
  },
  UserName: {
    color: "blue",
  },
  UserSurname: {
    color: "blue",
  },
  chChat: {
    paddingTop: "55px",
    color: "red",
  },
}));

function Chat() {
  const dispatch = useDispatch();
  const [inputMessage, setInputMessage] = useState({
    time: "",
    msg: "",
    user: "",
    chatId: "",
  });

  const MessagesArray = useSelector((state) => state.chat.MessagesArray);

  const getTime = () => {
    var today = new Date();
    var set_time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return set_time;
  };

  const params = useParams();
  const classes = useStyles();
  const onSendMessageThunk = () => (dispatch, getState) => {
    dispatch(
      AddMessage({
        time: getTime(),
        msg: inputMessage.msg,
        user: "User",
        chatId: params.chatId,
      })
    );
    setTimeout(
      () =>
        dispatch(
          AddMessage({
            time: getTime(),
            msg: "Message bot",
            user: "BOT",
            chatId: params.chatId,
          })
        ),
      1500
    );
    setInputMessage({ timeStamp: "", msg: "", chatId: "" });
  };

  const callThunk = () => {
    dispatch(onSendMessageThunk());
  };

  const storeName = useSelector((state) => state.profile.inputName);
  const storeSureName = useSelector((state) => state.profile.inputSurname);

  return (
    <div className={classes.Container}>

      <span className={classes.ChatListComponent}>
        {" "}
        <ChatListComponent />
      </span>

      <div className={params.chatId === "choosechat" ? classes.hidden : ""}>
        <div className={classes.appWrapper}>
          <div className={classes.componentWrapper}>
            <MessageListComponent
              messagesArray={MessagesArray}
              propChatId={params.chatId}
            />
            <InputWrapperComponent
              onClick={callThunk}
              value={inputMessage}
              onChange={(e) =>
                setInputMessage((prev) => ({
                  ...prev,
                  msg: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
