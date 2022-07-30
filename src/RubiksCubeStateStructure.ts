import Color from './color'

class RubiksCubeStateStructure {
  public frontSide: RubiksCubeCellStructure[];
  public leftSide: RubiksCubeCellStructure[];
  public rightSide: RubiksCubeCellStructure[];
  public backSide: RubiksCubeCellStructure[];
  public upSide: RubiksCubeCellStructure[];
  public downSide: RubiksCubeCellStructure[];

  constructor(
    frontSide: [number, Color][],
    leftSide: [number, Color][],
    rightSide: [number, Color][],
    backSide: [number, Color][],
    upSide: [number, Color][],
    downSide: [number, Color][],
  ) {
    if (frontSide.length != 9) throw new Error('frontSide length is not 9')
    if (leftSide.length != 9) throw new Error('leftSide length is not 9')
    if (rightSide.length != 9) throw new Error('rightSide length is not 9')
    if (backSide.length != 9) throw new Error('backSide length is not 9')
    if (upSide.length != 9) throw new Error('upSide length is not 9')
    if (downSide.length != 9) throw new Error('downSide length is not 9')

    this.frontSide = this.setSide(frontSide)
    this.leftSide = this.setSide(leftSide)
    this.rightSide = this.setSide(rightSide)
    this.backSide = this.setSide(backSide)
    this.upSide = this.setSide(upSide)
    this.downSide = this.setSide(downSide)
  }

  private setSide(side: [number, Color][]): RubiksCubeCellStructure[] {
    return side.map((data: [number, Color]): RubiksCubeCellStructure => {
      const [position, color] = data

      return new RubiksCubeCellStructure(position, color)
    })
  }
}

class RubiksCubeCellStructure {
  public position: number;
  public color: Color

  constructor(position: number, color: Color) {
    this.position = position
    this.color = color
  }
}

export {RubiksCubeStateStructure, RubiksCubeCellStructure}
