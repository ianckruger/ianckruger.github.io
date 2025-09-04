<template>
    <div class="title">
        <h2>{{ title }}</h2>
        <div class="wrapper">
            <div class="text-wrapper"> {{  description }}</div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Title',
        props: [
            'title',
            'description'
        ]
    }
</script>

<style scoped>
    .title {
        text-align: center;
        color:darkslategrey;
        h2 {
            font-size: 2rem;
            text-transform: uppercase;
        }
    }

    .text-wrapper {
        text-transform: uppercase;
        font-size: 1.5rem;
        &:after {
            content: "";
            width: 150px;
            display: block;
            margin: 20px auto;
            border-bottom: 1px solid darkslategray;
        }
    }
</style>