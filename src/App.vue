<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div style="display: none">
    <img src="@/assets/images/puyo_1.png" id="puyo_1" style="opacity: 0.5" />
    <img src="@/assets/images/puyo_2.png" id="puyo_2" style="opacity: 0.5" />
    <img src="@/assets/images/puyo_3.png" id="puyo_3" style="opacity: 0.5" />
    <img src="@/assets/images/puyo_4.png" id="puyo_4" style="opacity: 0.5" />
    <img src="@/assets/images/puyo_5.png" id="puyo_5" style="opacity: 0.5" />
    <img src="@/assets/images/batankyu.png" id="batankyu" />
    <img src="@/assets/images/zenkeshi.png" id="zenkeshi" />
    <img src="@/assets/images/0.png" id="font0" style="opacity: 0.5" />
    <img src="@/assets/images/1.png" id="font1" style="opacity: 0.5" />
    <img src="@/assets/images/2.png" id="font2" style="opacity: 0.5" />
    <img src="@/assets/images/3.png" id="font3" style="opacity: 0.5" />
    <img src="@/assets/images/4.png" id="font4" style="opacity: 0.5" />
    <img src="@/assets/images/5.png" id="font5" style="opacity: 0.5" />
    <img src="@/assets/images/6.png" id="font6" style="opacity: 0.5" />
    <img src="@/assets/images/7.png" id="font7" style="opacity: 0.5" />
    <img src="@/assets/images/8.png" id="font8" style="opacity: 0.5" />
    <img src="@/assets/images/9.png" id="font9" style="opacity: 0.5" />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  -webkit-user-select: none;
}
</style>
