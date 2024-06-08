import { useState, useEffect } from "react"

const backEndUrl = "http://localhost:3000/"

function APIHelper(){
    const [scores, setScores] = useState([])
    const [updated, setUpdated] = useState(null)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        let url = backEndUrl + "api/v1/characters/"
        fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
                else{
                    throw new Error("Error retrieving character data from API")
                }
            })
            .then((response) => setCharacters(response))
            .catch((e) => console.log(e.message))
    }, [])

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
        console.log(time)
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

    return { scores, updated, characters, postScore }
}

export default APIHelper