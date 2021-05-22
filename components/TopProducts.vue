<template>
  <div v-if="item.categoryName === 'topProduct'" class="w-full">
    <img :src="item.src" alt="shoe image" class="w-full m-auto" />
    <h3 class="text-center text-xs mt-2 md:mt-8">{{ item.name }}</h3>
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
<!--topItem-->
<style scoped></style>
