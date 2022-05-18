import { Scene, Direction, Snake, Position } from './types';
import { checkCollision, getRandomPosition } from './canvas';
import { SNAKE_LENGTH, APPLE_COUNT } from './constants';

export function isGameOver(scene: Scene) {

  let snake = scene.snake;
  let head = snake.body[0];
  let body = snake.body.slice(1, snake.body.length);

  return body.some(segment => checkCollision(segment, head));
}

export function nextDirection(previous:Direction, next: Direction) {
  let isOpposite = (previous:Direction, next:Direction) => {
    return next.x === previous.x * -1 || next.y === previous.y * -1;
  };

  if (isOpposite(previous, next)) {
    return previous;
  }

  return next;
}
//@ts-ignore
export function move(snake:Snake, [direction, snakeLength]) {
  let nx = snake.body[0].x;
  let ny = snake.body[0].y;

  nx += 1 * direction.x;
  ny += 1 * direction.y;

  let tail:Direction |  undefined;

  if (snakeLength > snake.body.length) {
    tail = { x: nx, y: ny };
  } else {
    
    tail = snake.body.pop();
    if ( tail) {
        tail.x = nx;
        tail.y = ny;

    }
  }
  if ( tail) {

      snake.body.unshift(tail);
  }

  return snake;
}

export function eat(apples: Position[], snake:Snake) {
  let head = snake.body[0];

  for (let i = 0; i < apples.length; i++) {
    if (checkCollision(apples[i], head)) {
      apples.splice(i, 1);
      return [...apples, getRandomPosition(snake.body)];
    }
  }

  return apples;
}

export function generateSnake() {
  let snake: Snake = { body:[], eaten:[]} ;

  for (let i = SNAKE_LENGTH - 1; i >= 0; i--) {
    snake.body.push({ x: i, y: 0 });
  }

  return snake;
}

export function generateApples(): Position[] {
  let apples:Position[] = [];

  for (let i = 0; i < APPLE_COUNT; i++) {
    apples.push(getRandomPosition(apples));
  }

  return apples;
}