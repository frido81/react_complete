import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js'

const reactDescription = ['Fundamental', 'Crucial', 'Core']


function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescription[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

// can also destructure first parameter {image, title, description}
function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt="...">
            </img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

function CoreConceptDestructured({ image, title, description }) {
    return (
        <li>
            <img src={image} alt="...">
            </img>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}
function App() {
    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started!</h2>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConceptDestructured {...CORE_CONCEPTS[0]} />
                        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                        <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
                        <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
                        <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />
                    </ul>

                </section>
            </main>
        </div>
    );
}

export default App;
