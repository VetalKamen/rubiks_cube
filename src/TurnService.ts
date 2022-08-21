import Color from './color';
import {RubiksCubeStateStructure} from './RubiksCubeStateStructure'

class TurnService{
  public readonly cube: RubiksCubeStateStructure

  constructor(cubeStructure: RubiksCubeStateStructure) {
  this.cube = cubeStructure;
  }

  public getThreeColor(side: Color[], sideVals: number[]): any{
    return sideVals.map((val) => side[val])
  }

  public setThreeColor(side: Color[], sideVals: number[], newColor: Color[]): any{
    // needed because we pass newSide colors with default indexes[0,1,2]
    var count = 0

    sideVals.map((val) =>{ side[val] = newColor[count++] })
  }
  
  public sideSwapLeft(side: Color[], upVals: number[], downVals: number[],
    leftVals: number[], rightVals: number[]){
    var upColors = this.getThreeColor(side, upVals)
    var leftColors = this.getThreeColor(side, leftVals)
    var rightColors = this.getThreeColor(side, rightVals)
    var downColors = this.getThreeColor(side, downVals)
    
    this.setThreeColor(side, rightVals,downColors.reverse())
    this.setThreeColor(side, upVals,rightColors)
    this.setThreeColor(side, leftVals,upColors.reverse())
    this.setThreeColor(side, downVals,leftColors)
  }

  public sideSwapRight(side: Color[], upVals: number[], downVals: number[],
    leftVals: number[], rightVals: number[]){
    var upColors = this.getThreeColor(side, upVals)
    var leftColors = this.getThreeColor(side, leftVals)
    var rightColors = this.getThreeColor(side, rightVals)
    var downColors = this.getThreeColor(side, downVals)

    this.setThreeColor(side, upVals,leftColors.reverse())
    this.setThreeColor(side, rightVals,upColors)
    this.setThreeColor(side, downVals,rightColors.reverse())
    this.setThreeColor(side, leftVals,downColors)
  }

// side1-front, side2-right, side3-left, side4-back
  public edgeSwapLeft(side1: Color[], sideVol1: number[], side2: Color[], sideVol2: number[],
    side3: Color[], sideVol3: number[],side4: Color[], sideVol4: number[]){
    var color1 = this.getThreeColor(side1, sideVol1)
    var color2 = this.getThreeColor(side2, sideVol2)
    var color3 = this.getThreeColor(side3, sideVol3)
    var color4 = this.getThreeColor(side4, sideVol4)
    
    this.setThreeColor(side2, sideVol2,color1)
    this.setThreeColor(side4, sideVol4,color2)
    this.setThreeColor(side3, sideVol3,color4)
    this.setThreeColor(side1, sideVol1,color3)
  }

// side1-front, side2-right, side3-left, side4-back
  public edgeSwapRight(side1: Color[], sideVol1: number[], side2: Color[], sideVol2: number[],
    side3: Color[], sideVol3: number[],side4: Color[], sideVol4: number[]){
    var color1 = this.getThreeColor(side1, sideVol1)
    var color2 = this.getThreeColor(side2, sideVol2)
    var color3 = this.getThreeColor(side3, sideVol3)
    var color4 = this.getThreeColor(side4, sideVol4)
    
    this.setThreeColor(side2, sideVol2,color4)
    this.setThreeColor(side4, sideVol4,color3)
    this.setThreeColor(side3, sideVol3,color1)
    this.setThreeColor(side1, sideVol1,color2)
  }


}

export default TurnService