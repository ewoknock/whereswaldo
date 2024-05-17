import PropTypes from 'prop-types'
import characterImage from "../assets/characters.png"

function Characters({characters}){

    const characterNames = characters

    return (
        <div className="characters">
            <img src={characterImage}/> 
            <div className="characters__foundList">
                {characterNames.map((name, i) => {
                    let display = true
                    return <span key={i} style={{visibility: display}} className="characters__found">Found</span>
                })}
            </div>
        </div>
    )
}

Characters.propTypes = {
    characters: PropTypes.array,
}

export default Characters