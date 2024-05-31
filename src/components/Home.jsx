import { Link } from "react-router-dom"
import HighScores from "./HighScores"

function Home(){
    return (
        <section className="home">
            <Link to="/play">Start Game</Link>
            <HighScores />
        </section>
    )
}

export default Home