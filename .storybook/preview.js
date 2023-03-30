import { createVuetify } from "vuetify";
import "vuetify/styles";

// Vuetify
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// const vuetify = createVuetify({
//   components,
//   directives,
//   theme: {
//     themes: {
//       light: {
//         colors: {
//           primary: "#000d6d",
//           background: "#fff",
//           error: "#d63031",
//           info: "#0984e3",
//           secondary: "#EDF2F7",
//           success: "#00cec9",
//           surface: "#fff",
//           warning: "#2d3436",
//         },
//         dark: false,
//         variables: {},
//       },
//     },
//   },
// });
// app.use(vuetify);

// export const decorators = [
//   (story) => ({
//     components: { story },
//     template: "<v-app><story /></v-app>",
//   }),
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
