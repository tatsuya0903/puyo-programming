<script setup lang="ts">
import GameStagePuyo from '@/components/GameStagePuyo.vue'
import type { Board } from '@/models/puyo'

defineProps<{
  board: Board
}>()
</script>

<template>
  <div id="stage" class="game-stage">
    <div class="game-stage__row" v-for="(line, index1) in board" v-bind:key="index1">
      <div class="game-stage__cell" v-for="(cell, index2) in line" v-bind:key="index2">
        <GameStagePuyo v-if="cell !== null" v-bind:boardCell="cell" />
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
