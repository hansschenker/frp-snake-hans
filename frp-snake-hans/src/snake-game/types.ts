export type Cell = {
    width: number;
    height: number;
}
// export type Snake = {
//     length: number;
//     direction: number;
// }

export type Position = {
    x: number;
    y: number;
  }

export type Snake = {
    body: Direction[];
    eaten: Position[]
}
export type Scene = {
    snake: Snake;
    apples: Position[];
    score: number;
  }

export type Direction = {
    x: number;
    y: number;
}

//export type Direction = 'UP' | 'DOWN' | 'RIGHT' | 'LEFT';

export type Directions = {
    [key: number]: Direction;
  }

//export const Directions: Direction[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];

export type MilliSeconds = number;

export enum ArrowKey {
    LEFT = 37,
    RIGHT = 39,
    UP = 38,
    DOWN = 40
  }