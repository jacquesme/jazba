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
        :id="index"
        :key="index"
        :item="fullCollectionItem"
        class="mt-4 md:mt-8 wow fadeIn"
        data-wow-offset="10"
        data-wow-duration="1s"
        :data-wow-delay="`${0.4 * (index % 4)}s`"
      />
    </div>
  </div>
</template>

<script>
import wow from '@/mixins/wow'
import AllCollections from '~/components/AllCollections'
export default {
  components: { AllCollections },
  mixins: [wow],
  data() {
    return {
      fullCollectionItems: [],
      compIndex: 0,
      fetched: false,
    }
  },
  async fetch() {
    this.fullCollectionItems = await this.$axios.$get('/api/products.json')
    this.fetched = true
  },
  watch: {
    fetched(value) {
      if (value !== false) {
        this.$nextTick(() => {
          const WOW = require('wowjs')
          new WOW.WOW().init()
        })
      }
    },
  },
}
</script>

<style scoped></style>
