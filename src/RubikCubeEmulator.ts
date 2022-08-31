import Color from './Color'
import RubiksCube from './RubiksCube'

class RubikCubeEmulator {
    private Cube: RubiksCube
    private upRowIndexes = [0, 1, 2]
    private leftRowIndexes = [0, 3, 6]
    private downRowIndexes = [6, 7, 8]
    private rightRowIndexes = [2, 5, 8]

    constructor(cube: RubiksCube) {
        this.Cube = cube
    }

    private getColorsByIndexes(side: Color[], indexes: number[]): Color[] {
        return indexes.map(index => side[index])
    }

    private setColorsByIndexes(side: Color[], indexes: number[], newColor: Color[]): void {
        indexes.map((index, increment) => side[index] = newColor[increment])
    }

    public turnSideToLeft(side: Color[]) {
        const upColors = this.getColorsByIndexes(side, this.upRowIndexes).reverse()
        const downColors = this.getColorsByIndexes(side, this.downRowIndexes).reverse()
        const leftColors = this.getColorsByIndexes(side, this.leftRowIndexes)
        const rightColors = this.getColorsByIndexes(side, this.rightRowIndexes)

        this.setColorsByIndexes(side, this.rightRowIndexes, downColors)
        this.setColorsByIndexes(side, this.upRowIndexes, rightColors)
        this.setColorsByIndexes(side, this.leftRowIndexes, upColors)
        this.setColorsByIndexes(side, this.downRowIndexes, leftColors)
    }

    public turnSideToRight(side: Color[]) {
        const upColors = this.getColorsByIndexes(side, this.upRowIndexes)
        const downColors = this.getColorsByIndexes(side, this.downRowIndexes)
        const leftColors = this.getColorsByIndexes(side, this.leftRowIndexes).reverse()
        const rightColors = this.getColorsByIndexes(side, this.rightRowIndexes).reverse()

        this.setColorsByIndexes(side, this.upRowIndexes, leftColors)
        this.setColorsByIndexes(side, this.rightRowIndexes, upColors)
        this.setColorsByIndexes(side, this.downRowIndexes, rightColors)
        this.setColorsByIndexes(side, this.leftRowIndexes, downColors)
    }

    public turnFrontSideLeft(): void {
        const upSideDownRow = this.getColorsByIndexes(this.Cube.upSide, this.downRowIndexes).reverse()
        const leftSideRightRow = this.getColorsByIndexes(this.Cube.leftSide, this.rightRowIndexes)
        const rightSideLeftRow = this.getColorsByIndexes(this.Cube.rightSide, this.leftRowIndexes)
        const downSideUpRow = this.getColorsByIndexes(this.Cube.downSide, this.upRowIndexes).reverse()

        this.setColorsByIndexes(this.Cube.leftSide, this.rightRowIndexes, upSideDownRow)
        this.setColorsByIndexes(this.Cube.downSide, this.upRowIndexes, leftSideRightRow)
        this.setColorsByIndexes(this.Cube.rightSide, this.leftRowIndexes, downSideUpRow)
        this.setColorsByIndexes(this.Cube.upSide, this.downRowIndexes, rightSideLeftRow)

        this.turnSideToLeft(this.Cube.frontSide)
    }

    public turnFrontSideRight(): void {
        const upSideDownRow = this.getColorsByIndexes(this.Cube.upSide, this.downRowIndexes)
        const leftSideRightRow = this.getColorsByIndexes(this.Cube.leftSide, this.rightRowIndexes).reverse()
        const rightSideLeftRow = this.getColorsByIndexes(this.Cube.rightSide, this.leftRowIndexes).reverse()
        const downSideUpRow = this.getColorsByIndexes(this.Cube.downSide, this.upRowIndexes)

        this.setColorsByIndexes(this.Cube.rightSide, this.leftRowIndexes, upSideDownRow)
        this.setColorsByIndexes(this.Cube.upSide, this.downRowIndexes, leftSideRightRow)
        this.setColorsByIndexes(this.Cube.leftSide, this.rightRowIndexes, downSideUpRow)
        this.setColorsByIndexes(this.Cube.downSide, this.upRowIndexes, rightSideLeftRow)

        this.turnSideToRight(this.Cube.frontSide)
    }

    public turnLeftSideAway(): void {
        const upSideLeftRow = this.getColorsByIndexes(this.Cube.upSide, this.leftRowIndexes).reverse()
        const frontSideLeftRow = this.getColorsByIndexes(this.Cube.frontSide, this.leftRowIndexes)
        const backSideRightRow = this.getColorsByIndexes(this.Cube.backSide, this.rightRowIndexes).reverse()
        const downSideLeftRow = this.getColorsByIndexes(this.Cube.downSide, this.leftRowIndexes)

        this.setColorsByIndexes(this.Cube.upSide, this.leftRowIndexes, frontSideLeftRow)
        this.setColorsByIndexes(this.Cube.backSide, this.rightRowIndexes, upSideLeftRow)
        this.setColorsByIndexes(this.Cube.downSide, this.leftRowIndexes, backSideRightRow)
        this.setColorsByIndexes(this.Cube.frontSide, this.leftRowIndexes, downSideLeftRow)

        this.turnSideToLeft(this.Cube.leftSide)
    }

    public turnLeftSideToward(): void {
        const upSideLeftRow = this.getColorsByIndexes(this.Cube.upSide, this.leftRowIndexes)
        const frontSideLeftRow = this.getColorsByIndexes(this.Cube.frontSide, this.leftRowIndexes)
        const backSideRightRow = this.getColorsByIndexes(this.Cube.backSide, this.rightRowIndexes).reverse()
        const downSideLeftRow = this.getColorsByIndexes(this.Cube.downSide, this.leftRowIndexes).reverse()

        this.setColorsByIndexes(this.Cube.upSide, this.leftRowIndexes, backSideRightRow)
        this.setColorsByIndexes(this.Cube.backSide, this.rightRowIndexes, downSideLeftRow)
        this.setColorsByIndexes(this.Cube.downSide, this.leftRowIndexes, frontSideLeftRow)
        this.setColorsByIndexes(this.Cube.frontSide, this.leftRowIndexes, upSideLeftRow)

        this.turnSideToRight(this.Cube.leftSide)
    }

    public turnRightSideAway(): void {
        const upSideRightRow = this.getColorsByIndexes(this.Cube.upSide, this.rightRowIndexes).reverse()
        const rightRowSideFront = this.getColorsByIndexes(this.Cube.frontSide, this.rightRowIndexes)
        const rightRowSideBack = this.getColorsByIndexes(this.Cube.backSide, this.leftRowIndexes).reverse()
        const leftRowSideDown = this.getColorsByIndexes(this.Cube.downSide, this.rightRowIndexes)

        this.setColorsByIndexes(this.Cube.upSide, this.rightRowIndexes, rightRowSideFront)
        this.setColorsByIndexes(this.Cube.backSide, this.leftRowIndexes, upSideRightRow)
        this.setColorsByIndexes(this.Cube.downSide, this.rightRowIndexes, rightRowSideBack)
        this.setColorsByIndexes(this.Cube.frontSide, this.rightRowIndexes, leftRowSideDown)

        this.turnSideToRight(this.Cube.rightSide)
    }

    public turnRightSideToward(): void {
        const upSideRightRow = this.getColorsByIndexes(this.Cube.upSide, this.rightRowIndexes)
        const frontSideRightRow = this.getColorsByIndexes(this.Cube.frontSide, this.rightRowIndexes)
        const backSideLeftRow = this.getColorsByIndexes(this.Cube.backSide, this.leftRowIndexes).reverse()
        const downSideRightRow = this.getColorsByIndexes(this.Cube.downSide, this.rightRowIndexes).reverse()

        this.setColorsByIndexes(this.Cube.upSide, this.rightRowIndexes, backSideLeftRow)
        this.setColorsByIndexes(this.Cube.backSide, this.leftRowIndexes, downSideRightRow)
        this.setColorsByIndexes(this.Cube.downSide, this.rightRowIndexes, frontSideRightRow)
        this.setColorsByIndexes(this.Cube.frontSide, this.rightRowIndexes, upSideRightRow)

        this.turnSideToLeft(this.Cube.rightSide)
    }

    public turnUpSideLeft(): void {
        const frontSideUpRow = this.getColorsByIndexes(this.Cube.frontSide, this.upRowIndexes)
        const leftSideUpRow = this.getColorsByIndexes(this.Cube.leftSide, this.upRowIndexes)
        const rightSideUpRow = this.getColorsByIndexes(this.Cube.rightSide, this.upRowIndexes)
        const backSideUpRow = this.getColorsByIndexes(this.Cube.backSide, this.upRowIndexes)

        this.setColorsByIndexes(this.Cube.frontSide, this.upRowIndexes, rightSideUpRow)
        this.setColorsByIndexes(this.Cube.leftSide, this.upRowIndexes, frontSideUpRow)
        this.setColorsByIndexes(this.Cube.rightSide, this.upRowIndexes, backSideUpRow)
        this.setColorsByIndexes(this.Cube.backSide, this.upRowIndexes, leftSideUpRow)

        this.turnSideToRight(this.Cube.upSide)
    }

    public turnUpSideRight(): void {
        const frontSideUpRow = this.getColorsByIndexes(this.Cube.frontSide, this.upRowIndexes)
        const leftSideUpRow = this.getColorsByIndexes(this.Cube.leftSide, this.upRowIndexes)
        const rightSideUpRow = this.getColorsByIndexes(this.Cube.rightSide, this.upRowIndexes)
        const backSideUpRow = this.getColorsByIndexes(this.Cube.backSide, this.upRowIndexes)

        this.setColorsByIndexes(this.Cube.frontSide, this.upRowIndexes, leftSideUpRow)
        this.setColorsByIndexes(this.Cube.leftSide, this.upRowIndexes, backSideUpRow)
        this.setColorsByIndexes(this.Cube.rightSide, this.upRowIndexes, frontSideUpRow)
        this.setColorsByIndexes(this.Cube.backSide, this.upRowIndexes, rightSideUpRow)

        this.turnSideToLeft(this.Cube.upSide)
    }

    public turnBottomSideLeft(): void {
        const frontSideDownRow = this.getColorsByIndexes(this.Cube.frontSide, this.downRowIndexes)
        const leftSideDownRow = this.getColorsByIndexes(this.Cube.leftSide, this.downRowIndexes)
        const rightSideDownRow = this.getColorsByIndexes(this.Cube.rightSide, this.downRowIndexes)
        const backSideDownRow = this.getColorsByIndexes(this.Cube.backSide, this.downRowIndexes)

        this.setColorsByIndexes(this.Cube.frontSide, this.downRowIndexes, rightSideDownRow)
        this.setColorsByIndexes(this.Cube.leftSide, this.downRowIndexes, frontSideDownRow)
        this.setColorsByIndexes(this.Cube.rightSide, this.downRowIndexes, backSideDownRow)
        this.setColorsByIndexes(this.Cube.backSide, this.downRowIndexes, leftSideDownRow)

        this.turnSideToLeft(this.Cube.downSide)
    }

    public turnBottomSideRight(): void {
        const frontSideDownRow = this.getColorsByIndexes(this.Cube.frontSide, this.downRowIndexes)
        const leftSideDownRow = this.getColorsByIndexes(this.Cube.leftSide, this.downRowIndexes)
        const rightSideDownRow = this.getColorsByIndexes(this.Cube.rightSide, this.downRowIndexes)
        const backSideDownRow = this.getColorsByIndexes(this.Cube.backSide, this.downRowIndexes)

        this.setColorsByIndexes(this.Cube.frontSide, this.downRowIndexes, leftSideDownRow)
        this.setColorsByIndexes(this.Cube.leftSide, this.downRowIndexes, backSideDownRow)
        this.setColorsByIndexes(this.Cube.rightSide, this.downRowIndexes, frontSideDownRow)
        this.setColorsByIndexes(this.Cube.backSide, this.downRowIndexes, rightSideDownRow)

        this.turnSideToRight(this.Cube.downSide)
    }

    public turnBackSideLeft(): void {
        const upSideUpRow = this.getColorsByIndexes(this.Cube.upSide, this.upRowIndexes).reverse()
        const leftSideLeftRow = this.getColorsByIndexes(this.Cube.leftSide, this.leftRowIndexes)
        const rightSideRightRow = this.getColorsByIndexes(this.Cube.rightSide, this.rightRowIndexes)
        const downSideDownRow = this.getColorsByIndexes(this.Cube.downSide, this.downRowIndexes).reverse()

        this.setColorsByIndexes(this.Cube.leftSide, this.leftRowIndexes, upSideUpRow)
        this.setColorsByIndexes(this.Cube.downSide, this.downRowIndexes, leftSideLeftRow)
        this.setColorsByIndexes(this.Cube.rightSide, this.rightRowIndexes, downSideDownRow)
        this.setColorsByIndexes(this.Cube.upSide, this.upRowIndexes, rightSideRightRow)

        this.turnSideToRight(this.Cube.backSide)
    }

    public turnBackSideRight(): void {
        const downSideDownRow = this.getColorsByIndexes(this.Cube.downSide, this.downRowIndexes)
        const rightSideRightRow = this.getColorsByIndexes(this.Cube.rightSide, this.rightRowIndexes).reverse()
        const leftSideLeftRow = this.getColorsByIndexes(this.Cube.leftSide, this.leftRowIndexes).reverse()
        const upSideUpRow = this.getColorsByIndexes(this.Cube.upSide, this.upRowIndexes)

        this.setColorsByIndexes(this.Cube.leftSide, this.leftRowIndexes, downSideDownRow)
        this.setColorsByIndexes(this.Cube.downSide, this.downRowIndexes, rightSideRightRow)
        this.setColorsByIndexes(this.Cube.rightSide, this.rightRowIndexes, upSideUpRow)
        this.setColorsByIndexes(this.Cube.upSide, this.upRowIndexes, leftSideLeftRow)

        this.turnSideToLeft(this.Cube.backSide)
    }
}

export default RubikCubeEmulator
