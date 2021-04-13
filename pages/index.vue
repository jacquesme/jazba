<template>
  <div>
    <Carousel class="animate__animated animate__fadeIn" />

    <div class="px-10 md:px-40 mt-32">
      <div class="w-full flex flex-col justify-center -mt-1.5">
        <h2 class="text-center text-xl font-bold">Tredwear's Story</h2>
        <p class="text-center text-justify text-sm mt-6">
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
      <h2 class="text-center text-xl font-bold mt-14 -mb-0.5">Top Products</h2>
      <div class="flex flex-col md:flex-row mt-8 p-0.5 md:space-x-5">
        <TopProducts
          v-for="(topItem, index) in topItems"
          :key="index"
          :top-item="topItem"
        />
      </div>
      <h2 class="text-center text-xl font-bold mt-28">Featured Category</h2>
      <div class="flex flex-col md:flex-row mt-7 md:px-16">
        <FeatureFirstCategory
          v-for="(featureFirstItem, index) in featureFirstItems"
          :key="index"
          :feature-first-item="featureFirstItem"
        />
      </div>
      <div class="flex flex-col md:space-x-6 md:flex-row md:px-16">
        <FeatureSecondCategory
          v-for="(featureSecondItem, index) in featureSecondItems"
          :key="index"
          class="my-4"
          :feature-second-item="featureSecondItem"
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
        <HomeViewOne />
        <HomeViewOneSearch
          v-for="(homeOneViewItem, index) in homeOneViewItems"
          :key="index"
          :home-one-view-item="homeOneViewItem"
        />
      </div>
      <div class="flex flex-col md:flex-row mt-4 md:px-52">
        <HomeViewTwoSearch
          v-for="(homeTwoViewItem, index) in homeTwoViewItems"
          :key="index"
          :home-two-view-item="homeTwoViewItem"
        />
      </div>
    </div>
    <div class="border-b border-grey-3 pb-10">
      <h2 class="text-center text-md font-bold mt-10">Featured Collection</h2>
      <div class="flex justify-center mt-4">
        <button class="border-2 border-black text-xs py-1 px-5">
          View More
        </button>
      </div>
      <div class="flex flex-col md:flex-row mt-4 md:px-52">
        <FeatureCollection
          v-for="(featureCollectionItem, index) in featureCollectionItems"
          :key="index"
          :feature-collection-item="featureCollectionItem"
        />
      </div>
    </div>
    <div class="pt-10 pb-16">
      <h2 class="text-center text-md font-bold mt-2">Feel The Vibe</h2>
      <div class="flex justify-center mt-4">
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
import TopProducts from '~/components/TopProducts'
import TopItems from '~/assets/data/top-products.json'
import FeatureFirstCategory from '~/components/FeatureFirstCategory'
import FeatureFirstItems from '~/assets/data/feature-firstcategory.json'
import FeatureSecondCategory from '~/components/FeatureSecondCategory'
import FeatureSecondItems from '~/assets/data/feature-secondcategory.json'
import HomeViewOne from '~/components/HomeViewOne'
import HomeViewOneSearch from '~/components/HomeViewOneSearch'
import HomeOneViewItems from '~/assets/data/home-oneview.json'
import Carousel from '~/components/Carousel'
import HomeViewTwoSearch from '~/components/HomeViewTwoSearch'
import HomeTwoViewItems from '~/assets/data/home-twoview.json'
import FeatureCollection from '~/components/FeatureCollection'
import FeatureCollectionItems from '~/assets/data/feature-collection.json'
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
  data() {
    return {
      topItems: TopItems,
      featureFirstItems: FeatureFirstItems,
      featureSecondItems: FeatureSecondItems,
      homeOneViewItems: HomeOneViewItems,
      homeTwoViewItems: HomeTwoViewItems,
      featureCollectionItems: FeatureCollectionItems,
    }
  },
}
</script>

<style scoped></style>
