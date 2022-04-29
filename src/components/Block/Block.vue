<script setup lang="ts">
import data from "../../assets/data.json";
import Card from "../Card/Card.vue";
import "./Block.scss";
</script>

<template>
  <div class="block">
    <h2>{{ `${data[0].title}:` }}</h2>
    <Card />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
