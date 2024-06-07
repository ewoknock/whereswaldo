import PropTypes from 'prop-types'

function GuessOutcome({found, position}){
    let guessType = found.name ? 'guess-result__found' : 'guess-result__not-found'
    let message = found.name ? `You found ${found.name}` : 'Nobody here! Try again.' 
    let display = !found.visible ? `hidden` : ""
    let style={
        position: "absolute",
        left: position.x + "px",
        top: position.y + "px",
    }


    return(
        <div style={style} className={`guess-result ${guessType} ${display}`}>
            <div className="guess-result__content">{message}</div>
        </div>
    )
}

GuessOutcome.propTypes = {
    found: PropTypes.object,
    position: PropTypes.object,
}

export default GuessOutcome