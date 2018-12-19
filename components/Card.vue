<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img 
          :src="image" 
          :alt="title">
      </figure>
    </div>
    
  </div>
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
.card {
  margin-bottom: 1em;
}
</style>
