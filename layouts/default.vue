<template>
  <div>
    <Navbar/>
    <transition
      name="fade"
      mode="out-in"
    >
      <nuxt />
    </transition>
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
html {
  background: #000;
}
@media screen and (max-width: 1600px) {
  body {
    margin: 0 !important;
  }
}
body {
  max-width: 1600px;
  margin: 2em auto;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  transform: translateX(-100%);
}
.fade-enter {
  transform: translateX(-100%);
}
</style>
