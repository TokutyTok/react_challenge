import '../App.css';
import Button from '../ui/Button';
import Contents from '../template/Contents';
import { Link } from "react-router-dom";

import { useState } from 'react';

export default function ButtonClickChangeColor() {
  const [message, setMessage] = useState('select color!!')
  const [style, setStyle] = useState()
  const [colors, setColors] = useState(['red', 'blue', 'green'])

  function onClickEvent(e) {
    setStyle({color:e.target.innerText})
    setMessage('changeColor')
  }
  
  return (
    <>
      <title>ButtonClickChangeColor</title>
      <div className="App">
        <header>
          <nav className="App-liststyle-none">
              <li>
                <Link to="/">Home</Link>
              </li>
          </nav>
        </header>
        <div className="App-header">
          <div className="App-button-flex">
            {colors.map( color => {
              return(
                <Button
                  name={color}
                  onClickEvent={onClickEvent}
                />
              )
            })}
          </div>
            <Contents
              message={message}
              style={style}
            />
        </div>
        <footer></footer>
      </div>
    </>
    
  );
}
