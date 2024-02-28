
import { useState } from "react";
import { useRef } from "react";

const AccordionItem = (props) => {
    // const { question, answer1, answer2 } = faq;
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();
    const handleToggle = (index) => {
        setClicked((prev) => !prev);
    }

    console.log(props.note);
    console.log(props.sections);


    const sections = Object.keys(props.sections[props.note]);
    console.log(sections);

    return (
        <li className={`accordion_item ${clicked ? "active" : ""}`}>
            <button className="button" onClick={handleToggle}>
                {props.note}
                <span className="control">{clicked ? "—" : "+"} </span>
            </button>
            <div
                ref={contentEl}
                className="answer_wrapper"
                style={
                    clicked
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }

            >



                {sections.map((section, index) => (
                    <div className="answer">
                        {section}
                    </div>
                ))}
            </div>
        </li >
    );
};

export default AccordionItem;