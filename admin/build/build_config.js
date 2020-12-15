const dayjs = require("dayjs");

module.exports = {
  version: `'1.0.0_${dayjs().format("YYYYMMDDHHmm")}_${process.env.NODE_ENV}'`,
  cdnConfig: [
    {
      name: "axios",
      var: "axios",
      path: "dist/axios.min.js"
    },
    {
      name: "vue",
      var: "Vue",
      path: "dist/vue.runtime.min.js"
    },
    {
      name: "vue-router",
      var: "VueRouter",
      path: "dist/vue-router.min.js"
    },
    {
      name: "vuex",
      var: "Vuex",
      path: "dist/vuex.min.js"
    },
    {
      name: "element-ui",
      var: "ELEMENT",
      style: "/lib/theme-chalk/index.css",
      path: "lib/index.js"
    }
  ]
};
