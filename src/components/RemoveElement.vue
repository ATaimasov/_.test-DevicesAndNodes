<template>
  <div>
    <RemoveIcon class="remove-icon" @click="handleRemove"></RemoveIcon>
  </div>
</template>

<script setup>
import RemoveIcon from "@/components/icons/AddIcon.vue";
import { storeToRefs } from "pinia";
import { useDeviceStore } from "@/stores/useDeviceStore";
import { useNodeStore } from "@/stores/useNodeStore";

const { device, node, type } = defineProps({
  device: Object,
  node: Object,
  type: String,
});

const deviceStore = useDeviceStore();
const nodeStore = useNodeStore();
const { removeDevice } = deviceStore;
const { removeNode } = nodeStore;

const handleRemove = () => {
  if (type === "device") {
    removeDevice(device.id);
  } else if (type === "node") {
    removeNode(device.id, node.id);
  }
};
</script>

<style scoped>
.remove-icon {
  transform: rotate(45deg);
}

.remove-icon:hover {
  transform: rotate(135deg);
}
</style>
