<template>
  <div class="w-full">
    <img
      :src="homeOneViewItem.src"
      alt="shoe image"
      class="w-full h-auto m-auto"
    />
    <h3 class="text-center text-xs mt-1">
      {{ homeOneViewItem.name }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    homeOneViewItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped></style>
