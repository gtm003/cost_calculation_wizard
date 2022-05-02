<script setup lang="ts">
import { mainStore } from "../store/index";
import Block from "./Block/Block.vue";
import { formatPrice } from "../helpers/formatPrice";

const mainStoreI = mainStore();
</script>

<template>
  <div class="wizard">
    <Block v-for="block in mainStoreI.data" :key="block.title" :block="block" />
    <button>
      <h2>ИТОГО К ОПЛАТЕ</h2>
      <h3>
        {{ formatPrice(mainStoreI.totalPrice) }}
      </h3>
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
  border-radius: 5px;
  background: #2fcb5a;
  border: none;
  color: #f8f8f8;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
