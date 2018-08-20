/**
* Corgi Platformer Blocks
*/
//% weight=100 color=#d2b48c icon="\uf1b0"
//% groups='["Create", "Movement", "Speak", "Properties"]'
namespace corgi {
    export let _corgi_still: Image[] = [
        img`
            . . . . . . . . . . . . . . . .
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

    export let _corgi_left: Image[] = [
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

    export let _corgi_right: Image[] = reflect(_corgi_left);

    /**
     * Creates a new dart from an image and kind
     * @param kind the kind to make the corgi 
     * @param x optional initial x position, eg: 10
     * @param y optional initial y position, eg: 70
     */
    //% blockId=corgiCreate block="corgi of kind %kind=spritetype || at x %x y %y"
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% blockSetVariable=myCorg
    //% weight=100
    //% group="Create"
    export function create(kind: number,
        x: number = 10,
        y: number = 70): Corgi {
        return new Corgi(kind, x, y);
    }

    // Round input towards 0; 1.4 becomes 1.0, -0.4 becomes 0.0
    export function roundTowardsZero(input: number): number {
        return Math.floor(input) + input < 0 ? 1 : 0;
    }

    // Normalize input number to 0, 1, or -1
    export function normalize(input: number): number {
        return input ? input / Math.abs(input) : 0;
    }

    // Set the animation for looking right to be the opposite of looking left
    export function reflect(input: Image[]): Image[] {
        let output: Image[] = [];
        for (let i: number = 0; i < input.length; i++) {
            let nextImage = input[i].clone();
            nextImage.flipX();
            output.push(nextImage);
        }
        return output;
    }
}

enum CorgiFlags {
    None = 0,
    HorizontalMovement = 1 << 0,
    VerticalMovement = 1 << 1,
    UpdateSprite = 1 << 2,
    CameraFollow = 1 << 3,
    All = ~(~0 << 4)
}

/**
 * A Corgi
 **/
//% blockNamespace=corgi color="#d2b48c" blockGap=8
class Corgi {
    player: Sprite;
    stillAnimation: Image[];
    private _leftAnimation: Image[];
    private _rightAnimation: Image[];

    //% group="Properties" blockSetVariable="myCorg"
    //% blockCombine block="horizontal speed"
    maxMoveVelocity: number;
    //% group="Properties" blockSetVariable="myCorg"
    //% blockCombine block="gravity"
    gravity: number;
    //% group="Properties" blockSetVariable="myCorg"
    //% blockCombine block="jump speed"
    jumpVelocity: number;
    //% group="Properties" blockSetVariable="myCorg"
    //% blockCombine block="max jumps in a row"
    maxJump: number;
    //% group="Properties" blockSetVariable="myCorg"
    //% blockCombine block="rate horizontal movement is slowed"
    decelerationRate: number;

    private controlFlags: number;
    private initJump: boolean;
    private releasedJump: boolean;
    private count: number;
    private touching: number;
    private remainingJump: number;
    private script: string[];
    private ball: Sprite;

    public constructor(kind: number, x: number, y: number) {
        this.maxMoveVelocity = 70;
        this.gravity = 300;
        this.jumpVelocity = 125;

        this.initJump = true;
        this.releasedJump = true;
        this.maxJump = 2;
        this.count = 0;
        this.touching = 2;
        this.remainingJump = this.maxJump;
        this.script = [
            "bork",
            "bork bork",
            "pant",
            "wag"
        ];

        this.controlFlags = CorgiFlags.None;

        this.stillAnimation = corgi._corgi_still;
        this._leftAnimation = corgi._corgi_left;
        this._rightAnimation = corgi._corgi_right;

        this.player = sprites.create(this.stillAnimation[0], kind);
        this.player.setFlag(SpriteFlag.StayInScreen, true);
        this.player.ay = this.gravity;
        this.player.x = x;
        this.player.y = y;
    }

    /**
     * Gets the Corgis's sprite
     */
    //% group="Properties"
    //% blockId=corgSprite block="%corgi(myCorg) sprite"
    //% weight=8
    get sprite(): Sprite {
        return this.player;
    }

    /**
     * Set animation for moving left and right (right will be generated by reflecting left)
     */
    //% group="Properties"
    //% blockId=corgLeftAnimation block="set %corgi(myCorg) left animation to %input"
    //% weight=8
    leftAnimation(input: Image[]): void {
        this._leftAnimation = input;
        this._rightAnimation = corgi.reflect(input);
    }

    /**
     * Make the character move in the direction indicated by the left and right arrow keys.
     */
    //% group="Movement"
    //% blockId=horizontalMovement block="make %corgi(myCorg) move left and right with arrow keys || %on=toggleOnOff"
    //% weight=100 blockGap=5
    horizontalMovement(on: boolean = true): void {
        let _this = this;

        this.updateFlags(on, CorgiFlags.HorizontalMovement);
        _this.ball = undefined;

        game.onUpdate(function () {
            if (!(_this.controlFlags & CorgiFlags.HorizontalMovement)) return;
            let dir: number = controller.dx();

            _this.player.vx = dir ? corgi.normalize(dir) * _this.maxMoveVelocity :
                    corgi.roundTowardsZero(_this.player.vx * _this.decelerationRate);
        })
    }

    /**
     * Make the character jump when the up arrow key is pressed, and grab onto the wall when falling.
     */
    //% group="Movement"
    //% blockId=verticalMovement block="make %corgi(myCorg) jump if up arrow key is pressed || %on=toggleOnOff"
    //% weight=100 blockGap=5
    verticalMovement(on: boolean = true): void {
        let _this = this;

        this.updateFlags(on, CorgiFlags.VerticalMovement);
        _this.ball = undefined;

        controller.up.onEvent(ControllerButtonEvent.Released, function () {
            _this.releasedJump = true;
        })

        game.onUpdate(function () {
            if (!(_this.controlFlags & CorgiFlags.VerticalMovement)) return;

            if (controller.up.isPressed()) {
                if (_this.contactLeft() && controller.right.isPressed()
                    || _this.contactRight() && controller.left.isPressed()) {
                    _this.remainingJump = Math.max(_this.remainingJump + 1, _this.maxJump);
                }
                _this.jumpImpulse();
                // if (_this.remainingJump > 0 && _this.releasedJump) {
                //     _this.releasedJump = false;
                //     if (_this.initJump) {
                //         _this.player.vy = -1 * _this.jumpVelocity;
                //         _this.initJump = false;
                //     } else {
                //         _this.player.vy = Math.clamp((-4 * _this.jumpVelocity) / 3, -30,
                //                 _this.player.vy - _this.jumpVelocity);
                //     }
                //     _this.remainingJump--;
                // }
            }

            if ((_this.contactLeft() && controller.left.isPressed()
                    || _this.contactRight() && controller.right.isPressed())
                    && _this.player.vy > - 10) {
                _this.player.ay = _this.gravity >> 2;
            } else {
                _this.player.ay = _this.gravity;
            }

            if (_this.contactBelow()) {
                if (_this.initJump)
                    _this.remainingJump = _this.maxJump;
                _this.initJump = true;
            }
        })
    }

    /**
     * Set camera to follow corgi horizontally, while keeping the screen centered vertically.
     */
    //% group="Movement"
    //% blockId=followCorgi block="make camera follow %corgi(myCorg) left and right || %on=toggleOnOff"
    //% weight=90 blockGap=5
    follow(on: boolean = true): void {
        let _this = this;

        this.updateFlags(on, CorgiFlags.CameraFollow);

        game.onUpdate(function () {
            if (_this.controlFlags & CorgiFlags.CameraFollow) {
                scene.centerCameraAt(_this.player.x, screen.height >> 1);
            }
        })
    }

    /**
     * Make the character change sprites when moving.
     */
    //% group="Movement"
    //% blockId=updateSprite block="change image when %corgi(myCorg) is moving || %on=toggleOnOff"
    //% weight=100 blockGap=5
    updateSprite(on: boolean = true): void {
        let _this = this;

        this.updateFlags(on, CorgiFlags.UpdateSprite);

        game.onUpdate(function () {
            if (!(_this.controlFlags & CorgiFlags.UpdateSprite)) return;

            _this.count++;

            if (_this.player.vx == 0) _this.player.setImage(_this.pickNext(_this.stillAnimation, 6));
            else if (_this.player.vx < 0) _this.player.setImage(_this.pickNext(_this._leftAnimation));
            else _this.player.setImage(_this.pickNext(_this._rightAnimation));
        })
    }

    /**
     * Add the a new way phrase for the character to say
     * @param input phrase to add to script, eg: "bark"
     */
    //% group="Speak"
    //% blockId=addScript block="teach %corgi(myCorg) the word %input"
    //% weight=95 blockGap=5
    addToScript(input: string): void {
        this.script.push(input);
    }

    /**
     * Have the character say one of the phrases in the script at random
     */
    //% group="Speak"
    //% blockId=bark block="make %corgi(myCorg) bark!"
    //% weight=95 blockGap=5
    bark(): void {
        this.player.say(Math.pickRandom(this.script), 250);
    }

    /**
     * Make corgi follow sprite until it touches the sprite. 
     * Cancels user motion controls (horizontal and vertical movement)
     * @param ball sprite to follow
     */
    //% group="Movement"
    //% blockId=fetch block="make %corgi(myCorg) fetch %ball=variables_get(mySprite)"
    //% weight=10 blockGap=5
    fetch(ball: Sprite): void {
        this.updateFlags(false, CorgiFlags.HorizontalMovement);
        this.updateFlags(false, CorgiFlags.VerticalMovement);
        this.ball = ball;
        let _this = this;

        _this.player.ay = _this.gravity;

        game.onUpdate(function () {
            if (!_this.ball || (_this.ball.flags & sprites.Flag.Destroyed)) {
                _this.ball = undefined;
                return;
            }
            let xDiff = _this.ball.x - _this.sprite.x;
            let yDiff = _this.ball.y - _this.sprite.y;
            if (Math.abs(xDiff) < 3 && Math.abs(yDiff) < 3) {
                // Corgi has caught ball
                _this.ball = undefined;
                _this.sprite.vx = 0;
                _this.sprite.vy = 0;
                return;
            }
            _this.sprite.vx = corgi.normalize(xDiff) * _this.maxMoveVelocity;
            if (yDiff < 0 && Math.percentChance(5)) {
                _this.jumpImpulse();
                _this.releasedJump = true;
            }

            if (!_this.remainingJump) {
                control.runInParallel(function () {
                    pause(1000);
                    _this.remainingJump = _this.maxJump;
                    _this.initJump = true;
                })
            }
        })
    }

    // Creates a jump if possible
    jumpImpulse() {
        if (this.remainingJump > 0 && this.releasedJump) {
            this.releasedJump = false;
            if (this.initJump) {
                this.player.vy = -1 * this.jumpVelocity;
                this.initJump = false;
            } else {
                this.player.vy = Math.clamp((-4 * this.jumpVelocity) / 3, -30,
                        this.player.vy - this.jumpVelocity);
            }
            this.remainingJump--;
        }
    }

    private updateFlags(on: boolean, flag: CorgiFlags): void {
        if (on) this.controlFlags |= flag;
        else this.controlFlags &= CorgiFlags.All ^ flag;
    }

    // Grab the next Image to use from the given array, based off the current _count
    private pickNext(input: Image[], state: number = 3): Image {
        return input[(this.count / state) % input.length];
    }

    // Check if there is contact to the left; this includes tilemap walls and the boundaries of the screen
    private contactLeft(): boolean {
        let screenEdge = game.currentScene().camera.offsetX;
        return this.player.left - screenEdge <= this.touching
            || this.player.isHittingTile(CollisionDirection.Left);
    }

    // Check if there is contact to the right; this includes tilemap walls and the boundaries of the screen
    private contactRight(): boolean {
        let screenEdge = screen.width + game.currentScene().camera.offsetX;
        return screenEdge - this.player.right <= this.touching
            || this.player.isHittingTile(CollisionDirection.Right);
    }

    // Check if there is contact to below; this includes tilemap walls and the boundaries of the screen
    private contactBelow(): boolean {
        let screenEdge = screen.height + game.currentScene().camera.offsetY;
        return screenEdge - this.player.bottom <= this.touching
            || this.player.isHittingTile(CollisionDirection.Bottom);
    }
}
