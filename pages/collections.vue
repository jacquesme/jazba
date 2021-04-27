<template>
  <div class="w-full">
    <h1
      class="text-center text-xl font-bold mt-24 wow fadeIn"
      data-wow-offset="20"
      data-wow-duration="1.2s"
      data-wow-delay="0.5s"
    >
      All Collections
    </h1>
    <div
      class="flex flex-wrap align-middle justify-center mt-1 px-10 py-10 md:py-16 md:px-72"
    >
      <AllCollections
        v-for="(fullCollectionItem, index) in fullCollectionItems"
        :key="index"
        :full-collection-item="fullCollectionItem"
        class="mt-4 md:mt-8 wow fadeIn"
        data-wow-offset="20"
        data-wow-duration="1.2s"
        data-wow-delay="0.7s"
      />
    </div>
  </div>
</template>

<script>
import AllCollections from '~/components/AllCollections'
import AllCollectionsItems from '~/assets/data/all-collections.json'
export default {
  components: { AllCollections },
  data() {
    return {
      fullCollectionItems: AllCollectionsItems,
    }
  },
}
</script>

<style scoped></style>
