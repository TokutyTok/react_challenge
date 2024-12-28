import '../App.css';
import Contents from '../template/Contents';
import { Link } from "react-router-dom";

import { useState } from 'react';

export default function ShowList() {
    const [message, setMessage] = useState('message')
    const colorCodes = {black:'#000000', white:'#ffffff', red:'#ff0000', green:'#00ff00', blue:'#0000ff'}
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
                    <Contents
                        list={colorCodes}
                    />
                </div>
                <footer></footer>
            </div>
        </>
    );
}