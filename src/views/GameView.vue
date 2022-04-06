<script setup lang="ts">
import { RouteLocations } from '@/router/models'
import GameStage from '@/components/GameStage.vue'
import GameScore from '@/components/GameScore.vue'
import { useGame } from '@/composables/useGame'
import { onMounted } from 'vue'

const toHome = RouteLocations.toHome()

const { puyoList, initialize } = useGame()

onMounted(() => {
  initialize()
})
</script>

<template>
  <RouterLink style="position: fixed; left: 0px; top: 0px" v-bind:to="toHome">戻る</RouterLink>
  <GameStage v-bind:puyoList="puyoList" />
  <GameScore v-bind:value="1234567890" />
</template>

<style lang="scss" scoped></style>
