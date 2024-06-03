import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clockify from '../utils/clockify'
import HighScores from './HighScores'
import { useFoundCharactersDispatch } from './FoundCharacters'

function GameEndScreen({finalTime, startGame}){
    const dispatch = useFoundCharactersDispatch()

    const resetGame = () => {
        startGame()
        window.scrollTo({ top: 0 })
        dispatch({ type: 'clear' })
    }

    return(
        <>
            <div className="game-end__background"></div>
            <section className="game-end">
                <div className="game-end__header">
                    <h1>You Did It!</h1>
                </div>
                <div className="game-end__body">
                    <p>Your Time was {clockify(finalTime)}</p>
                    <HighScores time={finalTime} />
                </div>
                <div className="game-end__actions">
                    <button type="button" className="btn btn__play-again" onClick={() => resetGame()}>Play Again</button>
                    <Link to="/" className="btn btn__home">Home</Link>
                </div>
            </section>
        </>
    )
}

GameEndScreen.propTypes = {
    finalTime: PropTypes.number,
    startGame: PropTypes.func,
}
export default GameEndScreen