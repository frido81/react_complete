import { useState } from 'react';
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from './components/Log.jsx'
import GameOver from './components/GameOver.jsx'
import { WINNING_COMBINATIONS } from './winning-combinations.js'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
function deriveActivePlayer(gameTurns) {
    // need to define this because activePlayer is managed by react and
    // inside a loop and might not be valid yet. We just base it on last
    // player in the turn log.

    let currentPlayer = 'X';
    // prepended gameturns, latest always at 0
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O"
    }
    return currentPlayer;


}
function App() {

    const [gameTurns, setGameTurns] = useState([]);
    // const [activePlayer, setActivePlayer] = useState('X');

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    let winner = null;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
        if (firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
        setGameTurns((prevTurns) => {
            const activePlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: activePlayer },
                ...prevTurns,
            ];
            return updatedTurns;

        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
                </ol>
                {winner || hasDraw && <GameOver winner={winner} />}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}

export default App
