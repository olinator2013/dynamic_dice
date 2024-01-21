input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, max))
})
input.onButtonPressed(Button.AB, function () {
    max = 0
    basic.showNumber(max)
})
input.onButtonPressed(Button.B, function () {
    max += 1
    basic.showNumber(max)
})
let max = 0
max = 6
