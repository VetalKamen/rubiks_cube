import Color from './color';
import {RubiksCubeStateStructure} from './RubiksCubeStateStructure'
import TurnService from './TurnService'

class RubiksCube {
  public readonly state: RubiksCubeStateStructure
  public readonly turnService: TurnService
  public upSideVals = [0,1,2]
  public leftSideVals = [0,3,6]
  public downSideVals = [6,7,8]
  public rightSideVals = [2,5,8]

  constructor(state: RubiksCubeStateStructure, turnService: TurnService) {
    this.state = state;
    this.turnService = turnService;

    // our logic about positioning
    // translate state to block state
  }

  public Render(): any {
    console.log('FrontSide:')
    for(let i=0; i < 3; i++){
      console.log(`${this.state.frontSide[i*3]}, ${this.state.frontSide[i*3+1]}, ${this.state.frontSide[i*3+2]}`)
    }
    console.log('DownSide:')
    for(let i=0; i < 3; i++){
      console.log(`${this.state.downSide[i*3]}, ${this.state.downSide[i*3+1]}, ${this.state.downSide[i*3+2]}`)
    }
    console.log('RightSide:')
    for(let i=0; i < 3; i++){
      console.log(`${this.state.rightSide[i*3]}, ${this.state.rightSide[i*3+1]}, ${this.state.rightSide[i*3+2]}`)
    }
    console.log('UpSide:')
    for(let i=0; i < 3; i++){
      console.log(`${this.state.upSide[i*3]}, ${this.state.upSide[i*3+1]}, ${this.state.upSide[i*3+2]}`)
    }
    console.log('LeftSide:')
    for(let i=0; i < 3; i++){
      console.log(`${this.state.leftSide[i*3]}, ${this.state.leftSide[i*3+1]}, ${this.state.leftSide[i*3+2]}`)
    }
    console.log('BackSide:')
    for(let i=0; i < 3; i++){
      console.log(`${this.state.backSide[i*3]}, ${this.state.backSide[i*3+1]}, ${this.state.backSide[i*3+2]}`)
    }
    console.log('-----------------------------')
  }

  public turnFrontSideLeft(): void {
    this.turnService.edgeSwapLeft(
      this.state.upSide, this.downSideVals, 
      this.state.leftSide, this.rightSideVals,
      this.state.rightSide, this.leftSideVals,
      this.state.downSide, this.upSideVals)

    this.turnService.sideSwapLeft(
      this.state.frontSide, this.upSideVals,
      this.downSideVals, this.leftSideVals, this.rightSideVals
    )
  }

  public turnFrontSideRight(): void {
    this.turnService.edgeSwapRight(
      this.state.downSide, this.upSideVals, 
      this.state.rightSide, this.leftSideVals,
      this.state.leftSide, this.rightSideVals,
      this.state.upSide, this.downSideVals)
    this.turnService.sideSwapRight(
      this.state.frontSide, this.upSideVals,
      this.downSideVals, this.leftSideVals, this.rightSideVals
    )
  }

  public turnLeftSideAway(): void {}
  public turnLeftSideTowards(): void {}

  public turnRightSideAway(): void {}
  public turnRightSideTowards(): void {}

  public turnUpSideLeft(): void {}
  public turnUpSideRight(): void {}

  public turnBottomSideLeft(): void {}
  public turnBottomSideRight(): void {}

  public turnBackSideLeft(): void {}
  public turnBackSideRight(): void {}
}

export default RubiksCube
