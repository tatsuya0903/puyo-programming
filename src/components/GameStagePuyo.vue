<script setup lang="ts">
import { computed } from 'vue'
import img1 from '@/assets/images/puyo_1.png'
import img2 from '@/assets/images/puyo_2.png'
import img3 from '@/assets/images/puyo_3.png'
import img4 from '@/assets/images/puyo_4.png'
import img5 from '@/assets/images/puyo_5.png'
import type { PuyoColor } from '@/models/puyo'
import { Puyo, PuyoColors } from '@/models/puyo'
import { Config } from '@/models/config'
const props = defineProps<{
  puyo: Puyo
}>()

const calcBackgroundImage = (color: PuyoColor): string | null => {
  switch (color) {
    case PuyoColors.Green:
      return `url(${img1})`
    case PuyoColors.Blue:
      return `url(${img2})`
    case PuyoColors.Purple:
      return `url(${img3})`
    case PuyoColors.Red:
      return `url(${img4})`
    case PuyoColors.Yellow:
      return `url(${img5})`
    default:
      return null
  }
}

const styleObject = computed(() => {
  return {
    left: `${props.puyo.x * Config.puyoImgWidth}px`,
    top: `${props.puyo.y * Config.puyoImgHeight}px`,
    width: `${Config.puyoImgWidth}px`,
    height: `${Config.puyoImgHeight}px`,
    backgroundImage: calcBackgroundImage(props.puyo.color),
  }
})
</script>

<template>
  <div class="game-stage-puyo" v-bind:style="styleObject">
    {{ puyo.y + 1 }},{{ puyo.x + 1 }}({{ puyo.key }})
  </div>
</template>

<style lang="scss" scoped>
.game-stage-puyo {
  position: absolute;
  border: 1px red dashed;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 12px;
}
</style>
