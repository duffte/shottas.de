<template>
  <nuxt-link :to="link">
    <div class="card has-shadow">
      <div class="card-image">
        <figure 
          :style="style" 
          class="image is-1by1"/>
      </div>    
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '../hehe'
    },
    image: {
      type: String,
      default: 'https://bulma.io/images/placeholders/1280x960.png'
    },
    title: {
      type: String,
      default: 'Super Titel'
    }
  },
  computed: {
    style() {
      return (
        'background-image: url("' +
        this.image +
        '"); background-position:center'
      )
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
