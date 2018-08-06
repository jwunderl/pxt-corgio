# pxt-corgio

[Example game using Corgio](https://makecode.com/_JvACaC3ed2oH)

## Quick Reference

### Movement
```ts
function horizontalMovement(decelerationRate: number): void
```
> Make the character move in the direction indicated by the left and right arrow keys.
> [optional] @param decelerationRate rate at which corgi should maintain momentum after arrow keys have been released, eg: 0.7

```ts
function verticalMovement(): void
```
> Make the character jump when the up arrow key is pressed, and grab onto the wall when falling.
> Interacts with the edges of the screen, and walls in a tilemap.

```ts
function updateSprite(): void
```
> Make the character change sprites when moving.

```ts
function followCorgi(): void
```
> Set camera to follow corgi horizontally, while keeping the screen centered vertically.

### Properties
```ts
function setGravity(gravity: number): void
```
> Sets the rate of gravity; increase to fall faster, decrease to fall slower.
> @param gravity rate of gravity that causes character to drop, eg: 300

```ts
function setHorizontalSpeed(rate: number): void
```
> Sets the maximum speed for moving horizontally
> @param rate maximum rate of horizontal movement, eg: 70

```ts
function setJumpVelocity(rate: number): void
```
> Sets the initial jump velocity
> @param rate initial jumping speed, eg: 125

```ts
function setStill(imgs: Image[]): void
```
> Set animation for when corgi is standing still.
> @param imgs array of images to set animation to

```ts
function setLookLeft(imgs: Image[]): void
```
> Set animation for when corgi is looking left and right. Provided Images should be facing to the left (that is, be the animation you want when the corgi moves left across the screen).
> @param imgs array of images facing left to set animation to

### Speak
```ts
function addToScript(bark: string): void
```
> Add the a new way phrase for the character to say
> @param bark phrase to add to script, eg: "bark"

```ts
function bark(): void
```
> Have the character say one of the phrases in the script at random

### Sprite
```ts
function getSprite(): Sprite
```
> Return the Corgi sprite.

### Script only
```ts
function setScript(script: string[]): void
```
> Sets the script for the sprite to provided list
> @param script for character to use, eg: ["bark", "pant"];

## License
MIT

Copyright 2018 Joseph Wunderlich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)
