<template>
    <div class="card-containter">
        <h3> Ian Kruger </h3>
        <div class="data"><strong>Work Email:</strong> krugerianc@gmail.com</div>
        <div class="data"><strong>Student Email:</strong> ikruger@email.sc.edu</div>
        <div class="data"><strong>Phone:</strong> 803-386-4999</div>
        <div class="data"><strong>City:</strong> Columbia, SC</div>
        <SocialBar :links="links" />
    </div>
</template>

<script>
    import SocialBar from './SocialBar.vue';

    export default {
        name: 'Card',
        props: ['links'],
        components: {
            SocialBar,
        }
    }

</script>

<style>

    .card-container {
        margin-left:auto;
        margin-right: 0;
        text-align: left;
    }
    .data { 
        margin-bottom: 15px;
        font-size: medium;
    }
</style>