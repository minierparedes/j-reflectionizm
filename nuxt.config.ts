import { defineNuxtConfig } from 'nuxt/config'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      title: '',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    buildAssetsDir: `${isDev ? '_nuxt' : 'assets'}`,
  },
  imports: {
    autoImport: false,
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  css: [
    '@/assets/scss/style.scss',
    '@/assets/scss/base.scss',
    '@/assets/scss/sections/header.scss',
    '@/assets/scss/sections/page-hero.scss',
    '@/assets/scss/sections/about-us.scss',
  ],
  telemetry: false,
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxt/image', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      CONTACT_FORM_URL: process.env.CONTACT_FORM_URL || process.env.CONTACT_FORM_URL_DEV,
    },
  },
  image: {
    dir: 'assets/images',
    quality: 80,
  },
  postcss: {
    plugins: { tailwindcss: {}, autoprefixer: {} },
  },
})
