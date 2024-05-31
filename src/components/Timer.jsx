import { useState, useEffect } from "react";
import PropTypes from "prop-types"

function Timer({gameOver, setFinalTime}){
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);
    
    useEffect(() => {

        if(gameOver){
            setFinalTime(time);
            setIsActive(false);
        }else{
            setIsActive(true);
        }
    }, [gameOver])

    useEffect(() => {
        let interval  = null;

        if(isActive){
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        }else{
            console.log("here");
            clearInterval(interval);
        }
        return () => {
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

Timer.propTypes = {
    gameOver: PropTypes.bool,
    setFinalTime: PropTypes.func,
}

export default Timer