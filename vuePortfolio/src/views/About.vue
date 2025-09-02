<template>
    <section id="about">
        <div v-if="aboutData">
            <div data-aos="fade-up">
                <Title :title="aboutData.title" :description="aboutData.description"></Title>
            </div>
            <div data-aos="fade-right">
                <div class="section-content">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <Photo :user="aboutData.photo" class="col-auto"/>
                        </div>
                        <div class="row">
                            <div class="col-md-7 mr-auto card-mobile">
                                <Presentation :content="aboutData.pres"></Presentation>
                            </div>
                            <div class="col-md-4 card-mobile">
                            
                            </div>
                        </div>
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

    @media (min-width: 768px) {
    .section-content {
        width: 80%;
        margin: 0 auto;
    }
    }

    @media (max-width: 768px) {
    .card-mobile {
        text-align: center !important;
        margin-top: 20px;
    }
    }
</style>