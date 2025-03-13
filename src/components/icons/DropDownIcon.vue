<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
  >
    <path
      fill="none"
      stroke="#888888"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M30 20L16 8L2 20"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "BytesizeChevronTop",
};
</script>

<style scoped>
svg {
  font-size: 1.6rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform: rotateX(-180deg);
}

svg:hover {
  cursor: pointer;
}
</style>
