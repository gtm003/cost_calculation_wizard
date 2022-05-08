<script setup lang="ts">
import { mainStore } from "../../store/index";
import { storeToRefs } from "pinia";
import { Block } from "../../models";
import Card from "../Card/Card.vue";

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

<style scoped>
.block {
  width: 100%;
}
.divider {
  border-top: 2px solid #cccccc;
  margin-bottom: 1rem;
}

.title.disabled {
  color: #cccccc;
}

.title:hover {
  cursor: pointer;
  color: #555;
}

.hidden {
  display: none;
}
</style>
