<template>
  <div>
  <div class="section home-section"><Home /></div>
  <div class="section about-section"><About /></div>
  <div class="section"><Experience /></div>
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
import Projects from './views/Projects.vue';
import Home from './views/Home.vue';
import Footer from './views/Footer.vue';
import Experience from './views/Experience.vue'
// create an on mounted for the scrolling animation and other visual stuff


onUpdated(() => {
  AOS.refresh()
})
</script>

<style>
  html, body, #app {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
   
 
  }

  .home-section {
  height: 100vh;
  padding: 0;
}

/* About has a smaller height */
.about-section {
  min-height: 50vh;   /* fills ~60% of viewport */
  padding: 30px;    /* spacing inside */
}

</style>