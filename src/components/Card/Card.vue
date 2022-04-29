<script setup lang="ts">
import { ref } from "vue";
import data from "../../assets/data.json";
import "./Card.scss";

const variant = ref(data[0].variants[0]);
const select = ref(data[0].variants[1].select[0]);
</script>

<template>
  <div class="card">
    <div class="head">
      <h1>{{ variant.title }}</h1>
      <h1 class="price">{{ variant.price_default }}</h1>
    </div>
    <div class="body">
      <div class="description">
        {{ variant.description }}
      </div>
      <div class="options">
        <div class="checkbox-wrapper">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">{{ variant.options[0].title }}</label>
        </div>
        <div class="select-wrapper">
          <p>{{ select.title }}</p>
          <select >
            <option value="volvo">{{ select.items[0].title }}</option>
            <option value="saab">{{ select.items[1].title }}</option>
            <option value="mercedes">{{ select.items[2].title }}</option>
          </select>
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
