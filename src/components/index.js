import leftcard from "./leftcard.vue";
import centercard from "./centercard.vue";
import self from "./self.vue";
import research from "./research.vue";
import publications from "./publications.vue";
import services from "./services.vue";
import people from "./people.vue";

export default {
  install(Vue) {
    Vue.component("v-leftcard", leftcard);
    Vue.component("v-centercard", centercard);
    Vue.component("v-self", self);
    Vue.component("v-research", research);
    Vue.component("v-publications", publications);
    Vue.component("v-services", services);
    Vue.component("v-people", people);
  }
};
