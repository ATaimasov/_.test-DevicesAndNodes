<template>
    <div class="device-item">
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>

.device-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

</style>