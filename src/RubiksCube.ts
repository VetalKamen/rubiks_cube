import {RubiksCubeStateStructure} from './RubiksCubeStateStructure'
import {BlockState} from './blockStateStructure'

class RubiksCube {
  private state: RubiksCubeStateStructure
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
}

export default RubiksCube
