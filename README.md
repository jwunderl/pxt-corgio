# pxt-corgio

[Example game using Corgio](https://makecode.com/_UjahFKWcJ4z9)

## Quick Reference

## corgi namespace blocks

```ts
corgi.create(kind: number, x: number = 10, y: number = 70): Corgi
```

* create a new Corgi with the given kind. Optionally pass inital x / y coordinates

## Corgi blocks

### Movement

```ts
Corgi.horizontalMovement(on: boolean): void
```

* Make the character move in the direction indicated by the left and right arrow keys.
* @param on set whether motion is turned on or off [optional]

```ts
Corgi.verticalMovement(on: boolean): void
```

* Make the character jump when the up arrow key is pressed, and grab onto the wall when falling.
* Interacts with the edges of the screen, and walls in a tilemap.
* @param on set whether motion is turned on or off [optional]

```ts
Corgi.updateSprite(on: boolean): void
```

* Make the character change sprites when moving.
* @param on set whether updating image is turned on or off [optional]

```ts
Corgi.follow(on: boolean): void
```

* Set camera to follow corgi horizontally, while keeping the screen centered vertically.
* @param on set whether camera follow is turned on or off [optional]

```ts
Corgi.fetch(ball: Sprite): void
```

* Make corgi follow the ball until it 'catches' (gets close to) the ball
* Cancels user control of Corgi
* Currently in **beta**; behavior may become more robust (not move back and forth when at same x, interact with tilemap) in future updates

### Corgi Properties

* horizontal speed: Max speed for corgi to move left and right
* gravity: force of gravity to apply to corgi
* jump speed: rate at which corgi initally jumps
* max jumps in a row: how many times corgi can jump without hitting the ground or a wall
* rate horizontal movement is slowed: rate at which speed drops off after left or right is released

```ts
Corgi.sprite
```

> The sprite used to represent the Corgi on screen

```ts
Corgi.leftAnimation(input: Image[]): void
```
```ts
Corgi.stillAnimation
```

* Change the images used to represent the corgi; all images in the array will be cycled through to 'animate' the corgi. Setting the left animation will automatically update the animation for moving right as well.

### Speak

```ts
Corgi.addToScript(input: string): void
```

* Add the a new way phrase for the character to say
* @param input phrase to add to script, eg: "bark"

```ts
Corgi.bark(): void
```

* Have the character say one of the phrases in the script at random

## License

MIT

Copyright 2018 Joseph Wunderlich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Icon
 
* [Source](https://www.flickr.com/photos/evocateur/6342533395/in/photostream/)
* [License](https://creativecommons.org/licenses/by-sa/2.0/)
* Changes: Cropped to 16x9 png

## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)
