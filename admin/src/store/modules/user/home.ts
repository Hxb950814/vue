import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

@Module({ name: "Home", dynamic: true, namespaced: true, store })
export default class Home extends VuexModule {
  public token = "";
  public name = "";
  public moduleId = "";

  get getToken() {
    const obj = JSON.parse(<string>localStorage.getItem("vuexData")) || {};
    return obj["Home"]?.token;
  }

  get getModuleId() {
    const obj = JSON.parse(<string>localStorage.getItem("vuexData")) || {};
    return obj["Home"]?.moduleId;
  }

  get getName() {
    const obj = JSON.parse(<string>localStorage.getItem("vuexData")) || {};
    return obj["Home"]?.name;
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }
  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }
  @Mutation
  private REMOVE_TOKEN(token: string) {
    this.token = token;
  }
  @Mutation
  private SET_MODULEID(moduleId: string) {
    this.moduleId = moduleId;
  }

  @Action public setToken(data: any) {
    this.SET_TOKEN(data);
  }
  @Action public setName(data: any) {
    this.SET_NAME(data);
  }
  @Action public setModuleId(data: any) {
    this.SET_MODULEID(data);
  }
  @Action public removeToken() {
    this.REMOVE_TOKEN("");
  }
}

export const HomeModule = getModule(Home);
