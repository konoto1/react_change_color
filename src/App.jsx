import { useState } from 'react';
import './App.css'
import { ColorButton } from './components/ColorButton.jsx'
import { Header } from './components/Header.jsx';

function App() {
  
  const [color, setColor] = useState('#fffff');

  function changeColor (e) {
    
    const randomButtonColor ='#' + Math.random().toString(16).slice(2, 8);
    const randomBackroundColor ='#' + Math.random().toString(16).slice(2, 8);
    setColor(randomBackroundColor);
    document.getElementById('root').style.backgroundColor = randomBackroundColor;
    e.target.style.backgroundColor = randomButtonColor; 
  }

  return (
    <>
      <Header color={color}/>
      <ColorButton text={'Primary'} changeColor={changeColor} btnClass={'btn-primary'}/>
      <ColorButton text={'Secondary'} changeColor={changeColor} btnClass={'btn-secondary'}/>
      <ColorButton text={'Danger'} changeColor={changeColor} btnClass={'btn-danger'}/>
      <ColorButton text={'Success'} changeColor={changeColor} btnClass={'btn-success'}/>
    </>
  );
}

export default App
