<template>
  <div v-if="item.categoryName === 'featureProduct'" class="w-full">
    <img :src="item.src" alt="shoe image" class="w-full h-auto m-auto" />
    <h3 class="text-center text-xs mt-0.5">
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
