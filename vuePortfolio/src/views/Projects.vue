<template>
    <section id="projects">
        <div v-if="data">
            <div data-aos="fade-down">
               <Title class="title" :title="data.title" :description="data.description" :whiteBar="false"/>
            </div>

            <div>
                <Timeline :value="data.projects" align="left" class="projects-timeline">
                    <template #opposite="slotProps">
                
                    </template>
                    <template #content="slotProps">
                    </template>
                </Timeline>
            </div>
        </div>
        <div v-else>
            Loading...
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from "vue"
import Title from '../components/Title.vue'
import Timeline from 'primevue/timeline'

export default {
    name: 'Projects',
    components: {
        Title
    },
    setup() {
        const data = ref(null)

        onMounted(async () => {
            const module = await import('../data/projects.json')
            data.value = module.default
            console.log('experience data loaded:', data.value)
        })

        return {
            data
        }
    }
}
</script>

<style>
#projects {
    width: 100%;
    min-height: 80vh;
    padding-top: 50px;
    padding-bottom: 50px;
}

</style>