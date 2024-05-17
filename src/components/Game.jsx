import Characters from "./Characters"
import Gameboard from "./Gameboard"

function Game (){
    return (
        <section className="game">
            <Characters />
            <Gameboard />
        </section>
    )
}

export default Game