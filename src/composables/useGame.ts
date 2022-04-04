import { ref } from 'vue'
import type { Board } from '@/models/board'

export const useGame = () => {
  // メモリを準備する
  const board = ref<Board>([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])

  const initialize = () => {
    for (let x = 0; x < board.value.length; x++) {
      const line = board.value[x]
      for (let y = 0; y < line.length; y++) {
        line[y] = null
      }
    }
  }

  return { initialize, board }
}
