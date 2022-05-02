<script setup lang="ts">
import { ref } from "vue";
import data from "../../assets/data.json";
import { Select } from "../../models";

import "./Select.scss";

defineProps<{ select: Select }>();
const selected = ref("");
</script>

<template>
  <div class="select-wrapper">
    <p>{{ select.title }}</p>
    <select v-model="selected" v-on:change="$emit('select-option', selected)">
      <option disabled value=""></option>
      <option v-for="item in select.items" :value="item.price">
        {{ item.title }}
      </option>
    </select>
  </div>
</template>
