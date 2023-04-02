export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "NuxtTodoApp",
      meta: [
        { charset: "utf-8" },
        { name: "Nuxtodoapp", content: "Nuxt.jsのTodoアプリです" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      // link: [
      //   { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      //   },
      // ],
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
