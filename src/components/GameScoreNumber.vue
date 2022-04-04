<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  num: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}>()

import img0 from '@/assets/images/0.png'
import img1 from '@/assets/images/1.png'
import img2 from '@/assets/images/2.png'
import img3 from '@/assets/images/3.png'
import img4 from '@/assets/images/4.png'
import img5 from '@/assets/images/5.png'
import img6 from '@/assets/images/6.png'
import img7 from '@/assets/images/7.png'
import img8 from '@/assets/images/8.png'
import img9 from '@/assets/images/9.png'
import { Config } from '@/models/config'
const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9]

const src = computed(() => images[props.num])

const styleObject = computed(() => {
  return {
    backgroundColor: Config.scoreBackgroundColor,
  }
})
</script>

<template>
  <img v-bind:src="src" v-bind:style="styleObject" />
</template>

<style lang="scss" scoped></style>
