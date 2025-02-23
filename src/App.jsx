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
    // Handle key presses
    const handleKeyPress = (event) => {
      // Find the pad that matches the pressed key
      const pad = padsData.find((pad) => pad.innerText === event.key.toUpperCase());

      if (pad) {
        // Simulate a click on the button to play audio
        document.getElementById(pad.id).click(); // Trigger the pad's onClick handler
      }
    };

    // Add event listener when component mounts
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  
  return (
    <>
      <div className="container" id="drum-machine">
        <div id="display">
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
