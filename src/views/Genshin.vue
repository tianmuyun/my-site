<template>
    <div class="image-container">
        <img src="../assets/images/genshin.svg" alt="Genshin Impact" class="image">
    </div>
</template>

<script setup>
</script>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.image {
    max-width: 50%;
    max-height: 50%;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 1s;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>
