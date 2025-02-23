import { useRef, useState } from "react"

export default function Pad(props) {
    const audioref= useRef(null)
    const [backgroundColor, setBackgroundColor]= useState()

    const playAudio= ()=>{
        setBackgroundColor('lightblue')
        if(audioref.current)
        {
            audioref.current.play();
            props.displayaudioText(props.audioClip)
            console.log(props.audioClip)
        }

        setTimeout(()=>{
            setBackgroundColor(null)
        }, 200)
        
    }
    return (
        <button
            className="drum-pad"
            id={props.id}
            onClick={playAudio}
            style={{
                background: backgroundColor
            }}

        >
            {/* {console.log(props)} */}
            {props.innerText}
            <audio
                ref={audioref}
                src={`/audio/${props.audioClip}.mp3`}
                className="clip"
                id={props.innerText}
                onError={(e) => console.log("Error loading audio:", e)}
            >

            </audio>

        </button>

    )
}