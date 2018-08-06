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

/**
 * A Corgi
 **/
//% blockNamespace=corgi color="#d2b48c" blockGap=8
class Corgi {
    player: Sprite;
    stillAnimation: Image[];
    private _leftAnimation: Image[];
    private _rightAnimation: Image[];

    maxMoveVelocity: number;
    gravity: number;
    jumpVelocity: number;
    maxJump: number;

    private initJump: boolean;
    private releasedJump: boolean;
    private count: number;
    private touching: number;
    private remainingJump: number;
    private script: string[];

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

        this.stillAnimation = corgi._corgi_still;
        this._leftAnimation = corgi._corgi_left;
        this._rightAnimation = corgi._corgi_right;

        this.player = sprites.create(this.stillAnimation[0], kind);
        this.player.setFlag(SpriteFlag.StayInScreen, true);
        this.player.ay = this.gravity;
        this.player.x = x;
        this.player.y = y;
    }

    set leftAnimation(input: Image[]) {
        this._leftAnimation = input;
        this._rightAnimation = corgi.reflect(input);
    }

    /**
     * Make the character move in the direction indicated by the left and right arrow keys.
     * @param decelerationRate rate at which corgi should maintain momentum after arrow keys have been released, eg: 0.7
     */
    //% group="Movement"
    //% blockId=horizontalMovement block="make %corgi(myCorg) move left and right with arrow keys"
    //% weight=100 blockGap=5
    horizontalMovement(decelerationRate: number = 0.7): void {
        let _this = this
        game.onUpdate(function () {
            let dir: number = controller.dx();

            _this.player.vx = dir ? corgi.normalize(dir) * _this.maxMoveVelocity :
                                    corgi.roundTowardsZero(_this.player.vx * decelerationRate);
        })
    }

    /**
     * Make the character jump when the up arrow key is pressed, and grab onto the wall when falling.
     */
    //% group="Movement"
    //% blockId=verticalMovement block="make %corgi(myCorg) jump if up arrow key is pressed"
    //% weight=100 blockGap=5
    verticalMovement(): void {
        let _this = this
        controller.up.onEvent(ControllerButtonEvent.Released, function () {
            _this.releasedJump = true;
        })

        game.onUpdate(function () {
            if (controller.up.isPressed()) {
                if (_this.contactLeft() && controller.right.isPressed()
                        || _this.contactRight() && controller.left.isPressed()) {
                    _this.remainingJump = Math.max(_this.remainingJump + 1, _this.maxJump);
                }
                if (_this.remainingJump > 0 && _this.releasedJump) {
                    _this.releasedJump = false;
                    if (_this.initJump) {
                        _this.player.vy = -1 * _this.jumpVelocity;
                        _this.initJump = false;
                    } else {
                        _this.player.vy = Math.clamp((-4 * _this.jumpVelocity) / 3, -30,
                                _this.player.vy - _this.jumpVelocity);
                    }
                    _this.remainingJump--;
                }
            }

            if ((_this.contactLeft() && controller.left.isPressed()
                    || _this.contactRight() && controller.right.isPressed())
                    && _this.player.vy > - 10) {
                _this.player.ay = _this.gravity >> 2;
            } else {
                _this.player.ay = _this.gravity
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
    //% blockId=followCorgi block="make camera follow %corgi(myCorg) left and right"
    //% weight=90 blockGap=5
    follow(): void {
        let _this = this
        game.onUpdate(function () {
            scene.centerCameraAt(_this.player.x, screen.height >> 1)
        })
    }
    
    /**
     * Make the character change sprites when moving.
     */
    //% group="Movement"
    //% blockId=updateSprite block="change image when %corgi(myCorg) is moving"
    //% weight=100 blockGap=5
    updateSprite(): void {
        let _this = this;
        game.onUpdate(function () {
            _this.count++;

            if (_this.player.vx == 0)        _this.player.setImage(_this.pickNext(_this.stillAnimation, 6));
            else if (_this.player.vx < 0)    _this.player.setImage(_this.pickNext(_this._leftAnimation));
            else                             _this.player.setImage(_this.pickNext(_this._rightAnimation));
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
    bark() {
        this.player.say(Math.pickRandom(this.script), 250);
    }
    
    // Grab the next Image to use from the given array, based off the current _count
    private pickNext(input: Image[], state: number = 3): Image {
        return input[(this.count / state) % input.length];
    }
    
    // Check if there is contact to the left; this includes tilemap walls and the boundaries of the screen
    private contactLeft(): boolean {
        return this.player.left <= this.touching
                || this.player.isHittingTile(CollisionDirection.Left);
    }

    // Check if there is contact to the right; this includes tilemap walls and the boundaries of the screen
    private contactRight(): boolean {
        return screen.width - this.player.right <= this.touching
                || this.player.isHittingTile(CollisionDirection.Right);
    }

    // Check if there is contact to below; this includes tilemap walls and the boundaries of the screen
    private contactBelow(): boolean {
        return screen.height - this.player.bottom <= this.touching
                || this.player.isHittingTile(CollisionDirection.Bottom);
    }
}