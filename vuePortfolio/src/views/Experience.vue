<template>
    <section id="experience">
        <div v-if="data">
            <div data-aos="fade-down">
                <Title :title="data.title" :description="data.description" :whiteBar="true"/>
            </div>
            <div data-aos="fade-up">
                <div class="container-fluid">
                    <div class="row">
                        <Timeline :descriptions="data.education" :title="'Education'" class="col-12 col-md left"/>
                        <Timeline :descriptions="data.career" :title="'Career'" class="col-12 col-md right"/>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
        Loading...
        </div>
    </section>
</template>


<script>
import Title from '../components/Title.vue'
import Timeline from '../components/Timeline.vue'
import { onMounted, ref } from 'vue'

export default {
    name: "Experience",
    components: {
        Title,
        Timeline
    },
    setup() {
        const data = ref(null)

        onMounted(async () => {
            const module = await import('../data/experience.json')
            data.value = module.default
            console.log('experience data loaded:', data.value)
        })

        return {
            data
        }
    }
}


</script>

<style scoped>
    #experience {
        background-color: #404040;
        width: 100%;
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .title {
        color: whitesmoke;
    }
    .row {
        padding-top: 20px;
        text-align: center;
    }

    @media (min-width: 767px) {
     .left {
            text-align: right;
            border-right: 2px solid whitesmoke; 
     }
     .right {
           text-align: left;
        }
        
    }


    @media (max-width: 767px) {
    .right {
        margin-top: 20px;
    }
    .left:before {
        content: "";
        position: absolute;
        left: 20%;
        bottom: 0;
        height: 2px;
        width: 60%; 
        border-bottom: 2px solid white; 
    }
    }


    .text-wrapper::after {
        border-bottom: 5px solid white;
    }

</style>