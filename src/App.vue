<template>
  <transtition name="fade" tag="div" class="wrapper" mode="out-in">
    <div class="wrapper" v-if="loaded" id="app">
      <front_page :user="user" />
    </div>
  </transtition>
</template>

<script>
import front_page from "./components/front_page.vue";
import { cosmic } from "./cosmic.js"
</script>

<style></style>
