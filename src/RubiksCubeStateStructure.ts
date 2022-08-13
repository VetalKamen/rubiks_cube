import Color from './color'

class RubiksCubeStateStructure {
  public frontSide: Color[];
  public leftSide: Color[];
  public rightSide: Color[];
  public backSide: Color[];
  public upSide: ReadonlyArray<Color>;
  public downSide: Color[];

  constructor(
    frontSide: Color[],
    leftSide: Color[],
    rightSide: Color[],
    backSide: Color[],
    upSide: Color[],
    downSide: Color[],
  ) {
    if (frontSide.length != 9) throw new Error('frontSide length is not 9')
    if (leftSide.length != 9) throw new Error('leftSide length is not 9')
    if (rightSide.length != 9) throw new Error('rightSide length is not 9')
    if (backSide.length != 9) throw new Error('backSide length is not 9')
    if (upSide.length != 9) throw new Error('upSide length is not 9')
    if (downSide.length != 9) throw new Error('downSide length is not 9')

    this.frontSide = frontSide
    this.leftSide = leftSide
    this.rightSide = rightSide
    this.backSide = backSide
    this.upSide = upSide
    this.downSide = downSide
  }
}

export {RubiksCubeStateStructure}
