import RubiksCube from './RubiksCube'
import Color from './Color'
import RubikCubeEmulator from './RubikCubeEmulator'

const frontSide: Color[] = [
    Color.White, Color.White, Color.White,
    Color.White, Color.White, Color.White,
    Color.White, Color.White, Color.White,
]

const rightSide: Color[] = [
    Color.Blue, Color.Blue, Color.Blue,
    Color.Blue, Color.Blue, Color.Blue,
    Color.Blue, Color.Blue, Color.Blue,
]

const leftSide: Color[] = [
    Color.Green, Color.Green, Color.Green,
    Color.Green, Color.Green, Color.Green,
    Color.Green, Color.Green, Color.Green,
]

const backSide: Color[] = [
    Color.Yellow, Color.Yellow, Color.Yellow,
    Color.Yellow, Color.Yellow, Color.Yellow,
    Color.Yellow, Color.Yellow, Color.Yellow,
]

const downSide: Color[] = [
    Color.Red, Color.Red, Color.Red,
    Color.Red, Color.Red, Color.Red,
    Color.Red, Color.Red, Color.Red,
]

const upSide: Color[] = [
    Color.Orange, Color.Orange, Color.Orange,
    Color.Orange, Color.Orange, Color.Orange,
    Color.Orange, Color.Orange, Color.Orange,
]

const rubiksCube = new RubiksCube(frontSide, leftSide, rightSide, backSide, upSide, downSide)
const emulator = new RubikCubeEmulator(rubiksCube)

rubiksCube.Render()
emulator.turnFrontSideLeft()
rubiksCube.Render()
