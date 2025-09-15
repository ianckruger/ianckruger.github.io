<template>
    <div class="social-wrap">
        <ul>
            <li>
                <a :href="links.instagram" target="_blank">
                    <i class="bi bi-instagram" />
                </a>
            </li>
            <li>
                <a :href="links.github" target="_blank">
                    <i class="bi bi-github" />
                </a>
            </li>
            <li>
                <a :href="links.linkedin" target="_blank">
                    <i class="bi bi-linkedin" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'SocialBar',
        props: ['links'],
    }
</script>

<style scoped>
.social-wrap ul {
  padding: 0;
  margin: 10px 0 0 0;
  list-style: none;
  display: flex;
  justify-content: flex-start; /* or center if you prefer */
}

.social-wrap li {
  display: inline-block;
  margin-right: 15px;
}

.social-wrap a {
  font-size: 1.5rem;
  color: inherit; /* keeps default text color */
  text-decoration: none;
}

.social-wrap a:hover {
  color: #007bff; /* blue hover */
}
</style>
