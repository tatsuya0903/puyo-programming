import { ref } from 'vue'
import { Game } from '@/models/game'
import { Puyo } from '@/models/puyo'
import { Stage } from '@/models/stage'

export const useGame = () => {
  const puyoList = ref<Puyo[]>([])
  // メモリを準備する

  const initialize = () => {
    // まずステージを整える
    Game.initialize()

    // ゲームを開始する
    loop()
  }

  const loop = () => {
    Game.loop()

    puyoList.value.splice(0)
    puyoList.value.push(...Puyo.createList(Stage.board))

    // 1/60秒後にもう一度呼び出す
    requestAnimationFrame(loop)
  }

  return { initialize, puyoList }
}
