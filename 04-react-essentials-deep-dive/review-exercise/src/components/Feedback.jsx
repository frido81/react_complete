import { useState } from 'react';

export default function FeedBack(props) {

    const [feedBack, setFeedBack] = useState(props.feedback);
    const [student, setStudent] = useState(props.student)

    function handleFeedBackChange(event) {
        setFeedBack(event.target.value)
    }
    function handleStudentChange(event) {
        setStudent(event.target.value)
    }

    return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea defaultValue={feedBack} onChange={handleFeedBackChange} />
                </p>
                <p>
                    <label>Your Name</label>
                    <input defaultvValue={student} onChange={handleStudentChange} type="text" />
                </p>
            </section>

            <section id="draft">
                <h2>Your feedback</h2>
                <figure>
                    <blockquote>
                        <p>{feedBack}</p>
                    </blockquote>
                    <figcaption>{student}</figcaption>
                </figure>


                <p>
                    <button>Save</button>
                </p>
            </section >

        </>

    )
}