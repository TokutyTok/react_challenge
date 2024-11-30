import '../App.css';
import Contents from '../template/Contents';
import { Link } from "react-router-dom";

import { useState } from 'react';

export default function ValueDisplayEntered() {
    const [message, setMessage] = useState('')

    function valueDisplay(e){
        setMessage(e.target.value)
    }

    return (
        <>
            <head>
                <title>ValueDisplayEntered</title>
            </head>
            <body className="App">
                <header>
                <nav className="App-liststyle-none">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </nav>
                </header>
                <div className="App-header">
                    <input value={message} onChange={valueDisplay}/>
                    <Contents
                        message={message}
                    />
                </div>
                <footer></footer>
            </body>
        </>
    );
}