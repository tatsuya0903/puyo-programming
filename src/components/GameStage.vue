<script setup lang="ts">
import { computed } from 'vue'
import { Config } from '@/models/config'
import type { Board } from '@/models/board'
import GameStagePuyo from '@/components/GameStagePuyo.vue'

const props = defineProps<{
  board: Board
}>()
const styleObject = computed(() => {
  return {
    width: `${Config.puyoImgWidth * Config.stageCols}px`,
    height: `${Config.puyoImgHeight * Config.stageRows}px`,
    backgroundColor: Config.stageBackgroundColor,
  }
})
</script>

<template>
  <div class="game-stage" v-bind:style="styleObject">
    <div class="game-stage__row" v-for="(row, index1) in board" v-bind:key="index1">
      <div class="game-stage__cell" v-for="(puyo, index2) in row" v-bind:key="index2">
        <GameStagePuyo v-bind:puyo="puyo" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  background-image: url(@/assets/images/puyo_2bg.png);
  box-sizing: border-box;

  .game-stage__row {
    flex: 1;
    display: flex;
    flex-direction: row;
  }

  .game-stage__cell {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
</style>
