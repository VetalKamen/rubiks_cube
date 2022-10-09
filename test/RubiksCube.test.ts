import {suite, test} from '@testdeck/mocha'
import * as _chai from 'chai'
import {expect} from 'chai'
import RubikCubeEmulator from '../src/RubikCubeEmulator'
import RubiksCube from '../src/RubiksCube'
import Color from '../src/Color'

_chai.should()
_chai.expect

@suite
class RubiksCubeTest {
    private rubicCubeEmulator: RubikCubeEmulator
    private cube: RubiksCube

    before() {
        const frontSide: Color[] = [
            Color.Orange, Color.Green, Color.Yellow,
            Color.White, Color.White, Color.Orange,
            Color.Blue, Color.Red, Color.White,
        ]

        const leftSide: Color[] = [
            Color.Red, Color.Orange, Color.Green,
            Color.Green, Color.Green, Color.Red,
            Color.Green, Color.Blue, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.Blue, Color.Yellow,
            Color.White, Color.Blue, Color.Yellow,
            Color.Orange, Color.Yellow, Color.Green,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Yellow, Color.Blue,
            Color.Red, Color.Yellow, Color.Orange,
            Color.White, Color.Blue, Color.White,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Green, Color.Green,
            Color.Blue, Color.Orange, Color.Yellow,
            Color.Yellow, Color.White, Color.Blue,
        ]

        const downSide: Color[] = [
            Color.Red, Color.Green, Color.Blue,
            Color.Red, Color.Red, Color.Orange,
            Color.Orange, Color.White, Color.Red,
        ]

        this.cube = new RubiksCube(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        this.rubicCubeEmulator = new RubikCubeEmulator(this.cube)
    }

    @test 'turnFrontBlockLeft'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Yellow, Color.Orange, Color.White,
            Color.Green, Color.White, Color.Red,
            Color.Orange, Color.White, Color.Blue,
        ]

        const leftSide: Color[] = [
            Color.Red, Color.Orange, Color.Blue,
            Color.Green, Color.Green, Color.White,
            Color.Green, Color.Blue, Color.Yellow,
        ]

        const rightSide: Color[] = [
            Color.Blue, Color.Blue, Color.Yellow,
            Color.Green, Color.Blue, Color.Yellow,
            Color.Red, Color.Yellow, Color.Green,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Yellow, Color.Blue,
            Color.Red, Color.Yellow, Color.Orange,
            Color.White, Color.Blue, Color.White,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Green, Color.Green,
            Color.Blue, Color.Orange, Color.Yellow,
            Color.Orange, Color.White, Color.Orange,
        ]

        const downSide: Color[] = [
            Color.Green, Color.Red, Color.White,
            Color.Red, Color.Red, Color.Orange,
            Color.Orange, Color.White, Color.Red,
        ]

        // Act
        this.rubicCubeEmulator.turnFrontSideLeft()

        // Expect
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnFrontSideRight'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Blue, Color.White, Color.Orange,
            Color.Red, Color.White, Color.Green,
            Color.White, Color.Orange, Color.Yellow,
        ]

        const leftSide: Color[] = [
            Color.Red, Color.Orange, Color.Red,
            Color.Green, Color.Green, Color.Green,
            Color.Green, Color.Blue, Color.Blue,
        ]

        const rightSide: Color[] = [
            Color.Yellow, Color.Blue, Color.Yellow,
            Color.White, Color.Blue, Color.Yellow,
            Color.Blue, Color.Yellow, Color.Green,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Yellow, Color.Blue,
            Color.Red, Color.Yellow, Color.Orange,
            Color.White, Color.Blue, Color.White,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Green, Color.Green,
            Color.Blue, Color.Orange, Color.Yellow,
            Color.White, Color.Red, Color.Green,
        ]

        const downSide: Color[] = [
            Color.Orange, Color.White, Color.Orange,
            Color.Red, Color.Red, Color.Orange,
            Color.Orange, Color.White, Color.Red,
        ]

        // Act
        this.rubicCubeEmulator.turnFrontSideRight()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }


    @test 'turnLeftSideAway'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Red, Color.Green, Color.Yellow,
            Color.Red, Color.White, Color.Orange,
            Color.Orange, Color.Red, Color.White,
        ]

        const leftSide: Color[] = [
            Color.Green, Color.Red, Color.White,
            Color.Orange, Color.Green, Color.Blue,
            Color.Red, Color.Green, Color.Green,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.Blue, Color.Yellow,
            Color.White, Color.Blue, Color.Yellow,
            Color.Orange, Color.Yellow, Color.Green,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Yellow, Color.Yellow,
            Color.Red, Color.Yellow, Color.Blue,
            Color.White, Color.Blue, Color.Yellow,
        ]

        const upSide: Color[] = [
            Color.Orange, Color.Green, Color.Green,
            Color.White, Color.Orange, Color.Yellow,
            Color.Blue, Color.White, Color.Blue,
        ]

        const downSide: Color[] = [
            Color.White, Color.Green, Color.Blue,
            Color.Orange, Color.Red, Color.Orange,
            Color.Blue, Color.White, Color.Red,
        ]

        // Act
        this.rubicCubeEmulator.turnLeftSideAway()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }


    @test 'turnLeftSideTowards'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Yellow, Color.Green, Color.Yellow,
            Color.Blue, Color.White, Color.Orange,
            Color.Yellow, Color.Red, Color.White,
        ]

        const leftSide: Color[] = [
            Color.Green, Color.Green, Color.Red,
            Color.Blue, Color.Green, Color.Orange,
            Color.White, Color.Red, Color.Green,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.Blue, Color.Yellow,
            Color.White, Color.Blue, Color.Yellow,
            Color.Orange, Color.Yellow, Color.Green,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Yellow, Color.Orange,
            Color.Red, Color.Yellow, Color.Red,
            Color.White, Color.Blue, Color.Red,
        ]

        const upSide: Color[] = [
            Color.White, Color.Green, Color.Green,
            Color.Orange, Color.Orange, Color.Yellow,
            Color.Blue, Color.White, Color.Blue,
        ]

        const downSide: Color[] = [
            Color.Orange, Color.Green, Color.Blue,
            Color.White, Color.Red, Color.Orange,
            Color.Blue, Color.White, Color.Red,
        ]

        // Act
        this.rubicCubeEmulator.turnLeftSideToward()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnRightSideAway'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Orange, Color.Green, Color.Blue,
            Color.White, Color.White, Color.Orange,
            Color.Blue, Color.Red, Color.Red,
        ]

        const leftSide: Color[] = [
            Color.Red, Color.Orange, Color.Green,
            Color.Green, Color.Green, Color.Red,
            Color.Green, Color.Blue, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.White, Color.Orange,
            Color.Yellow, Color.Blue, Color.Blue,
            Color.Green, Color.Yellow, Color.Yellow,
        ]

        const backSide: Color[] = [
            Color.Blue, Color.Yellow, Color.Blue,
            Color.Yellow, Color.Yellow, Color.Orange,
            Color.Green, Color.Blue, Color.White,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Green, Color.Yellow,
            Color.Blue, Color.Orange, Color.Orange,
            Color.Yellow, Color.White, Color.White,
        ]

        const downSide: Color[] = [
            Color.Red, Color.Green, Color.White,
            Color.Red, Color.Red, Color.Red,
            Color.Orange, Color.White, Color.Red,
        ]

        // Act
        this.rubicCubeEmulator.turnRightSideAway()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnRightSideTowards'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Orange, Color.Green, Color.Green,
            Color.White, Color.White, Color.Yellow,
            Color.Blue, Color.Red, Color.Blue,
        ]

        const leftSide: Color[] = [
            Color.Red, Color.Orange, Color.Green,
            Color.Green, Color.Green, Color.Red,
            Color.Green, Color.Blue, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Yellow, Color.Yellow, Color.Green,
            Color.Blue, Color.Blue, Color.Yellow,
            Color.Orange, Color.White, Color.Orange,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Yellow, Color.Blue,
            Color.Orange, Color.Yellow, Color.Orange,
            Color.Blue, Color.Blue, Color.White,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Green, Color.White,
            Color.Blue, Color.Orange, Color.Red,
            Color.Yellow, Color.White, Color.Red,
        ]

        const downSide: Color[] = [
            Color.Red, Color.Green, Color.Yellow,
            Color.Red, Color.Red, Color.Orange,
            Color.Orange, Color.White, Color.White,
        ]

        // Act
        this.rubicCubeEmulator.turnRightSideToward()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnUpSideLeft'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Orange, Color.Blue, Color.Yellow,
            Color.White, Color.White, Color.Orange,
            Color.Blue, Color.Red, Color.White,
        ]

        const leftSide: Color[] = [
            Color.Orange, Color.Green, Color.Yellow,
            Color.Green, Color.Green, Color.Red,
            Color.Green, Color.Blue, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Red, Color.Yellow, Color.Blue,
            Color.White, Color.Blue, Color.Yellow,
            Color.Orange, Color.Yellow, Color.Green,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Orange, Color.Green,
            Color.Red, Color.Yellow, Color.Orange,
            Color.White, Color.Blue, Color.White,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Blue, Color.Yellow,
            Color.White, Color.Orange, Color.Green,
            Color.Blue, Color.Yellow, Color.Green,
        ]

        const downSide: Color[] = [
            Color.Red, Color.Green, Color.Blue,
            Color.Red, Color.Red, Color.Orange,
            Color.Orange, Color.White, Color.Red,
        ]

        // Act
        this.rubicCubeEmulator.turnUpSideLeft()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnUpSideRight'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Red, Color.Orange, Color.Green,
            Color.White, Color.White, Color.Orange,
            Color.Blue, Color.Red, Color.White,
        ]

        const leftSide: Color[] = [
            Color.Red, Color.Yellow, Color.Blue,
            Color.Green, Color.Green, Color.Red,
            Color.Green, Color.Blue, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.Green, Color.Yellow,
            Color.White, Color.Blue, Color.Yellow,
            Color.Orange, Color.Yellow, Color.Green,
        ]

        const backSide: Color[] = [
            Color.Orange, Color.Blue, Color.Yellow,
            Color.Red, Color.Yellow, Color.Orange,
            Color.White, Color.Blue, Color.White,
        ]

        const upSide: Color[] = [
            Color.Green, Color.Yellow, Color.Blue,
            Color.Green, Color.Orange, Color.White,
            Color.Yellow, Color.Blue, Color.Yellow,
        ]

        const downSide: Color[] = [
            Color.Red, Color.Green, Color.Blue,
            Color.Red, Color.Red, Color.Orange,
            Color.Orange, Color.White, Color.Red,
        ]

        // Act
        this.rubicCubeEmulator.turnUpSideRight()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnBottomSideLeft'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Orange, Color.Green, Color.Yellow,
            Color.White, Color.White, Color.Orange,
            Color.Orange, Color.Yellow, Color.Green,
        ]

        const leftSide: Color[] = [
            Color.Red, Color.Orange, Color.Green,
            Color.Green, Color.Green, Color.Red,
            Color.Blue, Color.Red, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.Blue, Color.Yellow,
            Color.White, Color.Blue, Color.Yellow,
            Color.White, Color.Blue, Color.White,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Yellow, Color.Blue,
            Color.Red, Color.Yellow, Color.Orange,
            Color.Green, Color.Blue, Color.White,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Green, Color.Green,
            Color.Blue, Color.Orange, Color.Yellow,
            Color.Yellow, Color.White, Color.Blue,
        ]

        const downSide: Color[] = [
            Color.Blue, Color.Orange, Color.Red,
            Color.Green, Color.Red, Color.White,
            Color.Red, Color.Red, Color.Orange,
        ]

        // Act
        this.rubicCubeEmulator.turnBottomSideLeft()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnBottomSideRight'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Orange, Color.Green, Color.Yellow,
            Color.White, Color.White, Color.Orange,
            Color.Green, Color.Blue, Color.White,
        ]

        const leftSide: Color[] = [
            Color.Red, Color.Orange, Color.Green,
            Color.Green, Color.Green, Color.Red,
            Color.White, Color.Blue, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.Blue, Color.Yellow,
            Color.White, Color.Blue, Color.Yellow,
            Color.Blue, Color.Red, Color.White,
        ]

        const backSide: Color[] = [
            Color.Red, Color.Yellow, Color.Blue,
            Color.Red, Color.Yellow, Color.Orange,
            Color.Orange, Color.Yellow, Color.Green,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Green, Color.Green,
            Color.Blue, Color.Orange, Color.Yellow,
            Color.Yellow, Color.White, Color.Blue,
        ]

        const downSide: Color[] = [
            Color.Orange, Color.Red, Color.Red,
            Color.White, Color.Red, Color.Green,
            Color.Red, Color.Orange, Color.Blue,
        ]

        // Act
        this.rubicCubeEmulator.turnBottomSideRight()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnBackSideLeft'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Orange, Color.Green, Color.Yellow,
            Color.White, Color.White, Color.Orange,
            Color.Blue, Color.Red, Color.White,
        ]

        const leftSide: Color[] = [
            Color.Green, Color.Orange, Color.Green,
            Color.Green, Color.Green, Color.Red,
            Color.Yellow, Color.Blue, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.Blue, Color.Red,
            Color.White, Color.Blue, Color.White,
            Color.Orange, Color.Yellow, Color.Orange,
        ]

        const backSide: Color[] = [
            Color.White, Color.Red, Color.Red,
            Color.Blue, Color.Yellow, Color.Yellow,
            Color.White, Color.Orange, Color.Blue,
        ]

        const upSide: Color[] = [
            Color.Yellow, Color.Yellow, Color.Green,
            Color.Blue, Color.Orange, Color.Yellow,
            Color.Yellow, Color.White, Color.Blue,
        ]

        const downSide: Color[] = [
            Color.Red, Color.Green, Color.Blue,
            Color.Red, Color.Red, Color.Orange,
            Color.Red, Color.Green, Color.Green,
        ]

        // Act
        this.rubicCubeEmulator.turnBackSideLeft()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    @test 'turnBackSideRight'() {
        // Arrange
        const frontSide: Color[] = [
            Color.Orange, Color.Green, Color.Yellow,
            Color.White, Color.White, Color.Orange,
            Color.Blue, Color.Red, Color.White,
        ]

        const leftSide: Color[] = [
            Color.Orange, Color.Orange, Color.Green,
            Color.White, Color.Green, Color.Red,
            Color.Red, Color.Blue, Color.White,
        ]

        const rightSide: Color[] = [
            Color.Orange, Color.Blue, Color.Yellow,
            Color.White, Color.Blue, Color.Green,
            Color.Orange, Color.Yellow, Color.Green,
        ]

        const backSide: Color[] = [
            Color.Blue, Color.Orange, Color.White,
            Color.Yellow, Color.Yellow, Color.Blue,
            Color.Red, Color.Red, Color.White,
        ]

        const upSide: Color[] = [
            Color.Green, Color.Green, Color.Red,
            Color.Blue, Color.Orange, Color.Yellow,
            Color.Yellow, Color.White, Color.Blue,
        ]

        const downSide: Color[] = [
            Color.Red, Color.Green, Color.Blue,
            Color.Red, Color.Red, Color.Orange,
            Color.Green, Color.Yellow, Color.Yellow,
        ]

        // Act
        this.rubicCubeEmulator.turnBackSideRight()

        // Assert
        this.AssertCubeState(frontSide, leftSide, rightSide, backSide, upSide, downSide)
    }

    private AssertCubeState(
        frontSide: Color[],
        leftSide: Color[],
        rightSide: Color[],
        backSide: Color[],
        upSide: Color[],
        downSide: Color[]
    ) {
        expect(frontSide).to.be.eql(this.cube.frontSide)
        expect(backSide).to.be.eql(this.cube.backSide)
        expect(leftSide).to.be.eql(this.cube.leftSide)
        expect(rightSide).to.be.eql(this.cube.rightSide)
        expect(upSide).to.be.eql(this.cube.upSide)
        expect(downSide).to.be.eql(this.cube.downSide)
    }
}
