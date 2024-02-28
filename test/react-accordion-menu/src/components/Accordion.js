

import { notes } from "../notes";
import AccordionItem from "./AccordionItem";

const Accordion = () => {

    // use object.keys everywhere to extract arrays from json object

    return (
        <ul className="accordion">
            {
                Object.keys(notes).map((note, index) => {
                    const sections = Object.keys(notes[note]);
                    return (
                        <AccordionItem
                            key={index} note={note} sections={sections} />
                    )
                })}
        </ul>
    );
};

export default Accordion;