import {  Directions } from './snake-game/types';
import { interval, animationFrames, fromEvent } from "rxjs";
import { endWith, map,filter, takeWhile, tap, distinctUntilChanged } from "rxjs/operators";
import { tween } from "./animations/tween";
//import { tween } from "./animations/tween";
import "./snake-game/styles.css";
import { DIRECTIONS } from './snake-game/constants';

const boardEl = document.getElementById("board");
const boxEl = document.getElementById("box");

const speed = 500;
const screenChanges$ = interval(speed)
//.subscribe(updateScreen)

function updateScreen(x: number, y:number) {
  //boxEl!.style.transform = `translateX(${n*10}px)`;
  let v = 0;
  console.log(v);
  boxEl!.style.setProperty("--position-x", x.toString());
  boxEl!.style.setProperty("--position-x", y.toString());

  boxEl!.style.transform = `translateX(calc(var(--position-x) * 10px))`;
  boxEl!.style.transform = `translateX(calc(var(--position-y) * 10px))`;
}


const arrawKeys$ = fromEvent<KeyboardEvent>(document, "keydown")
arrawKeys$.pipe(
    map(arrow => DIRECTIONS[arrow.keyCode]),
    filter(Boolean),
).subscribe(d => updateScreen(d.x, d.y))

const moves$ = screenChanges$.pipe(
    
)

//.subscribe(d => console.log("direction:", d))


//   // Setup a div for us to move around
//   const div = document.createElement('div');
//   document.body.appendChild(div);
//   div.style.position = 'absolute';
//   div.style.width = '40px';
//   div.style.height = '40px';
//   div.style.backgroundColor = 'lime';
//   div.style.transform = 'translate3d(1px, 0, 0)';

//   tween(50, 600, 4000).subscribe((x: number) => {
//     div.style.transform = `translate3d(${ x }px, 100px, 5px)`;
//   });
