<template>
  <div>
    <Navbar/>
    <transition
      name="tray"
      mode="in-out"
    >
      <nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    Footer: () => import('@/components/Footer.vue')
  },
  data() {
    return {}
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
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

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
