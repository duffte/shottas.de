<template>
  <div class="navbar-item">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </nuxt-link>
    <nuxt-link :to="switchLocalePath('de')">
      <img :src="'@/assets/flags/de.svg'">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      flag: {
        de: '../assets/flags/de.svg',
        en: '../assets/flags/us.svg'
      }
    }
  },
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  }
}
</script>
