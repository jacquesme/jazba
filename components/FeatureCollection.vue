<template>
  <div class="w-full">
    <img
      :src="featureCollectionItem.src"
      alt="shoe image"
      class="w-1/2 h-auto md:w-full m-auto"
    />
    <h3 class="text-center text-xs mt-0.5">
      {{ featureCollectionItem.name }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    featureCollectionItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped></style>
