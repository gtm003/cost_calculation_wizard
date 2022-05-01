import { defineStore } from "pinia";
import data from "../assets/data.json";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      activeBlock: "Подключение",
      data: data.map((block, index) => ({
        ...block,
        blockId: index,
        selectedVariant: {
          title: "",
          price: 0,
        },
      })),
      totalPrice: 0,
      count: 100,
    };
  },

  getters: {},

  actions: {
    selectVariant(num: number): void {
      // this access to the current container
      //this.count += num;
      //this.foo = "Hello";
      // You can also use $ patch
      // this.$patch({})
      // this.$patch(state => {})
    },
  },
});
