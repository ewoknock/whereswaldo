import { useState, useEffect } from "react";

function Timer(){
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);
    
    useEffect(() => {
        let interval  = null;

        if(isActive){
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        }else{
            clearInterval(interval);
        }
    }, [isActive])

    return (
        <div className="timer">
            <span className="digits">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </div>
    )
}

export default Timer