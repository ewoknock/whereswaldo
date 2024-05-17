import PropTypes from "prop-types"

function GuessButton({ onClick, children}){
    return(
            <li className="dropdown__item" onClick={onClick}>{children}</li>
    )
}

GuessButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string,
}

export default GuessButton