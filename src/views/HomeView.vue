<script setup lang="ts">
import { RouteLocations } from '@/router/models'

const toGame = RouteLocations.toGame()
</script>

<template>
  <div>This is HomeView.</div>
  <RouterLink v-bind:to="toGame">スタート</RouterLink>
</template>
