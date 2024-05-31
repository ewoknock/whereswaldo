const clockify = (time) => {
    if(!time){
        return
    }

    let mins = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    let secs = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    let millisecs = ("0" + Math.round((time / 10) % 100)).slice(-2)

    return `${mins}:${secs}:${millisecs}`
}

export default clockify