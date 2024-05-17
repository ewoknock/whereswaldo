import PropTypes from "prop-types"
import gameImage from "../assets/image1.png"
import GuessButton from "./GuessButton"
import { useState } from "react"
import {
    getClickPositions
} from "../helpers/gameBoardHelper"

function Gameboard({characters}){
    const [targetPosition, setTargetPosition] = useState({ x:0, y: 0, show: false})

    const characterNames = characters

    const setAllStates = (e) => {
        const { guessX, guessY, targetX, targetY, imgWidth, imgHeight } = getClickPositions(e)
        setTargetPosition({x: targetX, y: targetY, show: true})
        console.log(guessX)
        console.log(guessY)
        console.log(targetX)
        console.log(targetY)
        console.log(imgWidth)
        console.log(imgHeight)

    }

    const handleGuess = (character) => {

    }

    let style = {left:targetPosition.x + 'px', top:targetPosition.y + 'px', display: targetPosition.show ? 'flex' : 'none'}

    return (
        <div className="gameboard">
            <img src={gameImage} onClick={setAllStates}/>
            <div style={style} className="gameboard__dropdown">
                <button className="btn btn__dropdown">Who is it?</button>
                <ul className="dropdown__menu">
                    {characterNames.map((character, i) => {
                        return <GuessButton key={i} onClick={() => handleGuess(character)}>{character}</GuessButton>
                    })}
                </ul>
            </div>
        </div>
    )
}

Gameboard.propTypes = {
    characters: PropTypes.array
}

export default Gameboard