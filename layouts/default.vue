<template>
  <div>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style>
html {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/shottas-24a2b.appspot.com/o/site%2Fshottas_pattern.svg?alt=media&token=c76cbd3d-a21b-44a6-bc03-b89a46a4c0be');
  background-repeat: repeat;
  background-size: 55px !important;
  background-color: #1e1e1e;
}
.section {
  padding: 0 1.5em;
}
</style>
