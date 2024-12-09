<script setup>
import { RouterLink, useRouter } from "vue-router";
import Ruler from "../components/Ruler.vue";
const routes = useRouter().options.routes;
</script>

<template>
  <Ruler />
  <p class="title">RouterList</p>
  <div v-for="route in routes" :key="route.path">
    <RouterLink :to="route.path" class="link">{{
      route.name || "Unnamed Route"
    }}</RouterLink>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.title {
  font-size: 48px;
  font-weight: bold;
  margin: 20px;
}
.link {
  margin: 20px;
  font-size: 24px;
  color: blue;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
