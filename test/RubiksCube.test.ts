import { suite, test } from '@testdeck/mocha'
import * as _chai from 'chai'
import { expect } from 'chai'
import TurnService from '../src/TurnService'
import RubiksCube from "../src/RubiksCube";
import { RubiksCubeStateStructure } from '../src/RubiksCubeStateStructure'
import Color from "../src/color";

_chai.should()
_chai.expect

@suite class RubiksCubeTest {
    private service: RubiksCube
    private state: RubiksCubeStateStructure

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

        this.state = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        this.service = new RubiksCube(this.state, new TurnService)
    }

    @test 'turnFrontBlockLeft' () {
        this.service.turnFrontSideLeft()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnFrontSideRight' () {
        this.service.turnFrontSideRight()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnLeftSideAway' () {
        this.service.turnLeftSideAway()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnLeftSideTowards' () {
        this.service.turnLeftSideToward()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnRightSideAway' () {
        this.service.turnRightSideAway()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnRightSideTowards' () {
        this.service.turnRightSideToward()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnUpSideLeft' () {
        this.service.turnUpSideLeft()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnUpSideRight' () {
        this.service.turnUpSideRight()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnBottomSideLeft' () {
        this.service.turnBottomSideLeft()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnBottomSideRight' () {
        this.service.turnBottomSideRight()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnBackSideLeft' () {
        this.service.turnBackSideLeft()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }

    @test 'turnBackSideRight' () {
        this.service.turnBackSideRight()

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

        const expectState = new RubiksCubeStateStructure(
            frontSide,
            leftSide,
            rightSide,
            backSide,
            upSide,
            downSide
        )

        expect(expectState).to.be.eql(this.state)
    }
}
