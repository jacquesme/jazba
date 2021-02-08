<template>
  <div class="w-full">
    <img
      :src="homeOneViewItem.src"
      alt="shoe image"
      class="w-1/2 h-auto md:w-full m-auto"
    />
    <h3 class="text-center text-base mt-2">
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
