<template>
  <div class="navbar-item">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)">
      <img :src="locale.flag"> {{ locale.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  }
}
</script>
