<template>
  <section 
    :style="style" 
    class="hero is-dark is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <header class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item is-invisible">
            <Logo/>
          </a>
          <nuxt-link 
            to="/" 
            class="zuruck navbar-item button is-danger is-rounded is-medium">
            zurüüück
          </nuxt-link>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered is-centered">
        <div class="block">
          <a 
            href="https://www.instagram.com/shottas.de/" 
            title="Instagram Shottas.de"
            target="_blank">
            <b-icon
              icon="instagram"
              size="is-medium"
              type="is-danger"/>
          </a>           
          <a 
            href="https://www.facebook.com/shottas.de/" 
            title="Facebook Shottas.de"
            target="_blank">
            <b-icon
              icon="facebook-box"
              size="is-medium"
              type="is-danger"/>
          </a>
          <a 
            href="mailto:mail@shottas.de" 
            title="E-Mail Shottas.de"
            target="_blank">
            <b-icon
              icon="email-outline"
              size="is-medium"
              type="is-danger"/>
          </a>
          <a 
            href="https://discord.gg/S6HSdJ7" 
            title="Discord Shottas.de"
            target="_blank">
            <b-icon
              icon="discord"
              size="is-medium"
              type="is-danger"/>
          </a>
        </div>
        <h1 class="title">
          <Logo/>
          in <br>
          {{ title }}          
        </h1>
        <b-icon
          icon="calendar-range"
          size="is-small"/> {{ date }} <b-icon
            icon="timer"
            size="is-small"/> Lesedauer: {{ timetoread }} Minute(n)
        <div class="has-text-centered"> 
          <div class="author">
            <figure class="image is-centered is-48x48">
              <img 
                :src="autor.autorImage" 
                class="is-rounded authorImage">
            </figure>
          </div>
        </div>
        
        <b-icon
          icon="chevron-down"
          size="is-large"
          type="is-danger"/>
      </div>

    </div>

  </section>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  components: {
    Logo
  },
  props: {
    title: { type: String, default: 'hehe' },
    image: { type: String, default: 'hehe' },
    autor: { type: Object, default: () => {} },
    timetoread: { type: String, default: '5' },
    date: { type: String, default: '123' }
  },
  data() {
    return {}
  },
  computed: {
    style() {
      return 'background-image: url("' + this.image + '")'
    }
  }
}
</script>

<style>
.zuruck {
  margin-top: 1.5em;
}
.author .image {
  margin-top: 1em;
}
.hero.is-dark,
.has-background-dark {
  background-size: cover;
}
.navbar.is-dark {
  background-color: #000;
}
.navbar-brand {
  display: flex;
  align-items: center;
}
.is-centered {
  margin: auto;
  flex: 1;
  justify-content: center;
}
@media screen and (max-width: 1087px) {
  .navbar > .container {
    display: flex;
  }
}
.block a {
  margin-right: 2em;
}
</style>
