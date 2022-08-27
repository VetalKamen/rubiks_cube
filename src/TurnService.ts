import Color from './color';

class TurnService {
    public getColorsByIndexes(side: Color[], sideVals: number[]): Color[] {
        return sideVals.map(val => side[val])
    }

    public setColorsByIndexes(side: Color[], sideVals: number[], newColor: Color[]): void {
        sideVals.map((val, index) => {
            side[val] = newColor[index]
        })
    }

    public sideSwapLeft(
        side: Color[],
        sideUpRowIndexes: number[],
        sideDownRowIndexes: number[],
        sideLeftRowIndexes: number[],
        sideRightRowIndexes: number[]
    ) {
        const upColors = this.getColorsByIndexes(side, sideUpRowIndexes).reverse()
        const downColors = this.getColorsByIndexes(side, sideDownRowIndexes).reverse()
        const leftColors = this.getColorsByIndexes(side, sideLeftRowIndexes)
        const rightColors = this.getColorsByIndexes(side, sideRightRowIndexes)

        this.setColorsByIndexes(side, sideRightRowIndexes, downColors)
        this.setColorsByIndexes(side, sideUpRowIndexes, rightColors)
        this.setColorsByIndexes(side, sideLeftRowIndexes, upColors)
        this.setColorsByIndexes(side, sideDownRowIndexes, leftColors)
    }

    public sideSwapRight(
        side: Color[],
        sideUpRowIndexes: number[],
        sideDownRowIndexes: number[],
        sideLeftRowIndexes: number[],
        sideRightRowIndexes: number[]
    ) {
        const upColors = this.getColorsByIndexes(side, sideUpRowIndexes)
        const downColors = this.getColorsByIndexes(side, sideDownRowIndexes)
        const leftColors = this.getColorsByIndexes(side, sideLeftRowIndexes).reverse()
        const rightColors = this.getColorsByIndexes(side, sideRightRowIndexes).reverse()

        this.setColorsByIndexes(side, sideUpRowIndexes, leftColors)
        this.setColorsByIndexes(side, sideRightRowIndexes, upColors)
        this.setColorsByIndexes(side, sideDownRowIndexes, rightColors)
        this.setColorsByIndexes(side, sideLeftRowIndexes, downColors)
    }

    public edgeSwapLeft(
        upSide: Color[],
        sideDownRowIndexes: number[],
        leftSide: Color[],
        sideRightRowIndexes: number[],
        rightSide: Color[],
        sideLeftRowIndexes: number[],
        downSide: Color[],
        sideUpRowIndexes: number[]
    ) {
        const downRowSideUp = this.getColorsByIndexes(upSide, sideDownRowIndexes).reverse()
        const rightRowSideLeft = this.getColorsByIndexes(leftSide, sideRightRowIndexes)
        const leftRowSideRight = this.getColorsByIndexes(rightSide, sideLeftRowIndexes)
        const upRowSideDown = this.getColorsByIndexes(downSide, sideUpRowIndexes).reverse()

        this.setColorsByIndexes(leftSide, sideRightRowIndexes, downRowSideUp)
        this.setColorsByIndexes(downSide, sideUpRowIndexes, rightRowSideLeft)
        this.setColorsByIndexes(rightSide, sideLeftRowIndexes, upRowSideDown)
        this.setColorsByIndexes(upSide, sideDownRowIndexes, leftRowSideRight)
    }

    public edgeSwapRight(
        downSide: Color[],
        sideUpRowIndexes: number[],
        rightSide: Color[],
        sideLeftRowIndexes: number[],
        leftSide: Color[],
        sideRightRowIndexes: number[],
        upSide: Color[],
        sideDownRowIndexes: number[]
    ) {
        const downRowSideUp = this.getColorsByIndexes(upSide, sideDownRowIndexes)
        const rightRowSideLeft = this.getColorsByIndexes(leftSide, sideRightRowIndexes).reverse()
        const leftRowSideRight = this.getColorsByIndexes(rightSide, sideLeftRowIndexes).reverse()
        const upRowSideDown = this.getColorsByIndexes(downSide, sideUpRowIndexes)

        this.setColorsByIndexes(rightSide, sideLeftRowIndexes, downRowSideUp)
        this.setColorsByIndexes(upSide, sideDownRowIndexes, rightRowSideLeft)
        this.setColorsByIndexes(leftSide, sideRightRowIndexes, upRowSideDown)
        this.setColorsByIndexes(downSide, sideUpRowIndexes, leftRowSideRight)
    }

    public edgeSwapLeftAway(
        upSide: Color[],
        frontSide: Color[],
        backSide: Color[],
        downSide: Color[],
        sideLeftRowIndexes: number[],
        sideRightRowIndexes: number[]
    ) {
        const leftRowSideUp = this.getColorsByIndexes(upSide, sideLeftRowIndexes).reverse()
        const rightRowSideFront = this.getColorsByIndexes(frontSide, sideLeftRowIndexes)
        const rightRowSideBack = this.getColorsByIndexes(backSide, sideRightRowIndexes).reverse()
        const leftRowSideDown = this.getColorsByIndexes(downSide, sideLeftRowIndexes)

        this.setColorsByIndexes(upSide, sideLeftRowIndexes, rightRowSideFront)
        this.setColorsByIndexes(backSide, sideRightRowIndexes, leftRowSideUp)
        this.setColorsByIndexes(downSide, sideLeftRowIndexes, rightRowSideBack)
        this.setColorsByIndexes(frontSide, sideLeftRowIndexes, leftRowSideDown)
    }

    public edgeSwapLeftToward(
        upSide: Color[],
        frontSide: Color[],
        backSide: Color[],
        downSide: Color[],
        sideLeftRowIndexes: number[],
        sideRightRowIndexes: number[]
    ) {
        const leftRowSideUp = this.getColorsByIndexes(upSide, sideLeftRowIndexes)
        const rightRowSideFront = this.getColorsByIndexes(frontSide, sideLeftRowIndexes)
        const rightRowSideBack = this.getColorsByIndexes(backSide, sideRightRowIndexes).reverse()
        const leftRowSideDown = this.getColorsByIndexes(downSide, sideLeftRowIndexes).reverse()

        this.setColorsByIndexes(upSide, sideLeftRowIndexes, rightRowSideBack)
        this.setColorsByIndexes(backSide, sideRightRowIndexes, leftRowSideDown)
        this.setColorsByIndexes(downSide, sideLeftRowIndexes, rightRowSideFront)
        this.setColorsByIndexes(frontSide, sideLeftRowIndexes, leftRowSideUp)
    }

    public edgeSwapRightAway(
        upSide: Color[],
        frontSide: Color[],
        backSide: Color[],
        downSide: Color[],
        sideLeftRowIndexes: number[],
        sideRightRowIndexes: number[]
    ) {
        const leftRowSideUp = this.getColorsByIndexes(upSide, sideRightRowIndexes).reverse()
        const rightRowSideFront = this.getColorsByIndexes(frontSide, sideRightRowIndexes)
        const rightRowSideBack = this.getColorsByIndexes(backSide, sideLeftRowIndexes).reverse()
        const leftRowSideDown = this.getColorsByIndexes(downSide, sideRightRowIndexes)

        this.setColorsByIndexes(upSide, sideRightRowIndexes, rightRowSideFront)
        this.setColorsByIndexes(backSide, sideLeftRowIndexes, leftRowSideUp)
        this.setColorsByIndexes(downSide, sideRightRowIndexes, rightRowSideBack)
        this.setColorsByIndexes(frontSide, sideRightRowIndexes, leftRowSideDown)
    }


    public edgeSwapRightToward(
        upSide: Color[],
        frontSide: Color[],
        backSide: Color[],
        downSide: Color[],
        sideLeftRowIndexes: number[],
        sideRightRowIndexes: number[]
    ) {
        const leftRowSideUp = this.getColorsByIndexes(upSide, sideRightRowIndexes)
        const rightRowSideFront = this.getColorsByIndexes(frontSide, sideRightRowIndexes)
        const rightRowSideBack = this.getColorsByIndexes(backSide, sideLeftRowIndexes).reverse()
        const leftRowSideDown = this.getColorsByIndexes(downSide, sideRightRowIndexes).reverse()

        this.setColorsByIndexes(upSide, sideRightRowIndexes, rightRowSideBack)
        this.setColorsByIndexes(backSide, sideLeftRowIndexes, leftRowSideDown)
        this.setColorsByIndexes(downSide, sideRightRowIndexes, rightRowSideFront)
        this.setColorsByIndexes(frontSide, sideRightRowIndexes, leftRowSideUp)
    }

    public edgeSwapUpSideLeft(
        frontSide: Color[],
        leftSide: Color[],
        rightSide: Color[],
        backSide: Color[],
        sideUpRowIndexes: number[]
    ) {
        const sideUpRowSideFront = this.getColorsByIndexes(frontSide, sideUpRowIndexes)
        const sideUpRowSideLeft = this.getColorsByIndexes(leftSide, sideUpRowIndexes)
        const sideUpRowSideRight = this.getColorsByIndexes(rightSide, sideUpRowIndexes)
        const sideUpRowSideBack = this.getColorsByIndexes(backSide, sideUpRowIndexes)

        this.setColorsByIndexes(frontSide, sideUpRowIndexes, sideUpRowSideRight)
        this.setColorsByIndexes(leftSide, sideUpRowIndexes, sideUpRowSideFront)
        this.setColorsByIndexes(rightSide, sideUpRowIndexes, sideUpRowSideBack)
        this.setColorsByIndexes(backSide, sideUpRowIndexes, sideUpRowSideLeft)
    }

    public edgeSwapUpSideRight(
        frontSide: Color[],
        leftSide: Color[],
        rightSide: Color[],
        backSide: Color[],
        sideUpRowIndexes: number[]
    ) {
        const sideUpRowSideFront = this.getColorsByIndexes(frontSide, sideUpRowIndexes)
        const sideUpRowSideLeft = this.getColorsByIndexes(leftSide, sideUpRowIndexes)
        const sideUpRowSideRight = this.getColorsByIndexes(rightSide, sideUpRowIndexes)
        const sideUpRowSideBack = this.getColorsByIndexes(backSide, sideUpRowIndexes)

        this.setColorsByIndexes(frontSide, sideUpRowIndexes, sideUpRowSideLeft)
        this.setColorsByIndexes(leftSide, sideUpRowIndexes, sideUpRowSideBack)
        this.setColorsByIndexes(rightSide, sideUpRowIndexes, sideUpRowSideFront)
        this.setColorsByIndexes(backSide, sideUpRowIndexes, sideUpRowSideRight)
    }

    public edgeBottomSideLeft(
        frontSide: Color[],
        leftSide: Color[],
        rightSide: Color[],
        backSide: Color[],
        sideDownRowIndexes: number[]
    ) {
        const sideDownRowSideFront = this.getColorsByIndexes(frontSide, sideDownRowIndexes)
        const sideDownRowSideLeft = this.getColorsByIndexes(leftSide, sideDownRowIndexes)
        const sideDownRowSideRight = this.getColorsByIndexes(rightSide, sideDownRowIndexes)
        const sideDownRowSideBack = this.getColorsByIndexes(backSide, sideDownRowIndexes)

        this.setColorsByIndexes(frontSide, sideDownRowIndexes, sideDownRowSideRight)
        this.setColorsByIndexes(leftSide, sideDownRowIndexes, sideDownRowSideFront)
        this.setColorsByIndexes(rightSide, sideDownRowIndexes, sideDownRowSideBack)
        this.setColorsByIndexes(backSide, sideDownRowIndexes, sideDownRowSideLeft)
    }

    public edgeBottomSideRight(
        frontSide: Color[],
        leftSide: Color[],
        rightSide: Color[],
        backSide: Color[],
        sideDownRowIndexes: number[]
    ) {
        const sideDownRowSideFront = this.getColorsByIndexes(frontSide, sideDownRowIndexes)
        const sideDownRowSideLeft = this.getColorsByIndexes(leftSide, sideDownRowIndexes)
        const sideDownRowSideRight = this.getColorsByIndexes(rightSide, sideDownRowIndexes)
        const sideDownRowSideBack = this.getColorsByIndexes(backSide, sideDownRowIndexes)

        this.setColorsByIndexes(frontSide, sideDownRowIndexes, sideDownRowSideLeft)
        this.setColorsByIndexes(leftSide, sideDownRowIndexes, sideDownRowSideBack)
        this.setColorsByIndexes(rightSide, sideDownRowIndexes, sideDownRowSideFront)
        this.setColorsByIndexes(backSide, sideDownRowIndexes, sideDownRowSideRight)
    }
}

export default TurnService
