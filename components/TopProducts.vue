<template>
  <div class="w-full">
    <img :src="topItem.src" alt="shoe image" class="w-full m-auto" />
    <h3 class="text-center text-xs mt-2 md:mt-8">{{ topItem.name }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    topItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped></style>
