// 作为Actions的所有子模块挂载实例的根目录
// const {get， getAsync， post， postAsync} = request；
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// @ts-ignore vuex的持久化管理 根据模块和指定需要存储的进行存储
const vuexPersisted = new createPersistedState({
  key: "vuexData",
  storage: window.localStorage,
  reducer: (state: any) => ({
    Home: {
      token: state.Home.token,
      name: state.Home.name,
      moduleId: state.Home.moduleId
    }
  })
});

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [vuexPersisted]
});
