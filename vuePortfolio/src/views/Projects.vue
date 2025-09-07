<template>
    <section id="projects">
        <div v-if="data">
            <div data-aos="fade-down">
               <Title class="title" :title="data.title" :description="data.description" :whiteBar="false"/>
            </div>

        <div class="containter-fluid">
            <Timeline :value="data.projects" align="left" class="projects-timeline">
            <template #marker="slotProps">
                <span class="custom-marker">
                    <i class="bi bi-arrow-down-right-circle-fill"></i>
                </span>
            </template>
                <template #opposite="slotProps">
                    <small class="date">{{  slotProps.item.date }}</small>
                </template>
                <template #content="slotProps">
                        <div class=project-card data-aos="fade-up">
                            <h4> {{  slotProps.item.title }}</h4>
                            <p> {{  slotProps.item.content }}</p>

                            <div class="media-wrapper">
                                <img v-if="slotProps.item.image"
                                    :src="getImgUrl(slotProps.item.image)"
                                    class="project-image">
                                </img>
                            </div>
                        </div>
                </template>
            </Timeline>
        </div>
    </div>
    <div v-else>
    Loading...
    </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Title from '../components/Title.vue';
import Timeline from 'primevue/timeline';


const data = ref({ title: "", description: "", items: [] });

onMounted(async () => {
    const module = await import('../data/projects.json')
    data.value = module.default
    console.log('experience data loaded:', data.value)
});



function getImgUrl(img) {
    return new URL(`../assets/${img}`, import.meta.url).href;
};
    

</script>

<style>
#projects {
    width: 100%;
    min-height: 80vh;
    padding: 50px 20px;
    background-color: #f8f9fa;
}

.title {
    text-align: center;
    margin-bottom: 40px;
}

.container-fluid {
    max-width: 1200px;
    margin: 0 auto;
}

.p-timeline-event {
    display: grid !important;
    grid-template-columns: 1fr 40px 3fr;
    align-items: start !important;
    margin-bottom: 40px !important;
}

.p-timeline-event-separator {

  position: relative;
  
}

.p-timeline-event-separator::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 19px; /* adjust so it lines up with your marker */
  width: 2px;
  background: black; /* timeline bar color */
  margin-top: 20px;
  height: 439px;
}






/* Date styling */
.date {
    font-size: 0.9rem;
    color: #6c757d;
    font-weight: 600;
}

/* Project card styling */
.project-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border-left: 4px solid #007bff;
    width: 70%;
}

.project-card h4 {
    margin: 0 0 15px 0;
    color: #2c3e50;
    font-size: 1.25rem;
}

.project-card p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
}

.media-wrapper {
    margin-top: 20px;
}

.project-image {
    width: 100%;
    max-height: 250px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    :deep(.p-timeline-event-opposite) {
        flex: 0 0 100% !important;
        text-align: center !important;
        padding-right: 0 !important;
        padding-bottom: 10px !important;
    }
    
    :deep(.p-timeline-event-content) {
        flex: 0 0 100% !important;
        padding-left: 0 !important;
    }
    
    :deep(.p-timeline-event-separator) {
        display: none !important;
    }
    
    .project-card {
        margin-left: 0;
    }
}

</style>