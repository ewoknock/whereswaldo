import scoreHelper from "../helpers/scoreHelper";
import clockify from "../utils/clockify";

function HighScores(){
    const { scores } = scoreHelper();

    const top10 = scores.map((row, i) => {
        return <tr key={i}>
            <th>{i+1}.</th>
            <td>{row.name}</td>
            <td>{clockify(row.time)}</td>
        </tr>
    })

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