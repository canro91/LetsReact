import React from 'react';
import './App.css';

const GRID = [];
const GRID_SIZE = 35;
for (let index = 0; index < GRID_SIZE; index++) {
  GRID.push(index);
}

const isBorderCell = (x, y) =>
  x === 0 || y === 0 || x === GRID_SIZE - 1 || y === GRID_SIZE - 1;

const areAtTheSamePosition = (x, y, x1, y1) =>
  x === x1 && y === y1;

const getClassNames = (x, y, snake, snack) => {
  const border = isBorderCell(x, y) ? 'grid-cell-border' : '';
  const snakeCell = areAtTheSamePosition(x, y, snake.position.x, snake.position.y) ? 'grid-cell-snake': '';
  const snackCell = areAtTheSamePosition(x, y, snack.position.x, snack.position.y) ? 'grid-cell-snack' : '';
  return `grid-cell ${border} ${snakeCell} ${snackCell}`;
};

function App() {
  const [snake, setSnake] = React.useState({ position: { x: 10, y: 10 } });
  const [snack, setSnack] = React.useState({ position: { x: 17, y: 17 } });

  return (
    <div className="app">
      <h1>Snake</h1>
      <Grid snake={snake} snack={snack} />
    </div>
  );
}

const Grid = ({ snake, snack }) => (
  <div>
    {
      GRID.map(y =>
        <Row
          y={y}
          snake={snake}
          snack={snack}
          key={y}
      />)
    }
  </div>
);

const Row = ({ y, snake, snack }) => (
  <div className="grid-row">
    {
      GRID.map(x =>
        <Cell
          y={y}
          x={x}
          snake={snake}
          snack={snack}
          key={x}
        />)
    }
  </div>
);

const Cell = ({ y, x, snake, snack }) => (
  <div className={getClassNames(x, y, snake, snack)} />
);

export default App;
