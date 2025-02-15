const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#9ccc65" },

  /*
  ** Global CSS
  */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-material" },
    { src: "~/plugins/axios" },
    { src: "~/plugins/firestore" }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCeb97VeWrNQHBKjZnr7t0XIfE2TskPHM8",
      pathRewrite: { "^/register/": "" }
    }
  },
  env: {
    NEWS_API_KEY: "68d9710afc284aad83a8139059256d8a"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
};
