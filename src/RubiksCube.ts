import Color from './Color'

class RubiksCube {
    public readonly frontSide: Color[]
    public readonly leftSide: Color[]
    public readonly rightSide: Color[]
    public readonly backSide: Color[]
    public readonly upSide: Color[]
    public readonly downSide: Color[]

    constructor(
        frontSide: Color[],
        leftSide: Color[],
        rightSide: Color[],
        backSide: Color[],
        upSide: Color[],
        downSide: Color[]
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

    public Render(): void {
        RubiksCube.RenderSide(this.frontSide, 'Front side')
        RubiksCube.RenderSide(this.backSide, 'Back side')
        RubiksCube.RenderSide(this.leftSide, 'Left side')
        RubiksCube.RenderSide(this.rightSide, 'Right side')
        RubiksCube.RenderSide(this.upSide, 'Up side')
        RubiksCube.RenderSide(this.downSide, 'Down side')

        console.log('-----------------------------')
    }

    private static RenderSide(side: ReadonlyArray<Color>, title: string): void {
        console.log(`${title}:`)

        for (let i = 0; i < 3; i++) {
            console.log(`${side[i * 3]}, ${side[i * 3 + 1]}, ${side[i * 3 + 2]}`)
        }

        console.log()
    }
}

export default RubiksCube
