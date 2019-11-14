
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icons/rcti_32.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    extractCSS: true
  },
  srcDir: 'src',
  buildDir: 'functions/.nuxt',
  pwa: {
    manifest: {
      name: 'RCTI+ - Live Streaming Program 4 TV Terpopuler',
      short_name: 'RCTI+ Lite',
      description: 'Live Streaming Program RCTI, MNCTV, GTV & iNews. Menyajikan konten ekslusif yang tidak tayang di TV & Informasi Trending Terupdate. Nonton Gak Monoton di RCTI+.',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#000000',
      theme_color: '#171717',
      gcm_sender_id: "912856755471",
      icons: [
        {
          'src': '../icons/rcti_16.png',
          'sizes': '16x16',
          'type': 'image/png'
        },
        {
          'src': '../icons/rcti_128.png',
          'sizes': '128x128',
          'type': 'image/png'
        },
        {
          'src': '../icons/rcti_192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': '../icons/rcti_256.png',
          'sizes': '256x256',
          'type': 'image/png'
        },
        {
          'src': '../icons/rcti_384.png',
          'sizes': '384x384',
          'type': 'image/png'
        },
        {
          'src': '../icons/rcti_512.png',
          'sizes': '512x512',
          'type': 'image/png'
        }
      ]
    }
  }
}
