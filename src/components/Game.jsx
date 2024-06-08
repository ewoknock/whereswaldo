import { 
    useState, 
    useEffect 
} from "react"
import Characters from "./Characters"
import Gameboard from "./Gameboard"
import { FoundCharactersProvider } from "./FoundCharacters"
import Timer from "./Timer"
import GameEndScreen from "./GameEndScreen"
import APIHelper from "../helpers/APIHelper"

function Game (){

    const {characters} = APIHelper();
    const [gameOver, setGameOver] = useState(false)
    const [finalTime, setFinalTime] = useState(0);

    return (
        <>
            <FoundCharactersProvider>
                {gameOver && <GameEndScreen finalTime={finalTime} startGame={() => setGameOver(false)} />}
                <section className="game">
                    <Characters characters={characters} />
                    <Gameboard characters={characters} endGame={() => setGameOver(true)} />
                </section>
            </FoundCharactersProvider>
            <Timer gameOver={gameOver} setFinalTime={setFinalTime}/>
        </>
 
    )
}

export default Game