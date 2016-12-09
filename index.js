(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
    typeof define === 'function' && define.amd ? define(['vue'], factory) :
    (global.vueEventbus = factory(global.Vue));
}(this, function (Vue) { 'use strict';

    Vue = 'default' in Vue ? Vue['default'] : Vue;

    var bus = new Vue();

    var index = {
        install: function install(Vue, options) {
            Vue.prototype.$broadcast = function (event, payload) {
                return bus.$emit(event, payload);
            };
            Vue.prototype.$listen = function (event, fn) {
                return bus.$on(event, fn);
            };
            Vue.prototype.$deafen = function (event, fn) {
                return bus.$off(event, fn);
            };
        }
    };

    return index;

}));