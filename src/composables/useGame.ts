import { ref } from 'vue'
import { Game } from '@/models/game'
import type { Board } from '@/models/puyo'
import { createBoard } from '@/models/puyo'
import { Stage } from '@/models/stage'

export const useGame = () => {
  const board = ref<Board>(createBoard())
  // メモリを準備する

  const initialize = () => {
    // まずステージを整える
    Game.initialize()

    // ゲームを開始する
    loop()
  }

  const loop = () => {
    Game.loop()

    board.value = Stage.board

    // 1/60秒後にもう一度呼び出す
    requestAnimationFrame(loop)
  }

  return { initialize, board }
}
