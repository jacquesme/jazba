<template>
  <div class="w-full">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide><img src="/img/on1.png" alt="" /></swiper-slide>
      <swiper-slide><img src="/img/on2.png" alt="" /></swiper-slide>
      <swiper-slide><img src="/img/on31.png" alt="" /></swiper-slide>
    </swiper>
    <div class="swiper-button-next focus:outline-none"></div>
    <div class="swiper-button-prev focus:outline-none"></div>
    <div slot="pagination" class="swiper-pagination w-full space-x-6"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  },
}
</script>

<style lang="scss" scoped>
.swiper-pagination {
  background: brown;
}
</style>
