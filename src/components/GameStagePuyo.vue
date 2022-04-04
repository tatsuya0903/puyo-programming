<script setup lang="ts">
import type { Puyo } from '@/models/board'
import { computed } from 'vue'
import img1 from '@/assets/images/puyo_1.png'
import img2 from '@/assets/images/puyo_2.png'
import img3 from '@/assets/images/puyo_3.png'
import img4 from '@/assets/images/puyo_4.png'
import img5 from '@/assets/images/puyo_5.png'
const props = defineProps<{
  puyo: Puyo
}>()

const styleObject = computed(() => {
  switch (props.puyo) {
    case 1:
      return {
        backgroundImage: `url(${img1})`,
      }
    case 2:
      return {
        backgroundImage: `url(${img2})`,
      }
    case 3:
      return {
        backgroundImage: `url(${img3})`,
      }
    case 4:
      return {
        backgroundImage: `url(${img4})`,
      }
    case 5:
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
