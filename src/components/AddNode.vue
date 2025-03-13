<template>
  <div class="add-node__container">
    <AddIcon class="add-icon" @click="addNode(deviceID)"></AddIcon>
    <h3>Добавить узел</h3>
  </div>
</template>

<script setup>
import AddIcon from "@/components/icons/AddIcon.vue";
import { useNodeStore } from "@/stores/useNodeStore";

const nodeStore = useNodeStore();
const { addNode } = nodeStore;

const props = defineProps({
  deviceID: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.add-node__container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 0px 10px 0px;
}

.add-icon:hover {
  transform: rotate(90deg);
}

.add-icon {
}
</style>
