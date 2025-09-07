<template>
    <footer class="footer" v-if="aboutData">
        <div>
            &copy; 2025 Ian Kruger
        </div>
        <SocialBar :links="aboutData.links"/>
    </footer>
</template>

<script setup>
import SocialBar from '../components/SocialBar.vue'
import { ref, onMounted } from 'vue'

const aboutData = ref({links: []})

onMounted(async () => {
    const module = await import('../data/about.json')
    aboutData.value = module.default
})

</script>

<style>

.footer {
    padding: 10px 20px 10px 20px;
    background-color: #292929;
    display: flex;
    color: whitesmoke;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

::deep .social-wrap {
    float: right;
    .icon {
      font-size: 2.8rem;
      &:hover {
        color: whitesmoke;
      }
    }
  }

  ::deep li{
      margin-bottom: 0 !important;
  }
</style>