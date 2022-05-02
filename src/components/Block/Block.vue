<script setup lang="ts">
import { mainStore } from "../../store/index";
import { storeToRefs } from "pinia";
import { Block } from "../../models";
import Card from "../Card/Card.vue";
import "./Block.scss";

const mainStoreI = mainStore();
const { activeBlock } = storeToRefs(mainStoreI);
const { block } = defineProps<{ block: Block }>();
const title = block.title;
const handleClick = () => {
  mainStoreI.activeBlock = title;
};
</script>

<template>
  <div class="block">
    <hr class="divider" />
    <h2
      :class="{ title: true, disabled: activeBlock !== block.title }"
      @click="handleClick"
    >
      {{ `${block.title}:` }}
    </h2>
    <div :class="{ hidden: activeBlock !== block.title }">
      <Card
        v-for="variant in block.variants"
        :key="variant.title"
        :variant="variant"
        :blockId="block.id"
      />
    </div>
  </div>
</template>
