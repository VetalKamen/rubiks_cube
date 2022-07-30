import {RubiksCubeStateStructure} from './RubiksCubeStateStructure'

class RubiksCube {
  private state: RubiksCubeStateStructure;

  constructor(state: RubiksCubeStateStructure) {
    this.state = state;
  }

  public Render(): void {
    console.log(this.state)
  }
}

export default RubiksCube
