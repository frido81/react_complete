import { useState } from 'react'

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function toggleIsEditing() {
        // if (isEditing) {
        //     setIsEditing(!isEditing); these are scheduled
        //     setIsEditing(!isEditing); isEditing is initially false, second time as well
        // } else {
        //     setIsEditing(true);
        // }
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }


    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} />
    }


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={toggleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>

    )
}