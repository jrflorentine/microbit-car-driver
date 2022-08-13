radio.onReceivedString(function (receivedString) {
    controller = receivedString
})
let range2: neopixel.Strip = null
let range1: neopixel.Strip = null
let controller = ""
radio.setGroup(1)
let max_speed = 110
let min_speed = 70
let strip = neopixel.create(DigitalPin.P16, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (controller == "stop") {
        strip.clear()
        strip.show()
        pins.servoWritePin(AnalogPin.P0, 87)
        pins.servoWritePin(AnalogPin.P2, 90)
    } else if (controller == "up") {
        strip.clear()
        range1 = strip.range(4, 5)
        range1.showColor(neopixel.colors(NeoPixelColors.Blue))
        pins.servoWritePin(AnalogPin.P0, max_speed)
        pins.servoWritePin(AnalogPin.P2, min_speed)
    } else if (controller == "down") {
        strip.clear()
        range1 = strip.range(8, 2)
        range2 = strip.range(2, 3)
        range1.showColor(neopixel.colors(NeoPixelColors.Violet))
        range2.showColor(neopixel.colors(NeoPixelColors.Purple))
        pins.servoWritePin(AnalogPin.P0, min_speed)
        pins.servoWritePin(AnalogPin.P2, max_speed)
    } else if (controller == "right") {
        strip.clear()
        range1 = strip.range(6, 4)
        range2 = strip.range(2, 1)
        range1.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
        pins.servoWritePin(AnalogPin.P0, max_speed)
        pins.servoWritePin(AnalogPin.P2, max_speed)
    } else if (controller == "left") {
        strip.clear()
        range1 = strip.range(2, 5)
        range1.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.servoWritePin(AnalogPin.P0, min_speed)
        pins.servoWritePin(AnalogPin.P2, min_speed)
    } else {
        strip.clear()
        strip.show()
        pins.servoWritePin(AnalogPin.P0, 87)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
