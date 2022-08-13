import RubiksCube from './RubiksCube'
import {RubiksCubeStateStructure} from './RubiksCubeStateStructure'
import Color from './color'
import { RubiksCubeAssembler } from './RubicCubeAssembler'

const frontSide: Color[] = [
  Color.Yellow, Color.White, Color.White,
  Color.White, Color.White, Color.White,
  Color.White, Color.White, Color.White,
]

const lefttSide: Color[] = [
  Color.Blue, Color.Blue, Color.Yellow,
  Color.Blue, Color.Blue, Color.Blue,
  Color.Blue, Color.Blue, Color.Blue,
]

const rightSide: Color[] = [
  Color.Green, Color.Green, Color.Green,
  Color.Green, Color.Green, Color.Green,
  Color.Green, Color.Green, Color.Green,
]

const backSide: Color[] = [
  Color.Yellow, Color.Yellow, Color.Yellow,
  Color.Yellow, Color.Yellow, Color.Yellow,
  Color.Yellow, Color.Yellow, Color.Yellow,
]

const upSide: Color[] = [
  Color.Red, Color.Red, Color.Red,
  Color.Red, Color.Red, Color.Red,
  Color.Yellow, Color.Red, Color.Red,
]

const downSide: Color[] = [
  Color.Orange, Color.Orange, Color.Orange,
  Color.Orange, Color.Orange, Color.Orange,
  Color.Orange, Color.Orange, Color.Orange,  
]

const state = new RubiksCubeStateStructure(
  frontSide,
  lefttSide,
  rightSide,
  backSide,
  upSide,
  downSide
)

const rubiksCube = new RubiksCube(state)
const assembler = new RubiksCubeAssembler(rubiksCube)

assembler.Assemble();

