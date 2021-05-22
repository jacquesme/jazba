<template>
  <div class="px-10 md:px-52">
    <div class="px-0 md:px-20 md:pt-7">
      <div class="flex flex-col md:flex-row md:justify-between">
        <h3 class="inline text-sm order-2 md:order-1">{{ item.name }}</h3>
        <NuxtLink
          to="/collections"
          class="inline text-sm float-right order-1 md:order-2 pb-8 md:pb-0"
          ><img
            src="/img/icon/arrow.png"
            alt=""
            class="inline-block pl-0 pr-4 md:px-4"
          />Back to All Collections</NuxtLink
        >
      </div>
      <div class="flex flex-col md:flex-row pb-5">
        <div
          class="flex flex-col w-full md:flex-row md:w-1/2 wow fadeIn"
          data-wow-duration="1.2s"
          data-wow-delay="0.7s"
        >
          <Product :collection-item="item" class="p-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wow from '@/mixins/wow'
import axios from 'axios'
import Product from '~/components/Product'
// import CollectionItems from '~/assets/data/all-collections.js'
export default {
  components: { Product },
  mixins: [wow],
  data() {
    return {
      collectionItems: [],
    }
  },
  computed: {
    item() {
      return this.collectionItems.find((item) => {
        return item.id === parseInt(this.$route.params.id)
      })
    },
  },
  mounted() {
    axios.get('api/products.json').then((response) => {
      this.collectionItems = response.data
      console.log(this.collectionItems)
    })
  },
}
</script>

<style scoped></style>
