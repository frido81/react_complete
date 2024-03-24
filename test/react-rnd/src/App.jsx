import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Rnd } from 'react-rnd';

const Box = () => (
    <div
        className="box"
        style={{ margin: 0, height: '100%', paddingBottom: '40px' }}
        onClick={(e) => e.stopPropagation()}>
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img
                        src="https://avatars1.githubusercontent.com/u/10220449?v=3&s=460"
                        draggable="false"
                        alt="github avatar"
                    />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>bokuweb</strong> <small>@bokuweb17</small> <small>31m</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
                        fringilla egestas. Nullam condimentum luctus turpis.
                    </p>
                </div>
                <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item">
                            <span className="icon is-small">
                                <i className="fa fa-reply" />
                            </span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small">
                                <i className="fa fa-retweet" />
                            </span>
                        </a>
                        <a className="level-item">
                            <span className="icon is-small">
                                <i className="fa fa-heart" />
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </article>
    </div>
);

function OuterBox({ textEntry }) {
    return (
        <Rnd
            default={{
                x: 150,
                y: 205,
                width: 500,
                height: 190,
            }}
            minWidth={500}
            minHeight={190}
            disableDragging={textEntry}
            bounds="window">
            <Box />
        </Rnd>
    );
}

function App() {
    const [enableDragging, setEnableDragging] = useState(false);

    function enableDrag(event) {
        console.log('enableDragging');
        enableDragging ? setEnableDragging(false) : setEnableDragging(true);
        // (enteringText) => {
        // enteringText ? setEnteringText(false) : setEnteringText(true);
        // };
    }

    return (
        <div
            onClick={enableDrag}
            style={{
                width: '100%vw',
                height: '100%vh',
                border: '1px dashed red',
            }}>
            <OuterBox textEntry={enableDragging}></OuterBox>
        </div>
    );
}

export default App;
