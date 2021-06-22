radio.onReceivedNumber(function (receivedNumber) {
    left_wheel = receivedNumber
})
let left_wheel = 0
radio.setGroup(1)
let right_wheel = 0
left_wheel = 0
basic.forever(function () {
    servos.P0.run(right_wheel)
    servos.P1.run(left_wheel)
})
