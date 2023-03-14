enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("hola")
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.pause(100)
    basic.showString("T")
    basic.pause(1400)
    basic.clearScreen()
    basic.pause(1400)
    basic.showNumber(input.temperature())
    if (input.temperature() <= 20) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
        basic.clearScreen()
        basic.showString("Empieza el calor")
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Luz")
    basic.pause(500)
    led.plotBarGraph(
    1,
    1
    )
    if (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
    led.plotBarGraph(
    input.lightLevel(),
    260
    )
    if (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.soundLevel()))
    basic.pause(1000)
    basic.showNumber(input.soundLevel())
    if (input.temperature() <= 100) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showIcon(IconNames.Surprised)
        basic.pause(1000)
        basic.clearScreen()
    }
})
radio.setGroup(0)
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
basic.showString("Hola")
basic.pause(100)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.clearScreen()
