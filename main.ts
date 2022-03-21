basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.North)
    } else if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.South)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
    }
})
