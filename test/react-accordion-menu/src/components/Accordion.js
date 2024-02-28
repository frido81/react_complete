

import { faqs, faqs2 } from "../data";
import { notes } from "../notes";
import AccordionItem from "./AccordionItem";

const Accordion = () => {

    // const [clicked, setClicked] = useState("0");
    // const handleToggle = (index) => {
    //     if (clicked === index) {
    //         return setClicked("0");
    //     }
    //     setClicked(index);
    // };

    // for (const notebook in notes) {
    //     console.log(notebook)
    // }

    Object.keys(notes).map((note, index) => (console.log(note, index)));


    return (
        <ul className="accordion">
            {Object.keys(notes).map((note, index) => (
                <AccordionItem
                    // onToggle={() => handleToggle(index)}
                    // active={clicked === index}
                    key={index} note={note} sections={notes} />
            ))}
        </ul>
    );
};

export default Accordion;