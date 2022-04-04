<script setup lang="ts">
import { computed } from 'vue'
import img1 from '@/assets/images/puyo_1.png'
import img2 from '@/assets/images/puyo_2.png'
import img3 from '@/assets/images/puyo_3.png'
import img4 from '@/assets/images/puyo_4.png'
import img5 from '@/assets/images/puyo_5.png'
import type { BoardCell } from '@/models/puyo'
import { PuyoColors } from '@/models/puyo'
const props = defineProps<{
  boardCell: BoardCell
}>()

const styleObject = computed(() => {
  const puyoColor = props.boardCell.puyo
  switch (puyoColor) {
    case PuyoColors.Green:
      return {
        backgroundImage: `url(${img1})`,
      }
    case PuyoColors.Blue:
      return {
        backgroundImage: `url(${img2})`,
      }
    case PuyoColors.Purple:
      return {
        backgroundImage: `url(${img3})`,
      }
    case PuyoColors.Red:
      return {
        backgroundImage: `url(${img4})`,
      }
    case PuyoColors.Yellow:
      return {
        backgroundImage: `url(${img5})`,
      }
    default:
      return null
  }
})
</script>

<template>
  <div class="game-stage-puyo" v-bind:style="styleObject" />
</template>

<style lang="scss" scoped>
.game-stage-puyo {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
