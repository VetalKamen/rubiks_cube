import {RubiksCubeStateStructure} from './RubiksCubeStateStructure'
import {BlockState} from './blockStateStructure'

class RubiksCube {
  public readonly state: RubiksCubeStateStructure
  private blockState: BlockState

  constructor(state: RubiksCubeStateStructure) {
    this.state = state;

    this.blockState = new BlockState(state)
    // our logic about positioning
    // translate state to block state
  }

  public Render(): void {
    console.log(this.blockState)
  }

  public turnFrontSideLeft(): void {
    this.blockState.turnFrontBlockLeft()
  }

  public turnFrontSideRight(): void {}

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
