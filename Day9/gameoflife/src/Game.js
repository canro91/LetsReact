import React from 'react';
import './Game.css'

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

const Cell = ({ x, y }) => (
    <div
        className="Cell"
        style={{
            left: `${CELL_SIZE * x + 1}px`,
            top: `${CELL_SIZE * y + 1}px`,
            width: `${CELL_SIZE - 1}px`,
            height: `${CELL_SIZE - 1}px`
        }}>
    </div>
);

class Game extends React.Component {
    constructor() {
        super();

        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeEmptyBoard();
        this.boardRef = React.createRef();

        this.state = {
            cells: [],
            interval: 100,
            isRunning: false
        };
    }

    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board;
    }

    startGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    handleIntervalChange = (event) => {
        this.setState({ interval: event.target.value });
    }

    runIteration = () => {
        this.runOnlyNextIteration();
        this.timeoutHandler = window.setTimeout(() => { this.runIteration(); }, this.state.interval);
    }

    runOnlyNextIteration = () => {
        let newBoard = this.makeEmptyBoard();

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }

        this.board = newBoard;
        this.setState({ cells: this.makeCells() });
    }

    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }

        return neighbors;
    }

    handleRandom = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 0.5);
            }
        }

        this.setState({ cells: this.makeCells() });
    }

    // If you use handleClick(event){}, 'this' will have another sense
    // Cannot read property 'getElementOffset' of undefined
    handleClick = (event) => {
        const elementOffset = this.getElementOffset();
        const offsetX = event.clientX - elementOffset.x;
        const offsetY = event.clientY - elementOffset.y;

        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);
        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }
        this.setState({ cells: this.makeCells() });
    }

    getElementOffset() {
        const rect = this.boardRef.current.getBoundingClientRect();
        const doc = document.documentElement;
        return {
            // Left position + scroll - border
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            // Top position + scroll - border
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    makeCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }
        return cells;
    }

    render() {
        const { cells, isRunning } = this.state;

        return (
            <div>
                <div
                    className="Board"
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}
                    onClick={this.handleClick}
                    ref={this.boardRef}
                >
                    {cells.map(cell => <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />)}
                </div>

                <div className="controls">
                    <p>Update every <input value={this.state.interval} onChange={this.handleIntervalChange} /> msec</p>
                    {
                        isRunning
                        ? <div><button onClick={this.stopGame}>Stop</button></div>
                        : <div>
                            <button onClick={this.startGame}>Start</button>
                            <button onClick={this.runOnlyNextIteration}>Next</button>
                            </div>
                    }

                    <button onClick={this.handleRandom}>Random</button>
                </div>

            </div>
        )
    }
}

export default Game