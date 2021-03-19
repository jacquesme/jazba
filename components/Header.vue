<template>
  <div class="w-full bg-white">
    <div class="flex justify-center w-full">
      <div class="w-64 p-6">
        <img src="/img/logo/Logo.png" alt="logo" class="m-auto" />
      </div>
    </div>
    <div class="flex justify-center w-full mb-11">
      <div
        class="flex mx-4 md:mx-0 flex-row space-x-4 md:space-x-10 justify-center w-full md:w-2/3"
      >
        <div>
          <NuxtLink to="/" class="text-md md:text-md">Home</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/about" class="text-md md:text-md">About Us</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/collections" class="text-md md:text-md"
            >Our Shoes</NuxtLink
          >
        </div>
        <div>
          <NuxtLink to="/contact" class="text-md md:text-md"
            >Contact Us</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
