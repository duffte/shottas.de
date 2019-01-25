import { fireDb } from './plugins/firebase.js'
const pkg = require('./package')

module.exports = {
  mode: 'universal',
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/fireauth.js', ssr: false },
    '~/plugins/firebase.js',
    '~/plugins/md-it',
    { src: '~plugins/i18n.js' },
    { src: '~/plugins/lazyload', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    [
      'nuxt-i18n',
      {
        // vue-i18n configuration
        vueI18n: {},

        // If true, vue-i18n-loader is added to Nuxt's Webpack config
        vueI18nLoader: false,

        // List of locales supported by your app
        // This can either be an array of codes: ['en', 'fr', 'es']
        // Or an array of objects for more complex configurations:

        //{ code: 'en', iso: 'en-US', file: 'en-US.js' },
        //{ code: 'de', iso: 'de-DE', file: 'de-DE.js' }
        //   { code: 'es', iso: 'es-ES', file: 'es.js' }

        locales: [
          { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' },
          { code: 'de', iso: 'de-DE', file: 'de-DE.js', name: 'Deutsch' }
        ],

        // The app's default locale, URLs for this locale won't have a prefix if
        // strategy is prefix_except_default
        defaultLocale: 'de',

        // Separator used to generated routes name for each locale, you shouldn't
        // need to change this
        routesNameSeparator: '___',

        // Routes generation strategy, can be set to one of the following:
        // - 'prefix_except_default': add locale prefix for every locale except default
        // - 'prefix': add locale prefix for every locale
        // - 'prefix_and_default': add locale prefix for every locale and default
        strategy: 'prefix_except_default',

        // Wether or not the translations should be lazy-loaded, if this is enabled,
        // you MUST configure langDir option, and locales must be an array of objects,
        // each containing a file key
        lazy: true,

        // Directory that contains translations files when lazy-loading messages,
        // this CAN NOT be empty if lazy-loading is enabled
        langDir: 'lang/',

        // Set this to a path to which you want to redirect users accessing root URL (/)
        rootRedirect: null,

        // Enable browser language detection to automatically redirect user
        // to their preferred language as they visit your app for the first time
        // Set to false to disable
        detectBrowserLanguage: {
          // If enabled, a cookie is set once a user has been redirected to his
          // preferred language to prevent subsequent redirections
          // Set to false to redirect every time
          useCookie: true,
          // Cookie name
          cookieKey: 'i18n_redirected',
          // Set to always redirect to value stored in the cookie, not just once
          alwaysRedirect: false,
          // If no locale for the browsers locale is a match, use this one as a fallback
          fallbackLocale: null
        },

        // Set this to true if you're using different domains for each language
        // If enabled, no prefix is added to your routes and you MUST configure locales
        // as an array of objects, each containing a domain key
        differentDomains: false,

        // If using different domains, set this to true to get hostname from X-Forwared-Host
        // HTTP header instead of window.location
        forwardedHost: false,

        // If true, SEO metadata is generated for routes that have i18n enabled
        // Set to false to disable app-wide
        seo: false,

        // Base URL to use as prefix for alternate URLs in hreflang tags
        baseUrl: 'https://www.shottas.de',

        // By default a store module is registered and kept in sync with the
        // app's i18n current state
        // Set to false to disable
        vuex: {
          // Module namespace
          moduleName: 'i18n',

          // Mutations config
          mutations: {
            // Mutation to commit to store current locale, set to false to disable
            setLocale: 'I18N_SET_LOCALE',

            // Mutation to commit to store current message, set to false to disable
            setMessages: 'I18N_SET_MESSAGES'
          },

          // PreserveState from server
          preserveState: false
        },

        // By default, custom routes are extracted from page files using acorn parsing,
        // set this to false to disable this
        parsePages: false,

        // If parsePages option is disabled, the module will look for custom routes in
        // the pages option, refer to the "Routing" section for usage
        pages: {
          contact: {
            de: '/kontakt',
            en: '/contact'
          },
          _id: {
            de: '/:id?',
            en: '/:id?'
          }
        },

        // Called right before app's locale changes
        beforeLanguageSwitch: () => null,

        // Called after app's locale has changed
        onLanguageSwitched: () => null
      }
    ]
  ],

  generate: {
    routes: async () => {
      let routes = []
      //symptome
      const artikel = fireDb.collection('artikel')
      const artikelCollection = await artikel.get()
      for (const doc of artikelCollection.docs) {
        routes.push(`/${doc.data().data.id}`)
        routes.push(`/en/${doc.data().data.id}`)
      }
      return routes
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
