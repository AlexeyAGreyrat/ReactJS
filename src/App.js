import {useState, useEffect} from "react";
import Chat from "./Chat";
import './App.css';


function App() {
    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState(null);
    
    useEffect(()=> {
        let name;
        while(!name){
            name = prompt('Введите имя: ');
        }
            setAuthor(name);
    }, []);




  return <Chat messageList={messageList} setMessageList={setMessageList} author={author}/>

}

export default App;
