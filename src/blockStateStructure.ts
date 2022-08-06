import { type } from 'os';
import { Edge, CornerEdge, MiddleEdge, CenterCell } from './EdgesStructures'
import { RubiksCubeStateStructure } from './RubiksCubeStateStructure'

class BlockState {
  private frontSide: Edge[];
  // private leftSide: Edge[];
  // private rightSide: Edge[];
  // private backSide: Edge[];
  // private upSide: Edge[];
  // private downSide: Edge[];

  constructor({frontSide, leftSide, rightSide, upSide, downSide}: RubiksCubeStateStructure) {
    this.frontSide = [
      new CornerEdge(frontSide[0], leftSide[2], upSide[6]), new MiddleEdge(frontSide[1], upSide[7]), new CornerEdge(frontSide[2], rightSide[0] , upSide[8]),
      new MiddleEdge(frontSide[3], leftSide[5]), new CenterCell(frontSide[4]), new MiddleEdge(frontSide[5], rightSide[3]),
      new CornerEdge(frontSide[6], leftSide[8], downSide[0]), new MiddleEdge(frontSide[7], downSide[1]), new CornerEdge(frontSide[8], rightSide[6], downSide[2]),
    ]
  }

  public turnFrontBlockLeft() {
  
    // swap front left up corner => left bottom corner

    const frontLeftBottomCorner: CornerEdge = this.frontSide[6] as CornerEdge
    const frontLeftUpCorner: CornerEdge = this.frontSide[0] as CornerEdge

    frontLeftBottomCorner.front = frontLeftUpCorner.front
    frontLeftBottomCorner.side = frontLeftUpCorner.vertical
    frontLeftBottomCorner.vertical = frontLeftUpCorner.side
    // this.frontSide[6].side = this.frontSide[0].vertical
    // this.frontSide[6].vertical = this.frontSide[0].side

    // // swap up middle => left middle
    // this.frontSide[3].front = this.frontSide[1].front
    // this.frontSide[3].vertical = this.frontSide[1].vertical

    // // swap right up corner => left up corner
    // this.frontSide[0].front = this.frontSide[2].front
    // this.frontSide[0].side = this.frontSide[2].vertical
    // this.frontSide[0].vertical = this.frontSide[2].side

    // up => left
    // left => bottom
    // bottom => right
    // right => up
  }
}

export {BlockState}
