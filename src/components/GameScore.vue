<script setup lang="ts">
import { computed } from 'vue'
import { Config } from '@/models/config'
import GameScoreNumber from '@/components/GameScoreNumber.vue'

const props = defineProps<{
  value: number
}>()
const styleObject = computed(() => {
  return {
    top: `${Config.puyoImgHeight * Config.stageRows}px`,
    width: `${Config.puyoImgWidth * Config.stageCols}px`,
    height: `${Config.fontHeight}px`,
    backgroundColor: Config.scoreBackgroundColor,
  }
})

// TODO: GameScoreコンポーネントの横幅と、GameScoreNumberコンポーネントの横幅から桁数を算出すること
const digits = 30

const score = computed<(0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9)[]>(() => {
  return props.value
    .toString()
    .padStart(digits, '0')
    .split('')
    .map((v: string) => Number(v))
})
</script>

<template>
  <div id="score" />
  <div ref="root" v-bind:style="styleObject">
    <template v-for="(num, index) in score" v-bind:key="index">
      <GameScoreNumber v-bind:num="num" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
#score {
  margin: 0 auto;
  overflow: hidden;
  text-align: right;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  overflow: hidden;
}
</style>
