<script setup>
import DeviceList from "@/components/DeviceList.vue";
import AddDevice from "@/components/AddDevice.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div>
    <TheHeader />
    <Teleport to="#main">
      <AddDevice />
      <DeviceList />
    </Teleport>
    <TheFooter />
  </div>
</template>

<style scoped></style>
