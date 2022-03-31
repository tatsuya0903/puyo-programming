<script setup lang="ts">
import { RouteLocations } from '@/router/models'

const toHome = RouteLocations.toHome()
</script>

<template>
  <div>This is GameView.</div>
  <RouterLink v-bind:to="toHome">戻る</RouterLink>
  <div id="stage" />
  <div id="score" />
</template>

<style lang="scss">
#stage {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background-image: url(@/assets/images/puyo_2bg.png);
}
#score {
  margin: 0 auto;
  overflow: hidden;
  text-align: right;
}
</style>
