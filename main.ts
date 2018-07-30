/**
* Corgi Platformer Blocks
*/
//% weight=100 color=#d2b48c icon="\uf1b0"
namespace corgi {
    let _player: Sprite;

    let _initJump: boolean = true;
    let _releasedJump: boolean = true;
    let _maxMoveVelocity: number = 70;
    let _gravity: number = 300;
    let _jumpVelocity: number = 125;

    // Maximum number of 'double jumps' available to the Corgi
    const _maxJump: number = 2;

    // The Corgi is 'touching' a wall if it is within this many pixels of it.
    let _touching: number = 2;
    let _remainingJump: number = _maxJump;

    // Current time / number of times updateSprite has been called
    let _count = 0;

    let _script: string[] = [
        "bork",
        "bork bork",
        "pant",
        "wag"
    ];

    let _corgi_still: Image[] = [
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . d e 4 4 4 4 4 e d . . . .
            . . . d d 4 e d e 4 d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f e f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 e 4 d e d . . . .
            . . . d d d e d e d d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 a 4 d e d . . . .
            . . . d d d e d e d d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 a 4 d e d . . . .
            . . . d d d e a e d d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 a 4 d e d . . . .
            . . . d d d e d e d d d . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 4 . . . 4 . . . . . .
            . . . . 4 f 4 d 4 f 4 . . . . .
            . . . . 4 f 4 4 4 f 4 . . . . .
            . . . . e 4 d 4 d 4 4 . . . . .
            . . . . 4 4 f 4 f 4 f . . . . .
            . . . . e 4 4 4 4 4 e . . . . .
            . . . d e d 4 4 4 d e d . . . .
            . . . d d d e d e d d d . . . .
        `,
    ];

    let _corgi_left: Image[] = [
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . . . . .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d . . . e 4 f .
            f d 4 4 4 4 4 d d e e e 4 4 4 .
            . 4 d d d 4 f d 4 4 4 4 4 4 . .
            . . 4 d d f f d d 4 4 4 4 4 4 .
            . . . . . d d d 4 4 f 4 f 4 4 .
            . . . . . . d 4 d 4 f f f 4 d d
            . . . . . . f . . . . . . . d f
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . e 4 f .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d e e e 4 4 4 .
            f d 4 4 4 4 4 d d 4 4 4 4 4 . .
            . 4 d d d 4 f d 4 4 4 4 4 4 4 .
            . . 4 d d f f d d 4 f 4 f 4 4 .
            . . . . . d d d 4 d f f f 4 d d
            . . . . . . d 4 d . . . . . d f
            . . . . . . f . . . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . e 4 f .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d e e e 4 4 4 .
            f d 4 4 4 4 4 d d 4 4 4 4 4 . .
            . 4 d d d 4 f d 4 4 4 4 4 4 4 .
            . . 4 d d f f d d 4 f 4 f 4 4 .
            . . . . d d d 4 4 d f f f 4 d d
            . . . f d 4 . . . . . . . . d f
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . e 4 f .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d e e e 4 4 4 .
            f d 4 4 4 4 4 d d 4 4 4 4 4 . .
            . 4 d d d 4 f d 4 4 4 4 4 4 . .
            . . 4 d d f f d d 4 f 4 f 4 . .
            . . . . d d d 4 4 d f f f 4 d .
            . . . f d 4 . . . . . . 4 d d .
            . . . . . . . . . . . . . f . .
            . . . . . . . . . . . . . . . .
        `,
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 4 . . . 4 . . . . . . . . .
            . 4 f 4 d 4 f 4 . . . . . . . .
            . 4 f 4 4 4 f 4 . . . . . . . .
            . 4 4 d 4 d 4 4 . . . . e 4 f .
            . e 4 f 4 f 4 e . . . . e 4 f .
            . e 4 4 4 4 4 4 d e e e 4 4 4 .
            f d 4 4 4 4 4 d d 4 4 4 4 4 . .
            . 4 d d d 4 f d 4 4 4 4 4 4 . .
            . . 4 d d f f d d 4 f 4 f 4 . .
            . . . . d 4 d 4 4 d f f f 4 d .
            . . . . d 4 . . . . . . 4 d d .
            . . . . . f . . . . . . . f . .
            . . . . . . . . . . . . . . . .
        `
    ];

    let _corgi_right: Image[];
    setLookRight();

    /**
     * Sets the rate of gravity; increase to fall faster, decrease to fall slower.
     * @param gravity rate of gravity that causes character to drop, eg: 300
     */
    //% group="Properties"
    //% blockId=setGravity block="set rate of gravity to %gravity"
    //% weight=50 blockGap=8
    export function setGravity(gravity: number): void {
        init();
        _gravity = gravity;
    }

    /**
     * Sets the maximum speed for moving horizontally
     * @param rate maximum rate of horizontal movement, eg: 70
     */
    //% group="Properties"
    //% blockId=setHorizontalSpeed block="set maximum horizontal speed to %rate"
    //% weight=50 blockGap=8
    export function setHorizontalSpeed(rate: number): void {
        init();
        _maxMoveVelocity = rate;
    }

    /**
     * Sets the initial jump velocity
     * @param rate initial jumping speed, eg: 125
     */
    //% group="Properties"
    //% blockId=setJumpVelocity block="set initial jump speed to %rate"
    //% weight=50 blockGap=8
    export function setJumpVelocity(rate: number): void {
        init();
        _jumpVelocity = rate;
    }

    /**
     * Set animation for when corgi is standing still.
     * @param imgs array of images to set animation to
     */
    //% group="Properties"
    //% blockId=setStill block="set animation for standing still to %imgs"
    //% weight=50 blockGap=5
    export function setStill(imgs: Image[]): void {
        init();

        _corgi_still = imgs;
        _player.setImage(pickNext(_corgi_still))
    }

    /**
     * Set animation for when corgi is looking left and right. Provided Images should
     * be facing to the left (that is, be the animation you want when the corgi moves left
     * across the screen).
     * @param imgs array of images facing left to set animation to
     */
    //% group="Properties"
    //% blockId=setLookLeft block="set animation for horizontal motion to %imgs (facing left)"
    //% weight=50 blockGap=5
    export function setLookLeft(imgs: Image[]): void {
        init();

        _corgi_left = imgs;
        setLookRight();
        _player.setImage(pickNext(_corgi_still))
    }

    /**
     * Sets the script for the sprite to provided list
     * @param script for character to use, eg: ["bark", "pant"];
     */
    export function setScript(script: string[]): void {
        init();
        _script = script;
    }

    /**
     * Add the a new way phrase for the character to say
     * @param bark phrase to add to script, eg: "bark"
     */
    //% group="Speak"
    //% blockId=addScript block="add %bark to script"
    //% weight=95 blockGap=5
    export function addToScript(bark: string): void {
        init();
        _script.push(bark);
    }

    /**
     * Have the character say one of the phrases in the script at random
     */
    //% group="Speak"
    //% blockId=bark block="bark!"
    //% weight=95 blockGap=5
    export function bark(): void {
        init();
        _player.say(_script.get(Math.randomRange(0, _script.length)), 250);
    }

    /**
     * Return the Corgi sprite.
     */
    //% group="Sprite"
    //% blockId=getSprite block="get the corgi sprite"
    //% weight=95 blockGap=5
    export function getSprite(): Sprite {
        init();
        return _player;
    }

    /**
     * Make the character move in the direction indicated by the left and right arrow keys.
     * @param decelerationRate rate at which corgi should maintain momentum after arrow keys have been released, eg: 0.7
     */
    //% group="Movement"
    //% blockId=horizontalMovement block="update left and right movement with arrow keys"
    //% weight=100 blockGap=5
    export function horizontalMovement(decelerationRate: number = 0.7): void {
        init();

        game.onUpdate(function () {
            let dir: number = controller.dx();

            _player.vx = dir ? normalize(dir) * _maxMoveVelocity :
                roundTowardsZero(_player.vx * decelerationRate);
        })

    }

    /**
     * Make the character jump when the up arrow key is pressed, and grab onto the wall when falling.
     */
    //% group="Movement"
    //% blockId=verticalMovement block="jump if up arrow key is pressed"
    //% weight=100 blockGap=5
    export function verticalMovement(): void {
        init();

        controller.up.onEvent(ControllerButtonEvent.Released, function () {
            _releasedJump = true;
        })

        game.onUpdate(function () {
            if (controller.up.isPressed()) {
                if (contactLeft() && controller.right.isPressed()
                    || contactRight() && controller.left.isPressed()) {
                    _remainingJump = Math.max(_remainingJump + 1, _maxJump);
                }
                if (_remainingJump > 0 && _releasedJump) {
                    _releasedJump = false;
                    if (_initJump) {
                        _player.vy = -1 * _jumpVelocity;
                        _initJump = false;
                    } else {
                        _player.vy = Math.clamp((-4 * _jumpVelocity) / 3, -30,
                            _player.vy - _jumpVelocity);
                    }
                    _remainingJump--;
                }
            }

            if ((contactLeft() && controller.left.isPressed()
                || contactRight() && controller.right.isPressed())
                && _player.vy > - 10) {
                _player.ay = _gravity >> 2;
            } else {
                _player.ay = _gravity
            }

            if (contactBelow()) {
                if (_initJump) _remainingJump = _maxJump;
                _initJump = true;
            }
        })
    }

    /**
     * Set camera to follow corgi horizontally, while keeping the screen centered vertically.
     */
    //% group="Movement"
    //% blockId=followCorgi block="make camera follow corgi left and right"
    //% weight=90 blockGap=5
    export function followCorgi(): void {
        init();

        game.onUpdate(function () {
            scene.centerCameraAt(_player.x, screen.height >> 1)
        })
    }

    /**
     * Make the character change sprites when moving.
     */
    //% group="Movement"
    //% blockId=updateSprite block="change image when corgi is moving"
    //% weight=100 blockGap=5
    export function updateSprite(): void {
        init();

        game.onUpdate(function () {
            _count++;

            if (_player.vx == 0) _player.setImage(pickNext(_corgi_still, 6));
            else if (_player.vx < 0) _player.setImage(pickNext(_corgi_left));
            else _player.setImage(pickNext(_corgi_right));
        })
    }

    /** miscellaneous helper methods **/

    // Initialize state of corgi.
    function init(): void {
        if (!_player) {
            _player = sprites.create(_corgi_still[0], 0);
            _player.setFlag(SpriteFlag.StayInScreen, true);
            _player.ay = _gravity;
        }
    }

    // Round input towards 0; 1.4 becomes 1.0, -0.4 becomes 0.0
    function roundTowardsZero(input: number): number {
        return Math.floor(input) +
                    input < 0 ? 1 : 0;
    }

    // Normalize input number to 0, 1, or -1
    function normalize(input: number): number {
        return input ? input / Math.abs(input) : 0;
    }

    // Grab the next Image to use from the given array, based off the current _count
    function pickNext(input: Image[], state: number = 3): Image {
        return input[(_count / state) % input.length];
    }

    // Check if there is contact to the left; this includes tilemap walls and the boundaries of the screen
    function contactLeft(): boolean {
        return _player.left <= _touching || _player.isHittingTile(CollisionDirection.Left);
    }

    // Check if there is contact to the right; this includes tilemap walls and the boundaries of the screen
    function contactRight(): boolean {
        return screen.width - _player.right <= _touching || _player.isHittingTile(CollisionDirection.Right);
    }

    // Check if there is contact to below; this includes tilemap walls and the boundaries of the screen
    function contactBelow(): boolean {
        return screen.height - _player.bottom <= _touching || _player.isHittingTile(CollisionDirection.Bottom);
    }

    // Set the animation for looking right to be the opposite of looking left
    function setLookRight(): void {
        _corgi_right = [];
        for (let i: number = 0; i < _corgi_left.length; i++) {
            let nextImage = _corgi_left[i].clone();
            nextImage.flipX();
            _corgi_right.push(nextImage);
        }
    }
}