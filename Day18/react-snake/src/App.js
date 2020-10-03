import React from 'react';
import './App.css';

const TICK_RATE = 150;
const GRID = [];
const GRID_SIZE = 35;
for (let index = 0; index <= GRID_SIZE; index++) {
  GRID.push(index);
}

const isAtBorder = (x, y) =>
  x === 0 || y === 0 || x === GRID_SIZE || y === GRID_SIZE;

const isSnake = (x, y, snake) =>
  snake.positions && snake.positions.filter(pos => areAtTheSamePosition(x, y, pos.x, pos.y)).length;

const areAtTheSamePosition = (x, y, x1, y1) =>
  x === x1 && y === y1;

const getClassNames = (x, y, isGameOver, snake, snack) => {
  const border = isAtBorder(x, y) ? 'grid-cell-border' : '';
  const snakeCell = isSnake(x, y, snake) ? 'grid-cell-snake': '';
  const snackCell = areAtTheSamePosition(x, y, snack.position.x, snack.position.y) ? 'grid-cell-snack' : '';

  const head = snakeHead(snake);
  const snakeHit = isGameOver && areAtTheSamePosition(x, y, head.x, head.y) ? 'grid-cell-hit' : '';
  return `grid-cell ${border} ${snakeCell} ${snackCell} ${snakeHit}`;
};

const DIRECTIONS = {
  LEFT: 'LEFT',
  UP: 'UP',
  DOWN: 'DOWN',
  RIGHT: 'RIGHT'
};

const KEY_MAPPER = {
  37: 'LEFT',
  38: 'UP',
  39: 'RIGHT',
  40: 'DOWN'
};

const DIRECTION_POSITIONS = {
  LEFT: (x, y) => ({ x: x - 1, y }),
  UP: (x, y) => ({ x, y: y - 1 }),
  DOWN: (x, y) => ({ x, y: y + 1 }),
  RIGHT: (x, y) => ({ x: x + 1, y })
};

const generateRandomPosition = () => {
  return {
    x: generateRandomNumber(1, GRID_SIZE - 2),
    y: generateRandomNumber(1, GRID_SIZE - 2)
  }
};

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const isSnakeEating = (snake, snack) => {
  const head = snakeHead(snake);
  return areAtTheSamePosition(head.x, head.y, snack.position.x, snack.position.y);
};

const snakeHead = (snake) =>
  snake.positions[0];

const snakeBody = (snake) =>
  snake.positions.slice(0, snake.positions.length - 1);

const snakeTail = (snake) =>
  snake.positions.slice(1);

const isSnakeOutside = (snake) => {
  const head = snakeHead(snake);
  return head.x >= GRID_SIZE
          || head.y >= GRID_SIZE
          || head.x <= 0
          || head.y <= 0;
};

const isEatingItself = (snake) => {
  const head = snakeHead(snake);
  const tail = snakeTail(snake);
  return isSnake(head.x, head.y, tail);
};

function App() {
  const [playground, setPlayground] = React.useState({ direction: DIRECTIONS.RIGHT, isGameOver: false });
  const [snake, setSnake] = React.useState({ positions: [ generateRandomPosition() ] });
  const [snack, setSnack] = React.useState({ position: generateRandomPosition() });

  React.useEffect(() => {
    const tick = setInterval(onTick, TICK_RATE);

    window.addEventListener('keyup', onDirectionChanged, false);

    return () => {
      window.removeEventListener('keyup', onDirectionChanged);

      clearInterval(tick);
    };
  });

  const onTick = () => {
    isSnakeOutside(snake) || isEatingItself(snake)
      ? setPlayground({ ...playground, isGameOver: true })
      : moveSnake();
  };

  const moveSnake = () => {
    const isEating = isSnakeEating(snake, snack);

    const head = snakeHead(snake);
    const currentDirection = playground.direction;
    const updateDirectionFunc = DIRECTION_POSITIONS[currentDirection];
    const nextPosition = updateDirectionFunc(head.x, head.y);

    const tail = isEating ? snake.positions : snakeBody(snake);
    setSnake({ positions: [nextPosition, ...tail] });

    const snackPosition = isEating ? generateRandomPosition() : snack.position;
    setSnack({ position: snackPosition });
  };

  const onDirectionChanged = (event) => {
    if (KEY_MAPPER[event.keyCode]) {
      const direction = KEY_MAPPER[event.keyCode];
      setPlayground({ direction: direction });
    }
  };

  return (
    <div className="app">
      <h1>Snake</h1>
      <Grid isGameOver={playground.isGameOver} snake={snake} snack={snack} />
    </div>
  );
}

const Grid = ({ isGameOver, snake, snack }) => (
  <div>
    {
      GRID.map(y =>
        <Row
          y={y}
          isGameOver={isGameOver}
          snake={snake}
          snack={snack}
          key={y}
      />)
    }
  </div>
);

const Row = ({ y, isGameOver, snake, snack }) => (
  <div className="grid-row">
    {
      GRID.map(x =>
        <Cell
          y={y}
          x={x}
          isGameOver={isGameOver}
          snake={snake}
          snack={snack}
          key={x}
        />)
    }
  </div>
);

const Cell = ({ x, y, isGameOver, snake, snack }) => (
  <div className={getClassNames(x, y, isGameOver, snake, snack)} />
);

export default App;
