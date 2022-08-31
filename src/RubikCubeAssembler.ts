import RubiksCube from './RubiksCube'

class RubiksCubeAssembler {
    private cube: RubiksCube

    constructor(cube: RubiksCube) {
        this.cube = cube
    }

    public Assemble(): void {
        this.AssembleUpCross()
    }

    private AssembleUpCross(): void {
        const upColor = this.cube.upSide[4]

        // we need to check upSide middle elements if they equal to upColor
        // if we find the needed color = move it to the right place
        // if upSide doesn't contain the needed color check frontSide/leftSide/rightSide/backSide middle elements

        // check if any of those are == upColor
        // this.cube.upSide[1]; // up
        // this.cube.upSide[3]; // left
        // this.cube.upSide[5]; // right
        // this.cube.upSide[7]; // down

        console.log(upColor)
    }
}

export {RubiksCubeAssembler}
