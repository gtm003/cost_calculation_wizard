<script setup lang="ts">
import { ref } from "vue";
import data from "../assets/data.json";
import Block from "./Block/Block.vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="wizard">
    <hr class="divider" />
    <Block />
  </div>
</template>

<style scoped>
.wizard {
  margin: 0 auto;
  width: 780px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}
.divider {
  border-top: 2px solid #cccccc;
  margin-bottom: 1rem;
}
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
