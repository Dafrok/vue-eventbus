import Vue from 'vue';

const bus = new Vue();

export default {
    install(Vue, options) {
        Vue.prototype.$broadcast = (event, payload) => bus.$emit(event, payload);
        Vue.prototype.$listen = (event, fn) => bus.$on(event, fn);
        Vue.prototype.$deafen = (event, fn) => bus.$off(event, fn);
    }
};
