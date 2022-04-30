<script setup lang="ts">
import data from "../../assets/data.json";
import { Block } from "../../models";
import Card from "../Card/Card.vue";
import "./Block.scss";

defineProps<{ block: Block }>();
</script>

<template>
  <div class="block">
    <hr class="divider" />
    <h2>{{ `${block.title}:` }}</h2>
    <Card v-for="variant in block.variants" :variant="variant" />
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
