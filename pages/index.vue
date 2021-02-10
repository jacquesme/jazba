<template>
  <div>
    <Carousel />
    <!--    <img-->
    <!--      src="/img/on1.png"-->
    <!--      alt="logo1"-->
    <!--      class="w-full h-auto object-contain block m-auto"-->
    <!--    />-->
    <!--    <div class="w-full flex justify-center py-10">-->
    <!--      <div class="flex justify-between w-16">-->
    <!--        <div class="rounded-full w-2.5 h-2.5 bg-grey-3"></div>-->
    <!--        <div class="rounded-full w-2.5 h-2.5 bg-accent-orange"></div>-->
    <!--        <div class="rounded-full w-2.5 h-2.5 bg-grey-3"></div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="px-10 md:px-48">
      <div class="w-full flex flex-col justify-center py-10">
        <h2 class="text-center text-2xl font-bold">Jazba Story</h2>
        <p class="text-center text-justify text-base py-10">
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
      <h2 class="text-center text-2xl font-bold">Top Products</h2>
      <div class="flex flex-col md:flex-row mt-2 mb-10">
        <TopProducts
          v-for="(topItem, index) in topItems"
          :key="index"
          :top-item="topItem"
        />
      </div>
      <h2 class="text-center text-2xl font-bold pt-10">Featured Category</h2>
      <div class="flex flex-col md:flex-row mt-8">
        <FeatureFirstCategory
          v-for="(featureFirstItem, index) in featureFirstItems"
          :key="index"
          class="my-4"
          :feature-first-item="featureFirstItem"
        />
      </div>
      <div class="flex flex-col md:space-x-6 md:flex-row mt-2">
        <FeatureSecondCategory
          v-for="(featureSecondItem, index) in featureSecondItems"
          :key="index"
          :feature-second-item="featureSecondItem"
        />
      </div>
    </div>
    <img
      src="/img/on2.png"
      alt="logo2"
      class="w-full h-auto object-contain block m-auto my-12"
    />
    <div class="border-b border-grey-3 mb-10">
      <div class="flex flex-col md:flex-row px-10 md:px-48">
        <HomeViewOne />
        <HomeViewOneSearch
          v-for="(homeOneViewItem, index) in homeOneViewItems"
          :key="index"
          :home-one-view-item="homeOneViewItem"
        />
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
export default {
  components: {
    TopProducts,
    FeatureFirstCategory,
    FeatureSecondCategory,
    HomeViewOne,
    HomeViewOneSearch,
    Carousel,
  },
  data() {
    return {
      topItems: TopItems,
      featureFirstItems: FeatureFirstItems,
      featureSecondItems: FeatureSecondItems,
      homeOneViewItems: HomeOneViewItems,
    }
  },
}
</script>

<style lang="scss" scoped></style>
