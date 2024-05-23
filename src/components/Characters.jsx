import PropTypes from 'prop-types'
import characterImage from "../assets/characters.png"
import { useFoundCharacters } from './FoundCharacters'

function Characters({characters}){
    const foundCharacters = useFoundCharacters()
    const characterNames = characters

    let foundList = characterNames.map((character, i) => {
        let display = foundCharacters.includes(character.name) ? 'visible' : 'hidden'
        return <span key={i} style={{visibility: display}} className="characters__found">Found</span>
    })

    return (
        <div className="characters">
            <img src={characterImage}/> 
            <div className="characters__foundList">
                {foundList}
            </div>
        </div>
    )
}

Characters.propTypes = {
    characters: PropTypes.array,
}

export default Characters