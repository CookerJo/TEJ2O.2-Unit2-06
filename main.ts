/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah
 * Created on: Feb 2026
 * this program will will show a check mark when a is pressed when button b is pressed it shows an x.
 * 
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0) // this turns the pin off

// turns light on
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

// turns light off
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
