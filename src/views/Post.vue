<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const loading = ref(true);

const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchPosts);
</script>

<template>
    <header>
        <h1>Post List</h1>
    </header>

    <div class="container" v-if="posts.length">
        <div v-if="loading">Loading...</div>
        <div class="card" v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
    
    <footer>
        <p>---</p>
    </footer>
</template>

<style scoped>
header {
    background: #4f46e5;
    color: #fff;
    padding: 20px 0;
    text-align: center
}

.container {
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: auto
}

.card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px #0000001a;
    margin: 15px 0;
    padding: 20px;
    width: 80%;
    transition: transform .2s
}

.card:hover {
    transform: scale(1.05)
}

h1 {
    font-size: 36px
}

h2 {
    font-size: 24px;
    margin: 10px 0;
    color: #4f46e5
}

p {
    line-height: 1.6;
    font-size: 18px
}

footer {
    text-align: center;
    padding: 10px 0;
    background: #4f46e5;
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%
}
</style>
