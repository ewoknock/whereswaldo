import scoreHelper from "../helpers/scoreHelper";
import clockify from "../utils/clockify";

function HighScores({time}){
    const { scores, updated, postScore } = scoreHelper();

    const top10 = scores.map((row, i) => {
        return <tr key={i}>
            <th>{i+1}.</th>
            <td>{row.name}</td>
            <td>{clockify(row.time)}</td>
        </tr>
    })

    //let newHighScore = scores.length > 0 ? scores[scores.length - 1].time > time : null

    return (
        <section className="high-scores">
            <table>
                <tbody>
                    {top10}
                </tbody>
            </table>
        </section>
    )
}

export default HighScores