import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setUsername,setCheckbox} from "../store";
import {TextField,} from '@material-ui/core';
const User = () => {

    const dispatch = useDispatch();
    const profile = useSelector((state)=> state.profile);

    console.log(profile)
    return <div>
        <h3>{profile.username}</h3>
        Username: <TextField type="text" onChange ={(e) => {dispatch(setUsername(e.target.value))} }/> <br/>
        save: <input type="checkbox" onChange={ (e)=> dispatch(setCheckbox(e.target.checked)) } />
    </div>
}

export default User;