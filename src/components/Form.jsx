import { useState } from "react"
import PropTypes from 'prop-types'

function Form({submit, time}){
    const [name, setName] = useState("")
    
    const submitForm = (e) => {
        e.preventDefault()
        submit(name, time)
    }

    return(
        <form onSubmit={submitForm} className="form">
            <p>Congratulations! You have set a new high score!</p>
            <div className="form__content">
                <input
                    type="text"
                    className="form__control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <button type="submit" className="btn btn__submit">Record Score</button>
            </div>
        </form>
    )
}

Form.propTypes = {
    submit: PropTypes.func,
    time: PropTypes.number
}

export default Form