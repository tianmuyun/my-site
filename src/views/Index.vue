<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <h1>URL Navigation</h1>
    <ul>
        <li><RouterLink to="/welcome" class="link">Welcome</RouterLink></li>
        <li><RouterLink to="/personal" class="link">Personal</RouterLink></li>
        <li><RouterLink to="/notfound" class="link">NotFound</RouterLink></li>
        <li><RouterLink to="/genshin" class="link">Genshin</RouterLink></li>
        <li><RouterLink to="/post" class="link">Post</RouterLink></li>
        <li><RouterLink to="/test" class="link">Test</RouterLink></li>

    </ul>
</template>

<style scoped>
.link {
    font-size: 24px;
    color: blue;
    text-decoration: none;
}
</style>
