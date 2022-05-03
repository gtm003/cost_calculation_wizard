<script setup lang="ts">
import { ref } from "vue";
import { OptionItem } from "../../models";
import "./Checkbox.scss";

defineProps<{ option: OptionItem; disabled: boolean }>();
const checked = ref(false);
</script>

<template>
  <div class="checkbox-wrapper">
    <input
      type="checkbox"
      :id="option.title"
      :name="option.title"
      :value="option.price"
      v-model="checked"
      v-on:change="
        $emit('check-option', checked ? option?.price : -option?.price)
      "
      :disabled="disabled"
    />
    <label
      :for="option.title"
      :class="{
        label: true,
        disabled: disabled,
      }"
      >{{ option.title }}</label
    >
  </div>
</template>
