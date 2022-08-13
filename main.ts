radio.onReceivedString(function (receivedString) {
    controller = receivedString
})
input.onGesture(Gesture.Shake, function () {
    range1 = strip.range(2, 8)
    range1.showRainbow(1, 360)
    for (let index = 0; index < 15; index++) {
        range1.rotate(1)
        range1.show()
        basic.pause(100)
    }
    strip.clear()
    strip.show()
})
let range2: neopixel.Strip = null
let range1: neopixel.Strip = null
let controller = ""
let strip: neopixel.Strip = null
radio.setGroup(1)
let max_speed = 110
let min_speed = 70
strip = neopixel.create(DigitalPin.P16, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (controller == "up") {
        strip.clear()
        range1 = strip.range(4, 5)
        range1.showColor(neopixel.colors(NeoPixelColors.Blue))
        servos.P0.setAngle(min_speed)
        servos.P2.setAngle(max_speed)
    } else if (controller == "down") {
        strip.clear()
        range1 = strip.range(8, 2)
        range2 = strip.range(2, 3)
        range1.showColor(neopixel.colors(NeoPixelColors.Violet))
        range2.showColor(neopixel.colors(NeoPixelColors.Purple))
        servos.P0.setAngle(max_speed)
        servos.P2.setAngle(min_speed)
    } else if (controller == "right") {
        strip.clear()
        range1 = strip.range(6, 4)
        range2 = strip.range(2, 1)
        range1.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
        servos.P0.setAngle(max_speed)
        servos.P2.setAngle(max_speed)
    } else if (controller == "left") {
        strip.clear()
        range1 = strip.range(2, 5)
        range1.showColor(neopixel.colors(NeoPixelColors.Green))
        servos.P0.setAngle(min_speed)
        servos.P2.setAngle(min_speed)
    } else {
        strip.clear()
        strip.show()
        servos.P0.stop()
        servos.P2.stop()
    }
})
