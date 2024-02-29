export default function Card(props) {
    return (
        <div class="card">
            <h2>{props.name}</h2>
            {props.children}
        </div>
    )

}