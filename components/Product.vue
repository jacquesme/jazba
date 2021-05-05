<template>
  <div>
    <div>
      <img :src="collectionItem.src" alt="" class="w-full h-auto" />
      <h3>{{ collectionItem.name }}</h3>
      <p class="text-xs">{{ collectionItem.des }}</p>
      <p class="text-xs font-bold">{{ collectionItem.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collectionItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped></style>
