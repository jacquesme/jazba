<template>
  <div class="w-full bg-grey-5 p-10">
    <img :src="contactItem.src" alt="icon" class="m-auto" />
    <h2 class="text-center text-accent-orange text-xs font-bold py-2">
      {{ contactItem.name }}
    </h2>
    <p class="text-center pt-2">{{ contactItem.contact }}</p>
  </div>
</template>

<script>
export default {
  props: {
    contactItem: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style scoped></style>
