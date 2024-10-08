import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext=createContext(); 

const PlayerContextProvider=(props)=>{
 const audioRef=useRef(null);
  const seekBg=useRef(null);
  const seekBar=useRef(null);

const [track, setTrack]=useState(songsData[3]);
const [playStatus, setPlayStatus]=useState(false)
const [time, setTime]=useState({
    currentTime:{
        second:0,
        minute:0,

    },
    totalTime:{
        second:0,
        minute:0,
    }
})

const play=()=>{
    audioRef.current.play();
    setPlayStatus(true)
}
const pause=()=>{
    audioRef.current.pause();
    setPlayStatus(false)
}

useEffect(()=>{
    setTimeout(()=>{
        audioRef.current.onTimeupdate=()=>{
            setTime({
                currentTime:{
second:Math.floor(audioRef.current.currentTime%60),
minute:Math.floor(audioRef.current.currentTime/60),
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60),
                }
            })
        }
    },1000)
},[audioRef])
    const contextValue={
       audioRef,
       seekBg,
       seekBar,
       track,
       playStatus,
       setPlayStatus,time, setTime, play, pause
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;