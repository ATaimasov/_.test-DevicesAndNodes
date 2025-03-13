<template>
  <Teleport to="#footer">
    <p>Количество устройств: {{ deviceList.length }}</p>
    <DeleteIcon
      @click="store.removeAllDevices"
      :style="deviceList.length === 0 ? { color: 'gray', pointer: 'none' } : ''"
    />
  </Teleport>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/useDeviceStore";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";

const store = useDeviceStore();
const { deviceList } = storeToRefs(store);
</script>

<style scoped></style>
