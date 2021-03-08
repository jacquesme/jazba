<template>
  <div class="px-10 md:px-52">
    <div class="px-0 md:px-20 md:pt-7">
      <div class="flex flex-col md:flex-row md:justify-between">
        <h3 class="inline text-sm order-2 md:order-1">Coverdrive 100</h3>
        <a
          href="#"
          class="inline text-sm float-right order-1 md:order-2 pb-8 md:pb-0"
          ><img
            src="/img/icon/arrow.png"
            alt=""
            class="inline-block pl-0 pr-4 md:px-4"
          />Back to All Collections</a
        >
      </div>
      <div class="flex flex-col md:flex-row pb-5">
        <div class="flex flex-col w-full md:flex-row md:w-1/2">
          <Product
            v-for="(collectionItem, index) in collectionItems"
            :key="index"
            :collection-item="collectionItem"
            class="p-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '~/components/Product'
import CollectionItems from '~/assets/data/all-collections.json'
export default {
  components: { Product },
  data() {
    return {
      collectionItems: CollectionItems,
    }
  },
}
</script>

<style scoped></style>
