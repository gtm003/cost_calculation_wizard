<script setup lang="ts">
import { ref } from "vue";
import { Select } from "../../models";

import "./Select.scss";

const { disabled, select } = defineProps<{
  select: Select;
  disabled: boolean;
}>();
const selected = ref(select.items[0].price);
</script>

<template>
  <div class="select-wrapper">
    <p>{{ select.title }}</p>
    <select
      v-model="selected"
      v-on:change="$emit('select-option', selected)"
      :disabled="disabled"
    >
      <option v-for="item in select.items" :value="item.price">
        {{ item.title }}
      </option>
    </select>
  </div>
</template>
