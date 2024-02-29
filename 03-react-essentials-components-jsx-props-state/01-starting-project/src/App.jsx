import { CORE_CONCEPTS } from './data.js'
import componentsImg from './assets/components.png'
import Header from './components/Header'
import { CoreConcept, CoreConceptDestructured } from './components/CoreConcept'

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
