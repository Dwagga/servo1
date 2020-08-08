pixel.setColor(0xffffff)
pins.D13.servoSetPulse(1500)
pins.D13.servoWrite(160)
pause(5000)
forever(function () {
    for (let index = 0; index < 400; index++) {
        pins.D13.servoWrite(90)
        pause(15)
        pixel.setColor(0xffff00)
    }
    for (let index = 0; index < 400; index++) {
        pins.D13.servoWrite(100)
        pause(15)
        pixel.setColor(0xff00ff)
    }
    for (let index = 0; index < 400; index++) {
        pins.D13.servoWrite(110)
        pause(15)
        pixel.setColor(0xff0080)
    }
    for (let index = 0; index < 400; index++) {
        pins.D13.servoWrite(120)
        pause(15)
        pixel.setColor(0xff0000)
    }
    for (let index = 0; index < 400; index++) {
        pins.D13.servoWrite(130)
        pause(15)
        pixel.setColor(0xb09eff)
    }
    for (let index = 0; index < 400; index++) {
        pins.D13.servoWrite(140)
        pause(15)
        pixel.setColor(0x7f00ff)
    }
    for (let index = 0; index < 400; index++) {
        pins.D13.servoWrite(150)
        pause(15)
        pixel.setColor(0x65471f)
    }
    for (let index = 0; index < 400; index++) {
        pins.D13.servoWrite(160)
        pause(15)
        pixel.setColor(0x000000)
    }
})
