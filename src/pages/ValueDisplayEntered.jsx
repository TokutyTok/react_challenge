import '../App.css';
import Contents from '../template/Contents';
import Input from '../ui/Input';
import { Link } from "react-router-dom";

import { useState } from 'react';

export default function ValueDisplayEntered() {
    const [message, setMessage] = useState('')

    function valueDisplay(e){
        setMessage(e.target.value)
    }

    return (
        <>
            <div className="App">
                <header>
                <nav className="App-liststyle-none">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </nav>
                </header>
                <div className="App-header">
                    <Input 
                        value={message}
                        onChangeEvent={valueDisplay}
                    />
                    <Contents
                        message={message}
                    />
                </div>
                <footer></footer>
            </div>
        </>
    );
}