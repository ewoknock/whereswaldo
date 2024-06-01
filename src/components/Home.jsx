import { Link } from "react-router-dom"
import HighScores from "./HighScores"
import Characters from "../assets/characters.png"

function Home(){
    return (
        <section className="home">
            <div className="home__header">
                <h1>Where Are The Scientists?</h1>
                <p>A 'Where's Waldo' Style Game</p>
            </div>
            <div>Once the game beings, try to find all of the following characters hidden within the image!</div>
            <img src={Characters}/> 
            <div>Click on the image to make your guess</div>
            <Link to="/play" className="btn btn__start-game">Start Game</Link>
            <HighScores />
        </section>
    )
}

export default Home