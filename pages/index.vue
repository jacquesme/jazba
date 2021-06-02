<template>
  <div>
    <Carousel />

    <div class="px-10 md:px-40 mt-32">
      <div class="w-full flex flex-col justify-center -mt-1.5">
        <h2
          class="text-center text-xl font-bold wow fadeIn"
          data-wow-duration="1.2s"
          data-wow-delay="0.5s"
        >
          Tredwear's Story
        </h2>
        <p
          class="text-center text-justify text-sm mt-6 wow fadeIn"
          data-wow-duration="1.2s"
          data-wow-delay="0.5s"
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus.
        </p>
      </div>
      <h2
        class="text-center text-xl font-bold mt-14 -mb-0.5 wow fadeIn"
        data-wow-duration="1.2s"
        data-wow-delay="0.5s"
      >
        Top Products
      </h2>
      <div class="flex flex-col md:flex-row mt-8 p-0.5 md:space-x-5">
        <TopProducts
          v-for="(product, index) in products"
          :key="index"
          :item="product"
          class="wow fadeIn"
          data-wow-duration="1.2s"
          :data-wow-delay="`${0.3 * index}s`"
        />
      </div>
      <h2
        class="text-center text-xl font-bold mt-28 wow fadeIn"
        data-wow-offset="10"
        data-wow-duration="1.2s"
        data-wow-delay="0.3s"
      >
        Featured Category
      </h2>
      <div class="flex flex-col md:flex-row mt-7 md:px-16">
        <FeatureFirstCategory
          v-for="(product, index) in products"
          :key="index"
          :item="product"
          class="wow fadeIn"
          data-wow-offset="10"
          data-wow-duration="1.3s"
          :data-wow-delay="`${0.5 * index}s`"
        />
      </div>
      <div class="flex flex-col md:space-x-6 md:flex-row md:px-16">
        <FeatureSecondCategory
          v-for="(product, index) in products"
          :key="index"
          :item="product"
          class="my-4 wow fadeIn"
          data-wow-offset="10"
          data-wow-duration="1.4s"
          :data-wow-delay="`${0.3 * index}s`"
        />
      </div>
    </div>
    <img
      src="/img/banner/on2.jpg"
      alt="logo2"
      class="w-full h-auto object-contain block m-auto mt-7"
    />
    <div class="border-b border-grey-3 pb-10">
      <div class="flex flex-col md:flex-row mt-12 md:px-52">
        <HomeViewOne
          class="wow fadeIn"
          data-wow-offset="20"
          data-wow-duration="1s"
          data-wow-delay="0.4s"
        />
        <HomeViewOneSearch
          v-for="(product, index) in products"
          :key="index"
          :item="product"
          class="wow fadeIn"
          data-wow-offset="20"
          data-wow-duration="1s"
          :data-wow-delay="`${0.3 * index}s`"
        />
      </div>
      <div class="flex flex-col md:flex-row mt-4 md:px-52">
        <HomeViewTwoSearch
          v-for="(product, index) in products"
          :key="index"
          :item="product"
          class="wow fadeIn"
          data-wow-offset="20"
          data-wow-duration="1s"
          :data-wow-delay="`${0.3 * index}s`"
        />
      </div>
    </div>
    <div class="border-b border-grey-3 pb-10">
      <h2
        class="text-center text-md font-bold mt-10 wow fadeIn"
        data-wow-offset="20"
        data-wow-duration="1s"
        data-wow-delay="0.8s"
      >
        Featured Collection
      </h2>
      <div
        class="flex justify-center mt-4 wow fadeIn"
        data-wow-offset="20"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        <button class="border-2 border-black text-xs py-1 px-5">
          View More
        </button>
      </div>
      <div class="flex flex-col md:flex-row mt-4 md:px-52">
        <FeatureCollection
          v-for="(product, index) in products"
          :key="index"
          :item="product"
          class="wow fadeIn"
          data-wow-offset="20"
          data-wow-duration="1s"
          :data-wow-delay="`${0.3 * index}s`"
        />
      </div>
    </div>
    <div class="pt-10 pb-16">
      <h2
        class="text-center text-md font-bold mt-2 wow fadeIn"
        data-wow-offset="20"
        data-wow-duration="1.2s"
        data-wow-delay="1s"
      >
        Feel The Vibe
      </h2>
      <div
        class="flex justify-center mt-4 wow fadeIn"
        data-wow-offset="20"
        data-wow-duration="1.2s"
        data-wow-delay="1s"
      >
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/Y4PnEXGHdio"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import wow from '@/mixins/wow'
import TopProducts from '~/components/TopProducts'
import FeatureFirstCategory from '~/components/FeatureFirstCategory'
import FeatureSecondCategory from '~/components/FeatureSecondCategory'
import HomeViewOne from '~/components/HomeViewOne'
import HomeViewOneSearch from '~/components/HomeViewOneSearch'
import Carousel from '~/components/Carousel'
import HomeViewTwoSearch from '~/components/HomeViewTwoSearch'
import FeatureCollection from '~/components/FeatureCollection'
export default {
  components: {
    TopProducts,
    FeatureFirstCategory,
    FeatureSecondCategory,
    HomeViewOne,
    HomeViewOneSearch,
    Carousel,
    HomeViewTwoSearch,
    FeatureCollection,
  },
  mixins: [wow],
  data() {
    return {
      products: [],
      info: null,
      fetched: false,
    }
  },
  async fetch() {
    this.products = await this.$axios.$get('/api/products.json')
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
