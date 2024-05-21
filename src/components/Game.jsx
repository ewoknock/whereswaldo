import { 
    useState, 
    useEffect 
} from "react"
import Characters from "./Characters"
import Gameboard from "./Gameboard"

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
        <section className="game">
            <Characters characters={characters} />
            <Gameboard characters={characters}/>
        </section>
    )
}

export default Game