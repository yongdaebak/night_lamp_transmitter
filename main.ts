let pir = 0
radio.setGroup(1)
basic.forever(function () {
    pir = pins.digitalReadPin(DigitalPin.P0)
    radio.sendValue("sound", input.soundLevel())
    radio.sendValue("motion", pir)
})
