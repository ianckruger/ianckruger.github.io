<template>
  <div>
  <div class="section"><Home /></div>
  <div class="section"><About /></div>
  <div class="section"><Skills /></div>
  <div class="section"><Projects /></div>
  <div class="section"><Contact /></div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated } from 'vue'
import AOS from 'aos'


// do all the imports after developing the components
import About from './views/About.vue';
import Skills from './views/Skills.vue';
import Projects from './views/Projects.vue';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
// create an on mounted for the scrolling animation and other visual stuff


onUpdated(() => {
  AOS.refresh()
})
</script>

<style>
  html, body, #app {
    margin: 0;
    height: 100%;
  }

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    height: 100vh;
  }
</style>