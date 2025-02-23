import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pad from './components/Pad'
import padsData from './components/padsData'
import React from 'react'

function App() {
  const padComponents= padsData.map((pad)=>{
    return(
      <Pad
      key={pad.id}
      id={pad.id}
      innerText={pad.innerText}
      audioClip={pad.audioClip}
      displayaudioText={displayaudioText}
      /> 
    )
  })
  
  const [display, setDisplay]= useState('')
  function displayaudioText(audioClip){
    console.log('clicked')
    console.log(audioClip)
    setDisplay(audioClip)
  }

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      const pad = padsData.find((pad) => pad.innerText === event.key.toUpperCase());

      if (pad) {
        document.getElementById(pad.id).click(); 
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  
  return (
    <>
      <div className="container" id="drum-machine">
        <div id="display" className='display'>
          {display}

        </div>
        <div className="btns">
          {padComponents}
        </div>
      </div>
    </>
  )
}
export default App
