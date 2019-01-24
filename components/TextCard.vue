<template>
  <nuxt-link 
    :to="link" 
    class="TextCard">
    <strong>{{ title }}</strong>
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
  }
}
</script>

<style>
.TextCard {
  display: block;
}
a.TextCard {
  text-decoration: underline;
  color: #fff598 !important;
}
</style>
