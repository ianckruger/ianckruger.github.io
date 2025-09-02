<template>
    <section id="about">
        <div data-aos="fade-up" v-if="aboutData">
            <Title :title="aboutData.title" :description="aboutData.description"></Title>
            <div data-aos="fade-right">
            <div class="section-content">
                <div class="row justify-content-center">
                    <Photo :user="aboutData.photo"/>
                </div>
            </div>
        </div>
        </div>
        <div v-else>
        <p>Loading...</p>
        </div>

        
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Title from '../components/Title.vue'
import Photo from '../components/Photo.vue'


const aboutData = ref(null)

onMounted(async () => {
    const module = await import('../data/about.json')
    aboutData.value = module.default
    console.log('About data loaded:', aboutData.value) // Debug log
})

</script>

<style>
    #about {
        background-color: white;
    }
</style>