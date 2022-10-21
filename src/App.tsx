import React, {useState} from 'react';
import './styles/App.css';
import Form from "./components/Form";
import {useDispatch} from "react-redux";
import {BrowserRouter} from "react-router-dom";

/*const [email,setEmail]=useState('')
const [password,setPassword]=useState('')*/


function App() {
    return (
        <BrowserRouter>
            <Form/>
        </BrowserRouter>
    );
}

export default App;
