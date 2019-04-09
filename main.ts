let val = 0
let score = 0
let bal: game.LedSprite = null
let paddle: game.LedSprite = null
let snelheid = 0
input.onButtonPressed(Button.A, function () {
    paddle.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    paddle.change(LedSpriteProperty.X, 1)
})
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Square)
basic.clearScreen()
basic.showString("GO!")
snelheid = 1000
score = 0
val = 0
bal = game.createSprite(2, 0)
paddle = game.createSprite(2, 4)
basic.pause(500)
basic.forever(function () {
    if (bal.isTouching(paddle)) {
        bal.delete()
        bal = game.createSprite(Math.randomRange(0, 4), 0)
        score += 1
        val = 0
        basic.pause(500)
    } else if (bal.isTouchingEdge() && val == 4) {
        bal.delete()
        paddle.delete()
        basic.clearScreen()
        game.setScore(score)
        game.gameOver()
    } else {
        snelheid += -10
        bal.change(LedSpriteProperty.Y, 1)
        val += 1
        basic.pause(snelheid)
    }
})
