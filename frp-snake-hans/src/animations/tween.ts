import { endWith, takeWhile, map } from 'rxjs/operators';
import { animationFrames } from "rxjs";

export function tween(start: number, end: number, duration: number) {
    const diff = end - start;
    return animationFrames().pipe(
      // Figure out what percentage of time has passed
      //@ts-ignore
      map(({ elapsed }) => elapsed / duration),
      // Take the vector while less than 100%
      takeWhile((v: number) => v < 1),
      // Finish with 100%
      endWith(1),
      // Calculate the distance traveled between start and end
      map((v: number) => v * diff + start)
    );
  }