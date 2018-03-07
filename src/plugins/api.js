import Auth from '@/plugins/auth.js'

export default (Vue) => {
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Auth
      }
    }
  });
}