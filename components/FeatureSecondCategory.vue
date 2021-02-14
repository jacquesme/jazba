<template>
  <div class="w-full">
    <img :src="featureSecondItem.src" alt="shoe image" class="w-full m-auto" />
    <h3 class="text-center text-sm">
      {{ featureSecondItem.name }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    featureSecondItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped></style>
