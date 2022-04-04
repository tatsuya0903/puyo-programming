import { PuyoImage } from './puyoimage'
import { Stage } from './stage'
import { Player } from './player'
import { Score } from './score'

export const Modes = {
  start: 'start',
  checkFall: 'checkFall',
  fall: 'fall',
  checkErase: 'checkErase',
  erasing: 'erasing',
  newPuyo: 'newPuyo',
  playing: 'playing',
  moving: 'moving',
  rotating: 'rotating',
  fix: 'fix',
  gameOver: 'gameOver',
  batankyu: 'batankyu',
} as const
export type Mode = typeof Modes[keyof typeof Modes]

// 起動されたときに呼ばれる関数を登録する
window.addEventListener('load', () => {
  // まずステージを整える
  initialize()

  // ゲームを開始する
  loop()
})

let mode: Mode // ゲームの現在の状況
let frame: number // ゲームの現在フレーム（1/60秒ごとに1追加される）
let combinationCount = 0 // 何連鎖かどうか

function initialize() {
  // 画像を準備する
  PuyoImage.initialize()
  // ステージを準備する
  Stage.initialize()
  // ユーザー操作の準備をする
  Player.initialize()
  // シーンを初期状態にセットする
  Score.initialize()
  // スコア表示の準備をする
  mode = 'start'
  // フレームを初期化する
  frame = 0
}

function loop(): void {
  switch (mode) {
    case Modes.start:
      // 最初は、もしかしたら空中にあるかもしれないぷよを自由落下させるところからスタート
      mode = 'checkFall'
      break
    case Modes.checkFall:
      // 落ちるかどうか判定する
      if (Stage.checkFall()) {
        mode = 'fall'
      } else {
        // 落ちないならば、ぷよを消せるかどうか判定する
        mode = 'checkErase'
      }
      break
    case Modes.fall:
      if (!Stage.fall()) {
        // すべて落ちきったら、ぷよを消せるかどうか判定する
        mode = 'checkErase'
      }
      break
    case Modes.checkErase:
      {
        // 消せるかどうか判定する
        const eraseInfo = Stage.checkErase(frame)
        if (eraseInfo) {
          mode = 'erasing'
          combinationCount++
          // 得点を計算する
          Score.calculateScore(combinationCount, eraseInfo.piece, eraseInfo.color)
          Stage.hideZenkeshi()
        } else {
          if (Stage.puyoCount === 0 && combinationCount > 0) {
            // 全消しの処理をする
            Stage.showZenkeshi()
            Score.addScore(3600)
          }
          combinationCount = 0
          // 消せなかったら、新しいぷよを登場させる
          mode = 'newPuyo'
        }
      }
      break
    case Modes.erasing:
      if (!Stage.erasing(frame)) {
        // 消し終わったら、再度落ちるかどうか判定する
        mode = 'checkFall'
      }
      break
    case Modes.newPuyo:
      {
        if (!Player.createNewPuyo()) {
          // 新しい操作用ぷよを作成出来なかったら、ゲームオーバー
          mode = 'gameOver'
        } else {
          // プレイヤーが操作可能
          mode = 'playing'
        }
      }
      break
    case Modes.playing:
      {
        // プレイヤーが操作する
        const action = Player.playing(frame)
        mode = action // 'playing' 'moving' 'rotating' 'fix' のどれかが帰ってくる
      }
      break
    case Modes.moving:
      if (!Player.moving(frame)) {
        // 移動が終わったので操作可能にする
        mode = 'playing'
      }
      break
    case Modes.rotating:
      if (!Player.rotating(frame)) {
        // 回転が終わったので操作可能にする
        mode = 'playing'
      }
      break
    case Modes.fix:
      // 現在の位置でぷよを固定する
      Player.fix()
      // 固定したら、まず自由落下を確認する
      mode = 'checkFall'
      break
    case Modes.gameOver:
      // ばたんきゅーの準備をする
      PuyoImage.prepareBatankyu(frame)
      mode = 'batankyu'
      break
    case Modes.batankyu:
      PuyoImage.batankyu(frame)
      Player.batankyu()
      break
  }
  frame++
  requestAnimationFrame(loop) // 1/60秒後にもう一度呼び出す
}
