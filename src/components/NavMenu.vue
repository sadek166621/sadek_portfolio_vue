<template>
  <div id="site-menu" :class="{ 'mobile-menu-opened': isMenuOpen }">
    <nav class="nav-menu">
      <ul>
        <li class="menu-item">
          <router-link to="/" @click.native="handleLinkClick" active-class="current-menu-item">Home</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/resume" @click.native="handleLinkClick" active-class="current-menu-item">Resume</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/portfolio" @click.native="handleLinkClick" active-class="current-menu-item">Portfolio</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/contact" @click.native="handleLinkClick" active-class="current-menu-item">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  isMenuOpen: Boolean,
});

const emit = defineEmits(['closeMenu']);

const handleLinkClick = () => {
  emit('closeMenu');
};
</script>



<style scoped>
.current-menu-item {
  color: #F68338; /* Example active color */
}
</style>
