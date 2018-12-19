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
  background: #fff7f7;
}
.container {
  max-width: 100%;
}
@media screen and (max-width: 800px) {
  body {
    margin: 0 !important;
  }
}
body {
  max-width: 800px;
  margin: 2em auto;
}
section {
  padding: 0 1.5rem;
}
</style>
