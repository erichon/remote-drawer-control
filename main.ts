input.onButtonPressed(Button.A, function () {
    radio.sendValue("forward", speed)
    basic.pause(500)
    radio.sendValue("stop", speed)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("stop", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("backward", speed)
    basic.pause(2000)
    radio.sendValue("stop", speed)
})
let speed = 0
radio.setGroup(1)
speed = 100
