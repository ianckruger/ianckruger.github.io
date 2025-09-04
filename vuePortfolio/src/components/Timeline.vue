<template>
    <div>
        <h3 class="color-light">
        {{ title }}
        </h3>
        <div class="resume-item" v-for="(description, index) in descriptions" :key="index">
            <div class="year color-darker">{{ description.year }}</div>
            <div class="resume-description color-light">
                <strong v-html="description.title"> </strong>
            </div>
            <div class="color-darker" v-html="description.content"></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Timeline',
    props: ["descriptions","title"],
};
</script>

<style scoped>
.resume-item {
  margin-top: 25px;
  p {
    font-size: 1.5rem;
    margin-top: 0;
  }
  .resume-description {
    font-size: 1.7rem;
  }
  .year {
    font-weight: 600;
   
  }
}
.color-light {
  color: white;
}
.color-darker {
  color:rgb(204, 203, 203);
}
</style>