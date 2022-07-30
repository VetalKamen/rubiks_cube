import Color from "./color";

interface Edge {}

class CornerEdge implements Edge {
  public front: Color
  public side: Color
  public vertical: Color

  constructor(front: Color, side: Color, vertical: Color) {
    this.front = front
    this.side = side
    this.vertical = vertical
  }
}

class MiddleEdge implements Edge {
  public vertical: Color
  public front: Color

  constructor(front: Color, vertical: Color) {
    this.front = front
    this.vertical = vertical
  }
}

class CenterCell implements Edge {
  public color: Color

  constructor(color: Color) {
    this.color = color
  }
}

export {Edge, CornerEdge, MiddleEdge, CenterCell}
