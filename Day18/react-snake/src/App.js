import React from 'react';
import './App.css';

const GRID = [];
const GRID_SIZE = 35;
for (let index = 0; index < GRID_SIZE; index++) {
  GRID.push(index);
}

const isBorder = (x, y) =>
  x === 0 || y === 0 || x === GRID_SIZE - 1 || y === GRID_SIZE - 1;

const getClassNames = (x, y) => {
  const border = isBorder(x, y) ? 'grid-cell-border' : '';
  return `grid-cell ${border}`;
};

function App() {
  return (
    <div className="app">
      <h1>Snake</h1>
      <Grid />
    </div>
  );
}

const Grid = () => (
  <div>
    { GRID.map(y => <Row y={y} key={y} />) }
  </div>
);

const Row = ({ y }) => (
  <div className="grid-row">
    { GRID.map(x => <Cell y={y} x={x} key={x} />) }
  </div>
);

const Cell = ({ y, x }) => (
  <div className={getClassNames(x, y)} />
);

export default App;
