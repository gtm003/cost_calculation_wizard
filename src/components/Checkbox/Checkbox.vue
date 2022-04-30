<script setup lang="ts">
import { ref } from "vue";
import { OptionItem } from "../../models";
import "./Checkbox.scss";

defineProps<{ option: OptionItem }>();
</script>

<template>
  <div class="checkbox-wrapper">
    <input
      type="checkbox"
      :id="option.title"
      :name="option.title"
      :value="option.price"
    />
    <label :for="option.title">{{ option.title }}</label>
  </div>
</template>


