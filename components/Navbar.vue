<template>
  <section class="hero is-dark is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head is-invisible">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand is-centered">
            <a class="navbar-item">
              <Logo/>
            </a>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered is-centered">
        <div class="block">
          <a 
            href="https://www.instagram.com/shottas.de/" 
            title="Instagram Shottas.de">
            <b-icon
              icon="instagram"
              size="is-medium"
              type="is-danger"/>
          </a>           
          <a 
            href="https://www.facebook.com/shottas.de/" 
            title="Facebook Shottas.de">
            <b-icon
              icon="facebook-box"
              size="is-medium"
              type="is-danger"/>
          </a>
          <a 
            href="mailto:mail@shottas.de" 
            title="E-Mail Shottas.de">
            <b-icon
              icon="email-outline"
              size="is-medium"
              type="is-danger"/>
          </a>
          <a 
            href="https://discord.gg/S6HSdJ7" 
            title="Discord Shottas.de">
            <b-icon
              icon="discord"
              size="is-medium"
              type="is-danger"/>
          </a>
        </div>
        <h1 class="title">
          <Logo/>
        </h1>
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
  data() {
    return {}
  }
}
</script>

<style>
.hero.is-dark,
.has-background-dark {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/shottas-24a2b.appspot.com/o/site%2Fshottas_pattern.svg?alt=media&token=c76cbd3d-a21b-44a6-bc03-b89a46a4c0be');
  background-repeat: repeat;
  background-size: 55px;
}
.hero.is-dark a.navbar-item:hover {
  background-color: #ffffff00 !important;
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
