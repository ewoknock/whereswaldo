import { useState } from "react"
import Characters from "./Characters"
import Gameboard from "./Gameboard"

function Game (){

    const [characters, setCharacters] = useState([
        {name: "Washington Carver", x:0.166, y:0.374}, 
        {name: "Curie", x:0.895, y:0.2925}, 
        {name: "Einstein", x:0.7875, y:0.944}, 
        {name: "Newton", x:0.145, y:0.824}, 
        {name: "Ride", x:0.0325, y:0.1625}
      ])

    return (
        <section className="game">
            <Characters characters={characters} />
            <Gameboard characters={characters}/>
        </section>
    )
}

export default Game