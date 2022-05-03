import { defineStore } from "pinia";
import data from "../assets/data.json";
import { OptionItem, Block } from "../models";

const UNSELECTED_VARIANT = {
  title: "",
  price: 0,
};

export const mainStore = defineStore("main", {
  state: () => {
    return {
      activeBlock: "Подключение",
      data: data.map((block, index) => ({
        ...block,
        id: index,
        selectedVariant: UNSELECTED_VARIANT,
      })),
      totalPrice: 0,
    };
  },

  getters: {
    totalPrice(state) {
      return state.data.reduce(
        (acc, item) => acc + item.selectedVariant.price,
        0
      );
    },
    isActiveVariant: (state) => {
      return (blockId: number, titleVariant: string) =>
        state.data[blockId].selectedVariant.title === titleVariant;
    },
  },

  actions: {
    selectVariant(variant: OptionItem, blockId: number): void {
      this.data[blockId].selectedVariant = variant;
      if (this.data.some((block) => block.selectedVariant.title === "")) {
        this.activeBlock =
          this.data.find((block) => block.selectedVariant.title === "")
            ?.title ?? "";
      }
    },
  },
});
