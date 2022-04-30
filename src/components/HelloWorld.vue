<script setup lang="ts">
import { ref } from "vue";
import data from "../assets/data.json";
import Block from "./Block/Block.vue";
import { formatPrice } from "../helpers/formatPrice";

defineProps<{ msg: string }>();
</script>

<template>
  <div class="wizard">
    <Block v-for="block in data" :block="block" />
    <button>
      <h2>ИТОГО К ОПЛАТЕ</h2>
      <h3>{{ formatPrice(3500) }}</h3>
    </button>
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
button {
  width: 190px;
  height: 32px;
  border-radius: 3px;
  background: #2fcb5a;
  border: none;
  color: #f8f8f8;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
