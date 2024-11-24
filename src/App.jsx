import './App.css';
import Button from './ui/Button';
import Contents from './template/Contents';

import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('select color!!')
  const [style, setStyle] = useState()
  // const colors = {red:'red', blue:'blue', green:'green'}
  const [colors, setColors] = useState(['red', 'blue', 'green'])

  function onClickEvent(e) {
    setStyle({color:e.target.innerText})
    setMessage('changeColor')
  }
  
  return (
    <div className="App">
      <header></header>
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
  );
}

export default App;
