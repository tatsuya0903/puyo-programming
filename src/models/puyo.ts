class Key {
  private static num = 1
  public static create(): number {
    return this.num++
  }
}
export const createBoardCell = (color: PuyoColor, element: HTMLImageElement): BoardCell => {
  return {
    key: Key.create(),
    puyo: color,
    element: element,
  }
}

export type BoardCell = {
  key: number
  puyo: PuyoColor
  element: HTMLImageElement
}
export type Board = (BoardCell | null)[][]
export const createBoard = (): Board => {
  return [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ]
}

export const PuyoColors = {
  Green: 1,
  Blue: 2,
  Purple: 3,
  Red: 4,
  Yellow: 5,
} as const
export type PuyoColor = typeof PuyoColors[keyof typeof PuyoColors]

export const randomPuyoColor = (): PuyoColor => {
  return (Math.floor(Math.random() * 5) + 1) as PuyoColor
}

export const PuyoRotations = {
  Deg0: 0,
  Deg90: 90,
  Deg180: 180,
  Deg270: 270,
} as const
export type PuyoRotation = typeof PuyoRotations[keyof typeof PuyoRotations]

export const isPuyoColor = (value: unknown): value is PuyoColor => {
  return typeof value === 'number' && 1 <= value && value <= 5
}

export type FallingPuyo = {
  element: HTMLImageElement
  position: number
  destination: number
  falling: boolean
}

export type SequencePuyoInfo = {
  x: number
  y: number
  cell: BoardCell
}

export class Puyo {
  constructor(public key: number, public x: number, public y: number, public color: PuyoColor) {}

  public static create(key: number, x: number, y: number, color: PuyoColor): Puyo {
    return new Puyo(key, x, y, color)
  }

  public static createList(board: Board): Puyo[] {
    const result: Puyo[] = []

    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        const cell = board[y][x]
        if (cell !== null) {
          result.push(Puyo.create(cell.key, x, y, cell.puyo))
        }
      }
    }

    return result
  }
}
