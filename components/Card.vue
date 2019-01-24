<template>
  <nuxt-link :to="item.id">
    <figure 
      :style="style" 
      class="image is-1by1"/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: '123',
          image: 'https://bulma.io/images/placeholders/1280x960.png',
          title: 'hehe'
        }
      }
    }
  },
  computed: {
    style() {
      return 'background-image: url("' + this.item.artikelImage + '")'
    }
  }
}
</script>

<style>
.card {
  background: #ff3860;
  padding: 0.25em;
  margin-bottom: 1.5em;
  box-shadow: 2px 2px 30px 2px #00000070;
}
</style>
