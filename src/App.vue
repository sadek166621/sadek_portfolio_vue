<template>
  <div id="app">
    <Header />
    <SiteMenuToggle :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
    <NavMenu :isMenuOpen="isMenuOpen" @closeMenu="closeMenu" />
    <Socialmedia />
    <div class="content-wrap clearfix">
    
      <router-view />

      <Footer />
    </div>
    <Aditional />

    <!-- <AdditionalMenu /> -->
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import NavMenu from "./components/NavMenu.vue";
import Socialmedia from "./components/Social-media.vue";
import About from "./components/About.vue";
import Aditional from "./components/Aditional.vue";
import Services from "./components/Services.vue";
// import AdditionalMenu from './components/AdditionalMenu.vue'
import Footer from "./components/Footer.vue";
import SiteMenuToggle from "./components/SiteMenuToggle.vue";

import { ref } from 'vue';
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle('mobile-menu-opened', isMenuOpen.value);
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.classList.remove('mobile-menu-opened');
};
</script>

<style>
/* Add global styles here */
</style>
