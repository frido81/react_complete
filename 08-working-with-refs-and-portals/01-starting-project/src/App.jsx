import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallenge.jsx';

function App() {
    return (
        <>
            <Player />
            <div id="challenges">
                <TimerChallange title="Easy" targetTime={1}></TimerChallange>
                <TimerChallange title="Not easy" targetTime={5}></TimerChallange>
                <TimerChallange title="Getting tough" targetTime={5}></TimerChallange>
                <TimerChallange title="Getting tough" targetTime={15}></TimerChallange>
            </div>
        </>
    );
}

export default App;
