import { Link } from "react-router-dom"

function Home(){
    return (
        <section className="home">
            <Link to="/play">Start Game</Link>
        </section>
    )
}

export default Home