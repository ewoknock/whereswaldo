import PropTypes from "prop-types"
import gameImage from "../assets/image1.png"
import GuessButton from "./GuessButton"
import { 
    useState,
    useRef,
} from "react"
import {
    getClickPositions,
    setBoxPositions
} from "../helpers/gameBoardHelper"
import {
    useFoundCharacters, 
    useFoundCharactersDispatch
} from "./FoundCharacters"
import GuessOutcome from "./GuessOutcome"

function Gameboard({characters, endGame}){
    const [guess, setGuess] = useState({x: null, y: null})
    const [targetPosition, setTargetPosition] = useState({ x:0, y: 0, show: false})
    const [imgSize, setImgSize] = useState({w:0, h:0})
    const [dropdownHeight, setDropdownHeight] = useState(0)
    const [guessResult, setGuessResult] = useState({visible: false, name: null})
    const foundCharacters = useFoundCharacters()
    const dispatch = useFoundCharactersDispatch()

    const dropdownMenu = useRef(null)

    const characterNames = characters

    const setAllStates = (e) => {
        const { guessX, guessY, targetX, targetY, imgWidth, imgHeight } = getClickPositions(e)
        setGuess({x: guessX, y: guessY})
        setTargetPosition({x: targetX, y: targetY, show: true})
        setImgSize({w: imgWidth, h: imgHeight})
        setGuessResult({...guessResult, visible: false})
        setDropdownHeight(0)
    }

    const foundCharacter = (character) => {
        const { left, right, top, bottom } = setBoxPositions(guess, imgSize)
        let xPos = left <= (character.x * imgSize.w) && right >= (character.x * imgSize.w)
        let yPos = top <= (character.y * imgSize.h) && bottom >= (character.y * imgSize.h)
        return xPos && yPos
    }

    const closeTarget = () => {setTargetPosition({...targetPosition, show: false})}

    const handleGuess = (character) => {

        let found = foundCharacter(character)
        let result = found ? character.name : null
        if(found){
            dispatch({type: 'found', name: character.name})
        }
        setGuessResult({visible: true, name: result})
        closeTarget()
        setTimeout(() => {setGuessResult({visible: false, name: null})}, 3000)
        if(found && foundCharacters.length == 4){
            endGame()
        }
    }

    const collapsible = () => {
        setDropdownHeight(dropdownHeight === 0 ? 200 : 0)
    }

    let rightEdge = targetPosition.x / window.innerWidth

    let style = {left:targetPosition.x + 'px', top:targetPosition.y + 'px', display: targetPosition.show ? 'flex' : 'none'}

    return (
        <div className="gameboard">
            <img src={gameImage} onClick={setAllStates}/>
            <div style={style} className="guess">
                <div className="guess__targetbox"></div>
                <div style={{transform: rightEdge >= .8 ? `translateX(-120%)` : ``}} className="dropdown">
                    <button className="btn btn__dropdown" onClick={collapsible}>Who is it? {'\u25bc'}</button>
                    <ul className="dropdown__menu" ref={dropdownMenu} style={{ maxHeight: dropdownHeight}}>
                        {characterNames.map((character, i) => {
                            if(!foundCharacters.includes(character.name)){
                                return <GuessButton key={i} onClick={() => handleGuess(character)}>{character.name}</GuessButton>   
                            }
                        })}
                    </ul>
                </div>
            </div>
            <GuessOutcome found={guessResult} position={targetPosition} />
        </div>
    )
}

Gameboard.propTypes = {
    characters: PropTypes.array,
    endGame: PropTypes.func,
}

export default Gameboard