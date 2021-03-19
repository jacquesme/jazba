<template>
  <div class="w-full">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide><img src="/img/banner/on1.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="/img/banner/on21.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="/img/banner/on31.jpg" alt="" /></swiper-slide>
    </swiper>
    <div class="swiper-button-next focus:outline-none" />
    <div class="swiper-button-prev focus:outline-none" />
    <div slot="pagination" class="swiper-pagination w-full space-x-6 mt-6" />
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

<style>
.swiper-button-next,
.swiper-button-prev {
  @apply text-accent-orange;
  top: 65% !important;
}
.swiper-pagination-bullet-active {
  @apply bg-accent-orange;
}

@media screen and (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    top: 40% !important;
  }
}
</style>
