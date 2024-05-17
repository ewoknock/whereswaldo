import characterImage from "../assets/characters.png"

function Characters(){
    return (
        <div className="characters">
            <img src={characterImage}/> 
            <div className="characters__foundList"></div>
        </div>
    )
}

export default Characters