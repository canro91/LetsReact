const SQ = 20;
const ROW = ROWS = 20;
const COL = COLUMNS = 10;
const VACANT_COLOR = "white";

const PIECES = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

let board = [];
createBoard();
drawBoard();

function createBoard() {
    for (let r = 0; r < ROWS; r++) {
        board[r] = [];
        for (let c = 0; c < COLUMNS; c++) {
            board[r][c] = VACANT_COLOR;
        }
    }
}

function drawBoard() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLUMNS; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

    ctx.strokeStyle = "black";
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        moveLeft();
    }
    if (event.keyCode === 38) {
        rotate();
    }
    if (event.keyCode === 39) {
        moveRight();
    }
    if (event.keyCode === 40) {
        moveDown();
    }
});

function moveLeft() {
    doIfNoCollition(piece, x, y, -1, 0, () => {
        unDrawPiece(piece, x, y);
        x--;
        drawPiece(piece, x, y, color);
    });
}

function rotate() {
    const [nextRotation, nextPiece] = rotatePiece(tetrominio, currentRotation);
    let delta = 0;
    doIfNoCollition(nextPiece, x, y, 0, 0, () => {
        if (x > COLUMNS/2) {
            delta = -1;
        } else {
            delta = 1;
        }
    });

    doIfNoCollition(nextPiece, x, y, delta, 0, () =>{
        unDrawPiece(piece, x, y);
        x += delta;
        piece = nextPiece;
        currentRotation = nextRotation;
        drawPiece(piece, x, y, color);
    });

    drawPiece(x, y, color);
}

function moveRight() {
    doIfNoCollition(piece, x, y, 1, 0, () => {
        unDrawPiece(piece, x, y);
        x++;
        drawPiece(piece, x, y, color)
    });
}

function moveDown() {
    doIfNoCollition(piece, x, y, 0, 1, () => {
        unDrawPiece(piece, x, y);
        y++;
        drawPiece(piece, x, y, color);
    });
}

function doIfNoCollition(piece, x, y, deltaX, deltaY, f) {
    if (!hasCollition(piece, x, y, deltaX, deltaY)) {
        f();
    }
}

function hasCollition(piece, x, y, deltaX, deltaY) {
    for (let r = 0; r < piece.length; r++) {
        for (let c = 0; c < piece.length; c++) {
            // if the square is empty, we skip it
            if (!piece[r][c]) {
                continue;
            }
            // coordinates of the piece after movement
            let newX = x + c + deltaX;
            let newY = y + r + deltaY;

            // conditions
            if (newX < 0 || newX >= COLUMNS || newY >= ROW) {
                return true;
            }
            // skip newY < 0; board[-1] will crush our game
            if (newY < 0) {
                continue;
            }
            // check if there is a locked piece alrady in place
            if (board[newY][newX] != VACANT_COLOR) {
                return true;
            }
        }
    }
    return false;
}

const color = 'red';
let tetrominio = Z;
let currentRotation = 0;
let piece = Z[0];
let x = 3;
let y = -2;

// let start = Date.now();
// function drop() {
//     let now = Date.now();
//     let delta = now - start;
//     if (delta > 1000) {
//         animate();
//         start = Date.now();
//     }

//     if (!isGameOver()) {
//         requestAnimationFrame(drop);
//     }
// }
// drop();

// function animate() {
//     moveDown();
// }

// function isGameOver() {
//     return false;
// }

function randomPiece(){
    let r = Math.floor(Math.random() * PIECES.length)
    piece = PIECES[r][0];
    color = PIECES[r][1];
}

function rotatePiece(tetrominio, currentRotation) {
    const nextRotation =(currentRotation + 1)%tetrominio.length; 
    return [nextRotation, tetrominio[nextRotation]];
}

function drawPiece(piece, x, y, color) {
    doOnActiveCellsOfPiece(piece, (r, c) => drawSquare(x + c, y + r, color));
}

function unDrawPiece(piece, x, y) {
    drawPiece(piece, x, y, VACANT_COLOR)
}

function doOnActiveCellsOfPiece(piece, f) {
    doOnEveryPiece(piece, (r, c) => { if (piece[r][c]) { f(r, c); } });
}

function doOnEveryPiece(piece, f) {
    for (let r = 0; r < piece.length; r++) {
        for (let c = 0; c < piece.length; c++) {
            f(r, c);
        }
    }
}