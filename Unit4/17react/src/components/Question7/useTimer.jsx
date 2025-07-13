import { useEffect,useRef,useState } from "react";
function useTimer(){
    let[timer,setTimer]=useState(0);
    let[running,setRunning]=useState(false);
    let internalRef=useRef();

    let startTimer=()=>{
        if(!running){
            setRunning(true);
        }
        internalRef.current=setInterval(()=>{
            setTimer((prev)=>prev+1)
        },1000)
    }
    let stopTimer=()=>{
        setRunning(false);
        clearInterval(internalRef.current);
    }
    let resetTimer=()=>{
        setRunning(false);
        clearInterval(internalRef.current);
        setTimer(0);
    }
    // stops the timer autmocally when component is removed
    useEffect(()=>{
        return ()=>clearInterval(internalRef.current)
    },[])
    return {timer,startTimer,stopTimer,resetTimer}
}
export default useTimer;