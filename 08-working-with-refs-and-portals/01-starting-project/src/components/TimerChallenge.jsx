export default function TimerChallenge({ title, targetTime }) {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challange-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>Start Challenge</button>
            </p>
            <p className="">Timer is Running / Timer inactive</p>
        </section>
    );
}
