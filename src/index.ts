import RubiksCube from './RubiksCube'
import {RubiksCubeStateStructure, RubiksCubeCellStructure} from './RubiksCubeStateStructure'
import Color from './color'



const frontSide: [number, Color][] = [
  [0, Color.White], [1, Color.White], [2, Color.White],
  [3, Color.White], [4, Color.White], [5, Color.White],
  [6, Color.White], [7, Color.White], [8, Color.White],
]

const lefttSide: [number, Color][] = [
  [0, Color.Blue], [1, Color.Blue], [2, Color.Blue],
  [3, Color.Blue], [4, Color.Blue], [5, Color.Blue],
  [6, Color.Blue], [7, Color.Blue], [8, Color.Blue],
]

const rightSide: [number, Color][] = [
  [0, Color.Green], [1, Color.Green], [2, Color.Green],
  [3, Color.Green], [4, Color.Green], [5, Color.Green],
  [6, Color.Green], [7, Color.Green], [8, Color.Green],
]

const backSide: [number, Color][] = [
  [0, Color.Yellow], [1, Color.Yellow], [2, Color.Yellow],
  [3, Color.Yellow], [4, Color.Yellow], [5, Color.Yellow],
  [6, Color.Yellow], [7, Color.Yellow], [8, Color.Yellow],
]

const upSide: [number, Color][] = [
  [0, Color.Red], [1, Color.Red], [2, Color.Red],
  [3, Color.Red], [4, Color.Red], [5, Color.Red],
  [6, Color.Red], [7, Color.Red], [8, Color.Red],
]

const downSide: [number, Color][] = [
  [0, Color.Orange], [1, Color.Orange], [2, Color.Orange],
  [3, Color.Orange], [4, Color.Orange], [5, Color.Orange],
  [6, Color.Orange], [7, Color.Orange], [8, Color.Orange],  
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

rubiksCube.Render()
