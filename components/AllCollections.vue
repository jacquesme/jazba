<template>
  <div class="">
    <NuxtLink to="/product">
      <img
        :src="fullCollectionItem.src"
        alt="shoe-image"
        class="w-full h-auto"
      />
      <h2 class="text-center">
        {{ fullCollectionItem.name }}
      </h2>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    fullCollectionItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped></style>
