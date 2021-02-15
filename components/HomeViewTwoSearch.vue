<template>
  <div class="w-full">
    <img
      :src="homeTwoViewItem.src"
      alt="shoe image"
      class="w-full h-auto m-auto"
    />
    <h3 class="text-center text-xs mt-1">
      {{ homeTwoViewItem.name }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    homeTwoViewItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped></style>
