import scoreHelper from "../helpers/scoreHelper";
import clockify from "../utils/clockify";
import Form from "./Form";
import PropTypes from 'prop-types'

function HighScores({time}){
    const { scores, updated, postScore } = scoreHelper();

    const top10 = scores.map((row, i) => {
        return <tr key={i}>
            <td>{i+1}.</td>
            <td>{row.name}</td>
            <td>{clockify(row.time)}</td>
        </tr>
    })

    let newHighScore = scores.length > 0 ? scores[scores.length - 1].time > time : null

    return (
        <section className="high-scores">
            {newHighScore && !updated && <Form submit={postScore} time={time} />}
            {newHighScore && updated && <p>Your score has been successfully saved into the top 10! </p>}
            <table>
                <thead>
                    <tr><th colSpan="3">Top 10 Fastest Times</th></tr>
                </thead>
                <tbody>
                    {top10}
                </tbody>
            </table>
        </section>
    )
}

HighScores.propTypes = {
    time: PropTypes.number,
}

export default HighScores