<template>
  <div v-if="item.categoryName === 'inventory'">
    <NuxtLink :to="`/product/${item.id}`">
      <img :src="item.src" alt="shoe-image" class="w-full h-auto" />
      <h2 class="text-center">{{ item.name }}</h2>
    </NuxtLink>
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
