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

    const postScore = (name, time) => {
        let url = backEndUrl + "api/v1/scores/"
        if(name === undefined || name.length == 0){
            name = "Anon"
        }
        const body = {
            name,
            time
        }

        //const token = document.querySelector('meta[name="csrf-token"]').content;


        fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json"
            },
        })
        .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
        .then(() => setUpdated(true))
        .catch((e) => console.log(e.message));
    }

    return { scores, updated, postScore }
}

export default ScoreHelper