import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  getters: {
    getEditIconStyle: (state) => (element) => {
      if (element.editable) {
        return { color: "black" };
      } else {
        return { color: "gray" };
      }
    },
    getInputStyle: (state) => (element) => ({
      color: element.editable ? "#4c4c4c" : "black",
      backgroundColor: element.editable ? "#c3c3c355" : "#f6f6f6",
    }),
    editElement: (state) => (element) => {
      element.editable = !element.editable;
    },
    getRotatedStyle: (state) => (element) => ({
      transform: element.showNodes ? `rotate(180deg)` : `rotate(0deg)`,
    }),
  },
});
