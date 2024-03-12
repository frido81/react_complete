import { formatter } from "../util/investment.js"

export default function Results({ result }) {
    console.log(formatter.format(1000));
    console.log("a", result);

    return (
        <table>
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                </tr>
            </thead>
            <tbody>
                {result.map(
                    year => (
                        <tr>
                            <td>{year.year}</td>
                            <td>{formatter.format(year.valueEndOfYear)}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}