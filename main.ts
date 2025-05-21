radio.setGroup(43)
radio.setTransmitPower(7)
radio.setFrequencyBand(81)
radio.setTransmitSerialNumber(true)

let speed: number = 0
let speedOUT: number = 0
let speedIN: number = 0
let leftMotor: number = 0
let rightMotor: number = 0

basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    let speedX = Math.map(x, -1024, 1024, -250, 250)
    let speedY = Math.map(y, -1024, 1024, -250, 250)

    leftMotor = speedY - speedX
    rightMotor = speedY + speedX

    leftMotor = Math.round(leftMotor)
    rightMotor = Math.round(rightMotor)

    leftMotor = Math.constrain(leftMotor, -250, 250)
    rightMotor = Math.constrain(rightMotor, -250, 250)

    
    
    
    
    let zprava = "S|" + leftMotor + "|" + rightMotor

    radio.sendString(zprava)

    
   
})

basic.forever(function() {
    if (leftMotor > rightMotor) {
        speed = leftMotor
    }
    if (rightMotor > leftMotor) {
        speed = rightMotor
    }
    if (rightMotor === leftMotor) {
        speed = rightMotor
    }

    speedIN = Math.map(speed, -250, 250, -9, 9)
    speedOUT = Math.round(speedIN)
    speedOUT = Math.constrain(speedOUT, -9, 9)
    basic.showNumber(speedOUT * -1)
})
