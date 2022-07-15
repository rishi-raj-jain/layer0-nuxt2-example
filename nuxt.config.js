import fs from 'fs'

export default {
  head: {
    title: 'layer0-nuxt-example',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  },
  components: true,
  css: ['@/assets/css/main.css'],
  buildModules: ['@nuxt/postcss8', '@layer0/nuxt/module'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend() {
      const BUILD_ID = new Date().getTime()
      fs.writeFileSync('BUILD_ID.js', `export const BUILD_ID=${String(BUILD_ID)}`)
    },
  },
}
