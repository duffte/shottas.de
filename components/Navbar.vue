<template>
  <nav 
    id="nav" 
    class="navbar is-dark" 
    role="navigation" 
    aria-label="main navigation">
    <div class="container">      
      <div class="navbar-brand">
        <a 
          :class="{ 'is-active': showNav }" 
          role="button" 
          class="navbar-burger burger" 
          @click="showNav = !showNav">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
        <nuxt-link 
          :to="localePath('index')" 
          class="navbar-item">
          <Logo/>
        </nuxt-link>        
      </div>
      <div 
        id="navbarToggle" 
        :class="{ 'is-active': showNav }" 
        class="navbar-menu">
        <div class="navbar-start">

          <nuxt-link 
            :to="localePath('stories')" 
            class="navbar-item">{{ $t('stories.title') }}</nuxt-link>

          <nuxt-link 
            :to="localePath('shop')" 
            class="navbar-item">{{ $t('shop.title') }}</nuxt-link>

          <nuxt-link 
            :to="localePath('about')" 
            class="navbar-item">{{ $t('about.title') }}</nuxt-link>

          <nuxt-link 
            :to="localePath('contact')" 
            class="navbar-item">{{ $t('contact.title') }}</nuxt-link>
          <LanguageSwitcher/>
          <UserProfile/>
        </div>
      </div> 
    </div> 
  </nav>
</template>

<script>
export default {
  components: {
    LanguageSwitcher: () => import('@/components/LanguageSwitcher'),
    Logo: () => import('@/components/Logo'),
    UserProfile: () => import('@/components/UserProfile')
  },
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style>
.navbar-brand {
  align-items: center;
  display: flex;
}
.navbar-burger {
  background: white;
  border-radius: 50%;
}
.navbar {
  background-color: white;
  min-height: 10rem;
  position: relative;
  z-index: 30;
}
.navbar-brand,
.navbar-tabs {
  min-height: 10rem;
}

@media screen and (min-width: 1088px) {
  .navbar.is-dark .navbar-start > .navbar-item,
  .navbar.is-dark .navbar-start .navbar-link,
  .navbar.is-dark .navbar-end > .navbar-item,
  .navbar.is-dark .navbar-end .navbar-link {
    color: whitesmoke;
    font-size: 1.5em;
  }
}
</style>
