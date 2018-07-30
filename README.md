# pxt-corgio

[Example game using Corgio](https://makecode.com/_JvACaC3ed2oH)

## Quick Reference

### Movement
* `function horizontalMovement(decelerationRate: number): void`
    * Make the character move in the direction indicated by the left and right arrow keys.
    * [optional] @param decelerationRate rate at which corgi should maintain momentum after arrow keys have been released, eg: 0.7
* `function verticalMovement(): void`
    * Make the character jump when the up arrow key is pressed, and grab onto the wall when falling.
    * Interacts with the edges of the screen, and walls in a tilemap.
* `function updateSprite(): void`
    * Make the character change sprites when moving.
* `function followCorgi(): void`
    * Set camera to follow corgi horizontally, while keeping the screen centered vertically.

### Properties

* `function setGravity(gravity: number): void`
    * Sets the rate of gravity; increase to fall faster, decrease to fall slower.
    * @param gravity rate of gravity that causes character to drop, eg: 300
* `function setHorizontalSpeed(rate: number): void`
    * Sets the maximum speed for moving horizontally
    * @param rate maximum rate of horizontal movement, eg: 70
* `function setJumpVelocity(rate: number): void`
    * Sets the initial jump velocity
    * @param rate initial jumping speed, eg: 125
* `function setStill(imgs: Image[]): void`
    * Set animation for when corgi is standing still.
    * @param imgs array of images to set animation to
* `function setLookLeft(imgs: Image[]): void`
    * Set animation for when corgi is looking left and right. Provided Images should be facing to the left (that is, be the animation you want when the corgi moves left across the screen).
    * @param imgs array of images facing left to set animation to

### Speak
* `function addToScript(bark: string): void`
    * Add the a new way phrase for the character to say
    * @param bark phrase to add to script, eg: "bark"
* `function bark(): void`
    * Have the character say one of the phrases in the script at random

### Sprite
* `function getSprite(): Sprite`
    * Return the Corgi sprite.

### Script only
* `function setScript(script: string[]): void`
    * Sets the script for the sprite to provided list
    * @param script for character to use, eg: ["bark", "pant"];


## TODO
- [ ] Get your package reviewed and approved https://arcade.makecode.com/packages/approval

Read more at https://arcade.makecode.com/packages/build-your-own

## License



## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)
