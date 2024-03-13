import { formatter } from "../util/investment.js"

export default function Result({ result }) {
    console.log(formatter.format(1000));
    console.log("a", result);

    return (
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest (year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {result.map(
                    year => (
                        <tr key={year.year}>
                            <td>{year.year}</td>
                            <td>{formatter.format(year.valueEndOfYear)}</td>
                            <td>{formatter.format(year.interest)}</td>
                            <td>{formatter.format(year.totalInterest)}</td>
                            <td>{formatter.format(year.totalInvestedCapital)}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}