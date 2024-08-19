<template>
  <div>
    <div class="menu-overlay" :class="{ active: isMenuOpen }" @click="handleClick"></div>
    <div class="site-menu-toggle">
      <a href="#" class="ti" @click.prevent="toggleMenu">
        <span class="screen-reader-text">Toggle navigation</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  isMenuOpen: Boolean,
});

const emit = defineEmits(['toggleMenu']);

const toggleMenu = () => {
  emit('toggleMenu');
};

const handleClick = () => {
  emit('toggleMenu');
};
</script>

  
  <style scoped>
  /* Add the necessary CSS here */
  /* Example */
  .menu-overlay {
    /* Add initial styles for overlay */
  }
  
  .menu-overlay.active {
    /* Styles when menu is active */
    display: block;
  }
  
  .site-menu-toggle .ti {
    /* Styles for the toggle button */
  }
  </style>
  