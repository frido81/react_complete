// can also destructure first parameter {image, title, description}
export function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt="...">
            </img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

export function CoreConceptDestructured({ image, title, description }) {
    return (
        <li>
            <img src={image} alt="...">
            </img>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}
