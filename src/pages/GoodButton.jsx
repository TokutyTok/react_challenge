import '../App.css';
import Contents from '../template/Contents';
import { Link } from "react-router-dom";
import Button from '../ui/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { useState } from 'react';

export default function GoodButton() {
    const [count, setCount] = useState(0)    
    function addGood(){
        setCount(count + 1)
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
                    <Button
                        name={<FontAwesomeIcon style={{ color: 'red' }} icon={faHeart} />}
                        onClickEvent={addGood}
                    />
                    <Contents
                        message={count}
                    />
                </div>
                <footer></footer>
            </div>
        </>
    );
}