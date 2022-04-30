<script setup lang="ts">
import { formatPrice } from "../../helpers/formatPrice";
import { Variant } from "../../models";
import Checkbox from "../Checkbox/Checkbox.vue";
import "./Card.scss";
import Select from "../Select/Select.vue";

defineProps<{ variant: Variant }>();

</script>

<template>
  <div class="card">
    <div class="head">
      <h1>{{ variant.title }}</h1>
      <h1 class="price">{{ formatPrice(variant.price_default) }}</h1>
    </div>
    <div class="body">
      <div class="description">
        {{ variant.description }}
      </div>
      <div class="options">
        <div v-if="variant.options.length" id="v-model-multiple-checkboxes">
          <Checkbox v-for="option in variant.options" :option="option" />
        </div>
        <div v-if="variant.select.length">
          <Select v-for="select in variant.select" :select="select" />
        </div>
        <button class="button">Выбрано</button>
      </div>
    </div>
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
