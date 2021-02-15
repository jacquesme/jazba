<template>
  <div class="w-full bg-grey-2">
    <div class="flex justify-center w-full">
      <div class="logo-img w-2/3 mt-8 mb-6">
        <img
          src="/img/Logo.png"
          alt="logo"
          class="max-w-full h-full object-contain block m-auto p-2"
        />
      </div>
    </div>
    <div class="flex justify-center w-full pt-2 pb-8">
      <div
        class="flex flex-col md:flex-row md:space-x-20 justify-center w-full"
      >
        <div class="text-center md:text-left">
          <a href="#" class="text-sm text-accent-blue">Home</a>
        </div>
        <div class="text-center md:text-left">
          <a href="#" class="text-sm text-accent-blue">About Us</a>
        </div>
        <div class="text-center md:text-left">
          <a href="#" class="text-sm text-accent-blue">Our Shoes</a>
        </div>
        <div class="text-center md:text-left">
          <a href="#" class="text-sm text-accent-blue">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="w-full text-center pb-8">
      <h2 class="text-xs font-bold text-accent-blue">Address ###</h2>
    </div>
    <div class="w-full text-center bg-grey-4 py-2">
      <h2 class="text-xs text-accent-blue px-4">
        &#64;Copyright Jazba Sports. All Rights Reserved 2020
      </h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo-img {
  height: 64px;
}
@media (min-width: 768px) {
  .logo-img {
    width: 417px;
  }
}
</style>
