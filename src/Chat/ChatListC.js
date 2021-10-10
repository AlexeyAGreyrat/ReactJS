import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Input } from "@material-ui/core";
import { useParams } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Container: {
    maxWidth: "1000px",
  },
  Container1: {
    border: "2px solid black",
    overflow: "auto",
    scrollBehavior: "smooth",
  },

  chatButton: {
    width: "30px",
    marginLeft: "15px",
  },

  Label: {
    fontSize: "25px",
    marginRight: "20px",
    marginLeft: "10px",
  },
  chatLink: {
    textDecoration: "none",
    color: "white",
  },
  Input: {
    outline: "none",
    fontSize: "18px",
    height: "34px",
    width: "220px",
    color: "black",
    margin: "10px 10px",
    paddingLeft: "20px",
  },
  adelButton: {
    width: "600px",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
  },

  chatButtons: {
    width: "400px",
    display: "flex",

  },
}));

const ChatListComponent = (props) => {
  const classes = useStyles();
  const [chatsArray, setChatArray] = useState([
    { name: "1", id: "1" },
    { name: "2", id: "2" },
    { name: "3", id: "3" },
    { name: "4", id: "4" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");

  const addChat = () => {
    setChatArray((prev) => [
      ...prev,
      {
        name: inputName,
        id: inputId,
      },
    ]);
    setInputName("");
    setInputId("");
  };

  const deleteChat = () => {
    setChatArray((prev) => [
      ...prev.filter((x) => x.name != inputName && x.id != inputId),
    ]);
    setInputName("");
    setInputId("");
  };
  const params = useParams();

  if (
    chatsArray.map((x) => x.id).includes(params.chatId) ||
    params.chatId == "choosechat"
  ) {
    return (
      <div className={classes.Container}>
        <div>
          <label className={classes.Label}>Name chat</label>
          <input
            className={classes.Input}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <label className={classes.Label}>ID chat</label>
          <input
            className={classes.Input}
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          {/* <div className={classes.adelButton}> */}
          <p/>
          <Button
            className={classes.chatButton}
            variant="defalt"
            color="defalt"
            onClick={addChat}
          >
            add
          </Button>
          <Button
            className={classes.chatButton}
            variant="defalt"
            color="defalt"
            onClick={deleteChat}
          >
            delete
          </Button>
          {/* </div> */}
        </div>
        <div className ={classes.Container1}>
        <List
          className={classes.chatButtons}
          component="nav"
          aria-label="main mailbox folders"
        >
          {chatsArray.map((e) => (
            <ListItem key={e.id}>
              {" "}
              <Button variant="contained" color="primary">
                <Link className={classes.chatLink} to={"/chat/" + e.id}>
                  Chat {e.id}
                </Link>
                
              </Button>
              
            </ListItem>
          ))}
        </List>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/chat/choosechat" />;
  }
};

export default ChatListComponent;
