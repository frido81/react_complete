import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data-with-examples.js'
import componentsImg from './assets/components.png'
import Header from './components/Header/Header.jsx'
import TabButton from './components/TabButton.jsx'
import { CoreConcept, CoreConceptDestructured } from './components/CoreConcept'

function App() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        // selectedbutton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    console.log("APP COMPONENT EXECUTING");
    let tabContent = <p>Please select a topic</p>
    if (selectedTopic) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}
                </h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>

    }

    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started!</h2>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/* <CoreConcept {...CORE_CONCEPTS[0]} /> */}
                        {/* <CoreConceptDestructured {...CORE_CONCEPTS[0]} /> */}
                        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                        <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
                        <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
                        <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />
                    </ul>

                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
