<template>
    <div class="paragraph">
        <h3>
            {{ content.pres_title }}
        </h3>
        <div class="begin">
            {{ content.pres_position }}
        </div>
        <p>
            {{ content.pres_after }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Description',
        props: ['content']
    }
</script>

<style>
    .paragraph {
        color:darkslategrey;
        font-size: medium;
    }
    .begin {
        color: black;
    }
</style>