import '../App.css';
import Button from '../ui/Button';
import Contents from '../template/Contents';
import { Link } from "react-router-dom";

import { useState } from 'react';

export default function ValueDisplayEntered() {
    const [count, setCount] = useState(0)

    function onClickEvent(e){
        setCount(count + 1)
    }

    return (
        <>
            <head>
                <title>Counter</title>
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
                    <Button
                    name={"countUp"}
                    onClickEvent={onClickEvent}
                    />
                    <Contents
                        message={count}
                    />
                </div>
                <footer></footer>
            </body>
        </>
    );
}