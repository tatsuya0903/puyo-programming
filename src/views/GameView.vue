<script setup lang="ts">
import { RouteLocations } from '@/router/models'

const toHome = RouteLocations.toHome()
</script>

<template>
  <div>This is GameView.</div>
  <RouterLink v-bind:to="toHome">戻る</RouterLink>
</template>

<style lang="scss"></style>
