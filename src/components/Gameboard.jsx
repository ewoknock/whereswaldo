import PropTypes from "prop-types"
import gameImage from "../assets/image1.png"
import GuessButton from "./GuessButton"
import { 
    useState,
    useRef } from "react"
import {
    getClickPositions
} from "../helpers/gameBoardHelper"

function Gameboard({characters}){
    const [guess, setGuess] = useState({x: null, y: null})
    const [targetPosition, setTargetPosition] = useState({ x:0, y: 0, show: false})
    const [imgSize, setImgSize] = useState({w:0, h:0})
    const [dropdownHeight, setDropdownHeight] = useState(0)

    const dropdownMenu = useRef(null)

    const characterNames = characters

    const setAllStates = (e) => {
        const { guessX, guessY, targetX, targetY, imgWidth, imgHeight } = getClickPositions(e)
        setGuess({x: guessX, y: guessY})
        setTargetPosition({x: targetX, y: targetY, show: true})
        setImgSize({w: imgWidth, h: imgHeight})
        setDropdownHeight(0)
    }

    const handleGuess = (character) => {

    }

    const collapsible = () => {
        setDropdownHeight(dropdownHeight === 0 ? 200 : 0)
    }

    let style = {left:targetPosition.x + 'px', top:targetPosition.y + 'px', display: targetPosition.show ? 'flex' : 'none'}

    return (
        <div className="gameboard">
            <img src={gameImage} onClick={setAllStates}/>
            <div style={style} className="guess">
                <div className="guess__targetbox"></div>
                <div className="dropdown">
                <button className="btn btn__dropdown" onClick={collapsible}>Who is it? {'\u25bc'}</button>
                <ul className="dropdown__menu" ref={dropdownMenu} style={{ maxHeight: dropdownHeight}}>
                    {characterNames.map((character, i) => {
                        return <GuessButton key={i} onClick={() => handleGuess(character)}>{character.name}</GuessButton>
                    })}
                </ul>
            </div>
            </div>

        </div>
    )
}

Gameboard.propTypes = {
    characters: PropTypes.array
}

export default Gameboard