<template>
    <div>
        <div class="photo"> 
            <a>
                <img :src="getImgUrl(user.src)" :alt="user.alt" />
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Photo',
    props: ["user"],
    methods: {
        getImgUrl(img) {
            return new URL(`../assets/${img}`, import.meta.url).href
        }
    }

}
</script>

<style>
.photo a:focus {
  outline: none;
}

.photo img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: inline-block;
}

img {
  max-width: 100%;
}

</style>