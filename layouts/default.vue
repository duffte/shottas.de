<template>
  <div>
    <Navbar/>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style>
p {
  font-family: 'Annie Use Your Telescope', cursive;
}
.section {
  padding: 0 1.5em;
}
</style>
