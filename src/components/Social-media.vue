<template>
  <!-- Social Media -->
  <div class="menu-overlay"></div>
  <div class="site-menu-toggle">
    <a href="" class="ti" @click.prevent="toggleNavigation"> 
      <span class="screen-reader-text">Toggle navigation</span> 
    </a>
  </div>
  <div id="social-profiles">
    <nav class="social-menu">
      <ul>
        <li class="menu-item">
          <a href="http://facebook.com/sadek-chowdhury-sunny" target="_blank"
            ><span class="ti"></span
          ></a>
        </li>
        <li class="menu-item">
          <a href="https://www.linkedin.com/in/abu-chowdhury-a49038210/" target="_blank"
            ><span class="ti"></span
          ></a>
        </li>
        <li class="menu-item">
          <a href="https://www.instagram.com/sadek_sunny" target="_blank"
            ><span class="ti"></span
          ></a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- Media -->
  <div class="hero-media">
    <div class="owl-carousel" data-expand-duration="800">
      <div
        class="item owl-lazy"
        :data-src="sunnysImage"
        :style="{ backgroundImage: `url(${sunnysImage})`, opacity: 1 }"
      ></div>
    </div>
    <!-- <span class="overlay"></span> -->
    <!-- <span class="ti ti-spin ti-loading"></span> -->
  </div>
</template>

<script setup>
const sunnysImage = 'images/sunny.png';

</script>

<style scoped>
/* Add specific CSS for about section here */
</style>
