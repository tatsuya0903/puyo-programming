<script setup lang="ts">
import { RouteLocations } from '@/router/models'
import GameStage from '@/components/GameStage.vue'
import GameScore from '@/components/GameScore.vue'
import { useGame } from '@/composables/useGame'

const toHome = RouteLocations.toHome()

const { board } = useGame()
</script>

<template>
  <RouterLink style="position: fixed; left: 0px; top: 0px" v-bind:to="toHome">戻る</RouterLink>
  <GameStage v-bind:board="board" />
  <GameScore v-bind:value="1234567890" />
</template>

<style lang="scss" scoped></style>
