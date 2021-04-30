<template>
  <div
    class="flex flex-col md:flex-row space-x-0 pb-20 md:pb-24 md:space-x-8 mx-10 md:mx-72 md:px-48"
  >
    <ContactCard
      v-for="(contactItem, index) in contactItems"
      :key="index"
      :contact-item="contactItem"
      class="mt-5 wow zoomIn"
      data-wow-offset="20"
      data-wow-duration="1.2s"
      data-wow-delay="0.7s"
    />
  </div>
</template>

<script>
import ContactCard from '~/components/ContactUs'
import ContactItems from '~/assets/data/contact-us.json'
export default {
  components: { ContactCard },
  data() {
    return {
      contactItems: ContactItems,
    }
  },
}
</script>

<style scoped></style>
