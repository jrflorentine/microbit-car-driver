radio.onReceivedNumber(function (receivedNumber) {
    controller = receivedNumber
})
let controller = 0
radio.setGroup(1)
controller = 0
basic.forever(function () {
    if (controller > 0) {
        pins.servoWritePin(AnalogPin.P12, Math.map(controller, 0, 100, 90, 180))
        pins.servoWritePin(AnalogPin.P16, Math.map(100 - controller, 0, 100, 90, 180))
    } else if (controller < 0) {
        pins.servoWritePin(AnalogPin.P16, Math.map(Math.abs(controller), -100, 0, -180, 90))
        pins.servoWritePin(AnalogPin.P12, Math.map(100 - Math.abs(controller), -100, 0, -180, 90))
    } else {
        pins.servoWritePin(AnalogPin.P12, 90)
        pins.servoWritePin(AnalogPin.P16, 90)
    }
})
