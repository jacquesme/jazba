<template>
  <div v-if="item.categoryName === 'featureOne'" class="w-full">
    <img :src="item.src" alt="shoe image" class="w-full m-auto" />
    <h3 class="text-center text-sm">
      {{ item.name }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped></style>
