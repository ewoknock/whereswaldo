import { useState, useEffect } from "react";
import PropTypes from "prop-types"

function Timer({gameEnded, setFinalTime}){
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);
    
    useEffect(() => {
        let interval  = null;

        if(gameEnded){
            setFinalTime(time);
            setIsActive(false);
            clearInterval(interval);
        }else{
            setIsActive(true);
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
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

Timer.propTypes = {
    gameEnded: PropTypes.func,
    setFinalTime: PropTypes.func,
}

export default Timer