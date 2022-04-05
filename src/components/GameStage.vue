<script setup lang="ts">
import type { Puyo } from '@/models/puyo'
import GameStagePuyo from '@/components/GameStagePuyo.vue'

defineProps<{
  puyoList: Puyo[]
}>()
</script>

<template>
  <div id="stage" class="game-stage">
    <transition-group name="flip-list">
      <template v-for="puyo in puyoList" v-bind:key="puyo.key">
        <GameStagePuyo v-bind:puyo="puyo" />
      </template>
    </transition-group>
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
  border: 1px green dashed;
}
.flip-list-move {
  transition: transform 0.25s ease;
}
</style>
