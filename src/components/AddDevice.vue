<template>
  <div class="add-device__container">
    <AddIcon class="add-icon" @click="addDevice"></AddIcon>
    <h2>Добавить устройство</h2>
  </div>
</template>

<script setup>
import AddIcon from "@/components/icons/AddIcon.vue";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/useDeviceStore";

const deviceStore = useDeviceStore();
const { addDevice } = deviceStore;
</script>

<style scoped>
.add-device__container {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 15px;
}

.add-icon:hover {
  transform: rotate(90deg);
}
</style>
