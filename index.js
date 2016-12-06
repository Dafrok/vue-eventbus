import Vue from 'vue'

export default {
  install (Vue, options) {
    const bus = new Vue()
    Vue.prototype.$listen = (event, callback) => {
      bus.$on(event, callback)
      return bus.off(event)
    }
    Vue.prototype.$un = bus.$off
    Vue.prototype.$boardcast = bus.$emit
    
  }
}
