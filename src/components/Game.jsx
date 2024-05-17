import { useState } from "react"
import Characters from "./Characters"
import Gameboard from "./Gameboard"

function Game (){

    const [characters, setCharacters] = useState(["Washington Carver", "Curie", "Einstein", "Newton", "Ride"])

    return (
        <section className="game">
            <Characters characters={characters} />
            <Gameboard />
        </section>
    )
}

export default Game