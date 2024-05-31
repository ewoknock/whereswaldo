import { 
    useState, 
    useEffect 
} from "react"
import Characters from "./Characters"
import Gameboard from "./Gameboard"
import { FoundCharactersProvider } from "./FoundCharacters"
import Timer from "./Timer"
import GameEndScreen from "./GameEndScreen"

const backEndUrl = "http://localhost:3000/"

function Game (){

    const [characters, setCharacters] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [finalTime, setFinalTime] = useState(0);

    useEffect(() => {
        let url = backEndUrl + "api/v1/characters/"
        fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
                else{
                    throw new Error("Error retrieving character data from API")
                }
            })
            .then((response) => setCharacters(response))
            .catch()
    }, [])

    return (
        <>
            <FoundCharactersProvider>
                {gameOver && <GameEndScreen finalTime={finalTime} />}
                <section className="game">
                    <Characters characters={characters} />
                    <Gameboard characters={characters} endGame={() => setGameOver(true)} setFinalTime={setFinalTime} />
                </section>
            </FoundCharactersProvider>
            {!gameOver && <Timer gameOver={gameOver} setFinalTime={setFinalTime}/>}
        </>
 
    )
}

export default Game