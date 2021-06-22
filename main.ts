radio.onReceivedString(function (receivedString) {
    controller = receivedString
})
let controller = ""
let turn_speed = 0
radio.setGroup(1)
let max_speed = 110
let min_speed = 70
basic.forever(function () {
    if (controller == "stop") {
        pins.servoWritePin(AnalogPin.P12, 90)
        pins.servoWritePin(AnalogPin.P16, 90)
    } else if (controller == "forward") {
        pins.servoWritePin(AnalogPin.P12, max_speed)
        pins.servoWritePin(AnalogPin.P16, min_speed)
    } else if (controller == "back") {
        pins.servoWritePin(AnalogPin.P12, min_speed)
        pins.servoWritePin(AnalogPin.P16, max_speed)
    } else if (controller == "right") {
        pins.servoWritePin(AnalogPin.P12, max_speed)
        pins.servoWritePin(AnalogPin.P16, max_speed)
    } else if (controller == "left") {
        pins.servoWritePin(AnalogPin.P12, min_speed)
        pins.servoWritePin(AnalogPin.P16, min_speed)
    } else {
        pins.servoWritePin(AnalogPin.P12, 90)
        pins.servoWritePin(AnalogPin.P16, 90)
    }
})
basic.forever(function () {
    basic.showString(controller)
})
