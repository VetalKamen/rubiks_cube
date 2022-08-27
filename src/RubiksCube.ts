import { RubiksCubeStateStructure } from './RubiksCubeStateStructure'
import TurnService from './TurnService'

class RubiksCube {
    public readonly state: RubiksCubeStateStructure
    public readonly turnService: TurnService
    public sideUpRowIndexes = [0, 1, 2]
    public sideLeftRowIndexes = [0, 3, 6]
    public sideDownRowIndexes = [6, 7, 8]
    public sideRightRowIndexes = [2, 5, 8]

    constructor(state: RubiksCubeStateStructure, turnService: TurnService) {
        this.state = state;
        this.turnService = turnService;

        // our logic about positioning
        // translate state to block state
    }

    public Render(): any {
        console.log('FrontSide:')
        for (let i = 0; i < 3; i++) {
            console.log(`${this.state.frontSide[i * 3]}, ${this.state.frontSide[i * 3 + 1]}, ${this.state.frontSide[i * 3 + 2]}`)
        }

        console.log('DownSide:')
        for (let i = 0; i < 3; i++) {
            console.log(`${this.state.downSide[i * 3]}, ${this.state.downSide[i * 3 + 1]}, ${this.state.downSide[i * 3 + 2]}`)
        }

        console.log('RightSide:')
        for (let i = 0; i < 3; i++) {
            console.log(`${this.state.rightSide[i * 3]}, ${this.state.rightSide[i * 3 + 1]}, ${this.state.rightSide[i * 3 + 2]}`)
        }

        console.log('UpSide:')
        for (let i = 0; i < 3; i++) {
            console.log(`${this.state.upSide[i * 3]}, ${this.state.upSide[i * 3 + 1]}, ${this.state.upSide[i * 3 + 2]}`)
        }

        console.log('LeftSide:')
        for (let i = 0; i < 3; i++) {
            console.log(`${this.state.leftSide[i * 3]}, ${this.state.leftSide[i * 3 + 1]}, ${this.state.leftSide[i * 3 + 2]}`)
        }

        console.log('BackSide:')
        for (let i = 0; i < 3; i++) {
            console.log(`${this.state.backSide[i * 3]}, ${this.state.backSide[i * 3 + 1]}, ${this.state.backSide[i * 3 + 2]}`)
        }

        console.log('-----------------------------')
    }

    public turnFrontSideLeft(): void {
        this.turnService.edgeSwapLeft(
            this.state.upSide,
            this.sideDownRowIndexes,
            this.state.leftSide,
            this.sideRightRowIndexes,
            this.state.rightSide,
            this.sideLeftRowIndexes,
            this.state.downSide,
            this.sideUpRowIndexes
        )

        this.turnService.sideSwapLeft(
            this.state.frontSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnFrontSideRight(): void {
        this.turnService.edgeSwapRight(
            this.state.downSide,
            this.sideUpRowIndexes,
            this.state.rightSide,
            this.sideLeftRowIndexes,
            this.state.leftSide,
            this.sideRightRowIndexes,
            this.state.upSide,
            this.sideDownRowIndexes
        )

        this.turnService.sideSwapRight(
            this.state.frontSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnLeftSideAway(): void {
        this.turnService.edgeSwapLeftAway(
            this.state.upSide,
            this.state.frontSide,
            this.state.backSide,
            this.state.downSide,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes,
        )

        this.turnService.sideSwapLeft(
            this.state.leftSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnLeftSideToward(): void {
        this.turnService.edgeSwapLeftToward(
            this.state.upSide,
            this.state.frontSide,
            this.state.backSide,
            this.state.downSide,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes,
        )

        this.turnService.sideSwapRight(
            this.state.leftSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnRightSideAway(): void {
        this.turnService.edgeSwapRightAway(
            this.state.upSide,
            this.state.frontSide,
            this.state.backSide,
            this.state.downSide,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes,
        )

        this.turnService.sideSwapRight(
            this.state.rightSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnRightSideToward(): void {
        this.turnService.edgeSwapRightToward(
            this.state.upSide,
            this.state.frontSide,
            this.state.backSide,
            this.state.downSide,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes,
        )

        this.turnService.sideSwapLeft(
            this.state.rightSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnUpSideLeft(): void {
        this.turnService.edgeSwapUpSideLeft(
            this.state.frontSide,
            this.state.leftSide,
            this.state.rightSide,
            this.state.backSide,
            this.sideUpRowIndexes,
        )

        this.turnService.sideSwapRight(
            this.state.upSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnUpSideRight(): void {
        this.turnService.edgeSwapUpSideRight(
            this.state.frontSide,
            this.state.leftSide,
            this.state.rightSide,
            this.state.backSide,
            this.sideUpRowIndexes,
        )

        this.turnService.sideSwapLeft(
            this.state.upSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnBottomSideLeft(): void {
        this.turnService.edgeBottomSideLeft(
            this.state.frontSide,
            this.state.leftSide,
            this.state.rightSide,
            this.state.backSide,
            this.sideDownRowIndexes,
        )

        this.turnService.sideSwapLeft(
            this.state.downSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnBottomSideRight(): void {
        this.turnService.edgeBottomSideRight(
            this.state.frontSide,
            this.state.leftSide,
            this.state.rightSide,
            this.state.backSide,
            this.sideDownRowIndexes,
        )

        this.turnService.sideSwapRight(
            this.state.downSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnBackSideLeft(): void {
        this.turnService.edgeSwapLeft(
            this.state.upSide,
            this.sideUpRowIndexes,
            this.state.leftSide,
            this.sideLeftRowIndexes,
            this.state.rightSide,
            this.sideRightRowIndexes,
            this.state.downSide,
            this.sideDownRowIndexes
        )

        this.turnService.sideSwapRight(
            this.state.backSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }

    public turnBackSideRight(): void {
        this.turnService.edgeSwapRight(
            this.state.upSide,
            this.sideUpRowIndexes,
            this.state.leftSide,
            this.sideLeftRowIndexes,
            this.state.rightSide,
            this.sideRightRowIndexes,
            this.state.downSide,
            this.sideDownRowIndexes
        )

        this.turnService.sideSwapLeft(
            this.state.backSide,
            this.sideUpRowIndexes,
            this.sideDownRowIndexes,
            this.sideLeftRowIndexes,
            this.sideRightRowIndexes
        )
    }
}

export default RubiksCube
