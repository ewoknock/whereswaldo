import { useState, useEffect } from "react"

const backEndUrl = "http://localhost:3000/"

function ScoreHelper(){
    const [scores, setScores] = useState([])
    const [updated, setUpdated] = useState(null)

    useEffect(() => {
        let url = backEndUrl + "api/v1/scores/"
        fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
                else{
                    throw new Error("Error retrieving score data from API")
                }
            })
            .then((response) => setScores(response))
            .catch((e) => console.log(e.message))
    }, [updated])

    return {scores}
}

export default ScoreHelper