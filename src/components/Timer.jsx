import { useState, useEffect } from "react";
import PropTypes from "prop-types"
import clockify from "../utils/clockify";

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
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    }, [isActive])

    return (
        <div className={isActive ? "timer" : "timer__none"}>
            {clockify(time)}
        </div>
    )
}

Timer.propTypes = {
    gameOver: PropTypes.bool,
    setFinalTime: PropTypes.func,
}

export default Timer