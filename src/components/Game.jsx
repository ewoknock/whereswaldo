import { 
    useState, 
    useEffect 
} from "react"
import Characters from "./Characters"
import Gameboard from "./Gameboard"
import { FoundCharactersProvider } from "./FoundCharacters"

const backEndUrl = "http://localhost:3000/"

function Game (){

    const [characters, setCharacters] = useState([])

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
        <FoundCharactersProvider>
            <section className="game">
                <Characters characters={characters} />
                <Gameboard characters={characters} />
            </section>
        </FoundCharactersProvider>
 
    )
}

export default Game