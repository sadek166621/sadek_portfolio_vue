<template>
  <div class="hero-media">
    <div class="owl-carousel" data-expand-duration="800">
      <div
        class="item owl-lazy"
        :data-src="sunnysImage"
        :style="{ backgroundImage: `url(${sunnysImage})`, opacity: 1 }"
      ></div>
    </div>
    <span class="overlay"></span>
    <span class="ti ti-spin ti-loading"></span>
  </div>
</template>

<script setup>
const sunnysImage = 'images/sunny.png';
</script>

<style scoped>
/* Add specific CSS for hero media here if needed */
</style>
