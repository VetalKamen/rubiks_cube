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

  public turnFrontBlockLeft(): void {
    this.blockState.turnFrontBlockLeft()
  }

  public turnFrontBlockRight(): void {}

  public turnLeftBlockLeft(): void {}
  public turnLeftBlockRight(): void {}

  public turnRightBlockLeft(): void {}
  public turnRightBlockRight(): void {}

  public turnUpBlockLeft(): void {}
  public turnUpBlockRight(): void {}

  public turnBottomBlockLeft(): void {}
  public turnBottomBlockRight(): void {}

  public turnBackBlockLeft(): void {}
  public turnBackBlockRight(): void {}
}

export default RubiksCube
