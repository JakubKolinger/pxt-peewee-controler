
radio.setGroup(143)



basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    let speedX = Math.map(x, -1024, 1024, -250, 250)
    let speedY = Math.map(y, -1024, 1024, -250, 250)

    let zatacka = Math.round(speedX)
    let rovne = Math.round(speedY)

    
    

    
    

    basic.pause(100)
})
