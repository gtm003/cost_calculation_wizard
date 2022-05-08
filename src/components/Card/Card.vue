<script setup lang="ts">
import { mainStore } from "../../store/index";
import { formatPrice } from "../../helpers/formatPrice";
import { Variant } from "../../models";
import Checkbox from "./Checkbox.vue";
import Select from "./Select.vue";
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
  totalPrice.value = variant.price_default + enlargeAmount;
};
const onClickConfirmBtn = () => {
  mainStoreI.selectVariant(
    {
      title: variant.title,
      price: totalPrice.value,
    },
    blockId
  );
};
</script>

<template>
  <div
    :class="{
      card: true,
      disabled: !mainStoreI.isActiveVariant(blockId, variant.title),
    }"
  >
    <div class="head">
      <h1>{{ variant.title }}</h1>
      <h1 class="price">{{ formatPrice(totalPrice) }}</h1>
    </div>
    <div class="body">
      <div class="description">
        <p
          v-for="paragraf in variant.description.split('\n')"
          v-html="paragraf"
        ></p>
      </div>
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
            :disabled="mainStoreI.isActiveVariant(blockId, variant.title)"
          />
        </div>
        <div v-if="variant.select.length">
          <Select
            v-for="select in variant.select"
            :key="select.title"
            :select="select"
            v-on:select-option="onSelectOption"
            :disabled="mainStoreI.isActiveVariant(blockId, variant.title)"
          />
        </div>
        <button class="button" @click="onClickConfirmBtn">
          {{
            mainStoreI.isActiveVariant(blockId, variant.title)
              ? "Выбрано"
              : "Выбрать"
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 750px;
  background: #f8f8f8;
  border-left: 6px solid #cccccc;
  border-radius: 5px;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  .button {
    width: 200px;
    height: 32px;
    border-radius: 5px;
    background: #2fcb5a;
    border: none;
    color: #f8f8f8;
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
    }
  }

  &.disabled {
    border-left: 6px solid #2fcb5a;
    .button {
      background: #98abba;
    }
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: -1.25px;
    margin-bottom: 0.7rem;
    padding: 0 1.5rem 0 2.5rem;
    .price {
      font-weight: normal;
    }
  }
  .body {
    display: flex;
    font-size: 1.5rem;
    .description {
      letter-spacing: -0.5px;
      padding: 0 0 0 1.5rem;
      width: 490px;
      & > p {
        margin: 0 0 1.2rem 0;
      }
    }
    .options {
      width: 240px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #cccccc;
      p {
        margin-top: 0;
      }
    }
  }
}
</style>
