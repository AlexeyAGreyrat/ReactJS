import './App.css';
import React, { useState } from "react";
import Messager from "./Messager";

function App() {
  const [inputText, setInputText] = useState("");
  
  return (
    <div>
        <input className="input1"
        value={inputText}

        onChange={(e) => setInputText(e.target.value)}
        />


      <Messager  textToShow={inputText} />

    </div>
  );
}

export default App;
