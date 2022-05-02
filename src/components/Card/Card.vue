<script setup lang="ts">
import { mainStore } from "../../store/index";
import { formatPrice } from "../../helpers/formatPrice";
import { Variant } from "../../models";
import Checkbox from "../Checkbox/Checkbox.vue";
import "./Card.scss";
import Select from "../Select/Select.vue";
import { ref } from "vue";

const { variant, blockId } = defineProps<{
  variant: Variant;
  blockId: number;
}>();
const mainStoreI = mainStore();
const totalPrice = ref(variant.price_default);
const onCheckOption = (enlargeAmount: number) =>
  (totalPrice.value += enlargeAmount);
const onSelectOption = (enlargeAmount: number) => {
  console.log(enlargeAmount);
  totalPrice.value = variant.price_default + enlargeAmount;
};
const onClickConfirmBtn = () => {
  mainStoreI.data[blockId].selectedVariant = {
    title: variant.title,
    price: totalPrice.value,
  };
  if (blockId < mainStoreI.data.length - 1) {
    mainStoreI.activeBlock = mainStoreI.data[blockId + 1].title;
  }
};
</script>

<template>
  <div class="card">
    <div class="head">
      <h1>{{ variant.title }}</h1>
      <h1 class="price">{{ formatPrice(totalPrice) }}</h1>
    </div>
    <div class="body">
      <div class="description" v-html="variant.description"></div>
      <div class="options">
        <div
          v-if="variant.options.length"
          id="v-model-multiple-checkboxes"
          v-on:change-price="totalPrice += 100"
        >
          <Checkbox
            v-for="option in variant.options"
            :key="option.title"
            :option="option"
            v-on:check-option="onCheckOption"
          />
        </div>
        <div v-if="variant.select.length">
          <Select
            v-for="select in variant.select"
            :key="select.title"
            :select="select"
            v-on:select-option="onSelectOption"
          />
        </div>
        <button
          :class="{
            button: true,
            disabled:
              variant.title !== mainStoreI.data[blockId].selectedVariant.title,
          }"
          @click="onClickConfirmBtn"
        >
          {{
            variant.title === mainStoreI.data[blockId].selectedVariant.title
              ? "Выбрано"
              : "Выбрать"
          }}
        </button>
      </div>
    </div>
  </div>
</template>
