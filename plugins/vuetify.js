import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components
  })

  nuxtApp.vueApp.use(vuetify)
})


Vue.use(Vuetify);

// オプションをエクスポートします。といっても、今回は特にオプション設定していないので空オブジェクトです。
export const options = {}

export default new Vuetify(options);