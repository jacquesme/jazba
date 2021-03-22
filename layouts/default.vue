<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import 'animate.css'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { Header, Footer },
}
</script>

<style>
html {
  font-family: Roboto, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
