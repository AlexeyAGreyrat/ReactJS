import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { setNameSurname } from "./profileSlice";

const useStyles = makeStyles((theme) => ({
  Container: {
    maxWidth: "1000px",
  },

  InputBox: {
    width: "100px",
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "150px",
    paddingTop: "50px",
  },

  InputText: {
    marginLeft: "150px",
    paddingTop: "10px",
  },

  InputButton: {
    marginLeft: "150px",
    marginTop: "20px",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const [inputName, setInputName] = useState("");

  const addInfo = () => {
    console.log(inputName);
  };

  const params = useParams();

  const storeName = useSelector((state) => state.profile.inputName);
  const dispatch = useDispatch();

  const updeteStore = () => {
    dispatch(
      setNameSurname({ inputName: inputName})
    );
  };

  return (
    <div className={classes.Container}>
      <div className={classes.InputBox}>
        <TextField 
          required
          id="standard-required"
          label="Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />         
      </div>

      <div>
        <Button
          className={classes.InputButton}
          variant="outlined"
          color="primary"
          onClick={updeteStore}
        >
          add info
        </Button>
      </div>
      <div className={classes.InputText}>
        <h4>Your name: {storeName} </h4>
      </div>
    </div>
  );
};

export default Profile;
