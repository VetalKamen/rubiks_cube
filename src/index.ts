import RubiksCube from './RubiksCube'
import { RubiksCubeStateStructure } from './RubiksCubeStateStructure'
import Color from './color'
import { RubiksCubeAssembler } from './RubicCubeAssembler'
import TurnService from './TurnService'

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

const state = new RubiksCubeStateStructure(
    frontSide,
    leftSide,
    rightSide,
    backSide,
    upSide,
    downSide
)

const turnService = new TurnService()
const rubiksCube = new RubiksCube(state, turnService)
const assembler = new RubiksCubeAssembler(rubiksCube)
rubiksCube.Render()
// rubiksCube.turnFrontSideLeft()
// rubiksCube.turnFrontSideRight()
rubiksCube.turnLeftSideAway()
// rubiksCube.turnLeftSideToward()
// rubiksCube.turnRightSideToward()
rubiksCube.Render()
// assembler.Assemble();
