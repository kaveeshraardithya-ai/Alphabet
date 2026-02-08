input.onButtonPressed(Button.A, function () {
    Alphabet += 1
})
let Alphabet = 1
basic.forever(function () {
    if (Alphabet == 1) {
        basic.showString("A")
    } else if (Alphabet == 2) {
        basic.showString("B")
    } else if (Alphabet == 3) {
        basic.showString("C")
    } else if (Alphabet == 4) {
        basic.showString("D")
    } else if (Alphabet == 5) {
        basic.showString("E")
    } else if (Alphabet == 6) {
        basic.showString("F")
    } else if (Alphabet == 7) {
        basic.showString("G")
    } else if (Alphabet == 8) {
        basic.showString("H")
    } else if (Alphabet == 9) {
        basic.showString("I")
    } else if (Alphabet == 10) {
        basic.showString("J")
    } else if (Alphabet == 11) {
        basic.showString("K")
    } else if (Alphabet == 12) {
        basic.showString("L")
    } else if (Alphabet == 13) {
        basic.showString("M")
    } else if (Alphabet == 14) {
        basic.showString("N")
    } else if (Alphabet == 15) {
        basic.showString("O")
    } else if (Alphabet == 16) {
        basic.showString("P")
    } else if (Alphabet == 17) {
        basic.showString("Q")
    } else if (Alphabet == 18) {
        basic.showString("R")
    } else if (Alphabet == 19) {
        basic.showString("S")
    } else if (Alphabet == 20) {
        basic.showString("T")
    } else if (Alphabet == 21) {
        basic.showString("U")
    } else if (Alphabet == 22) {
        basic.showString("V")
    } else if (Alphabet == 23) {
        basic.showString("W")
    } else if (Alphabet == 24) {
        basic.showString("X")
    } else if (Alphabet == 25) {
        basic.showString("Y")
    } else if (Alphabet == 26) {
        basic.showString("Z")
        basic.pause(2000)
        basic.clearScreen()
        Alphabet = 1
    }
})
