const install = function (Vue) {
    Vue.prototype.$tips = {
        username_cant_empty: '用户名不能为空',
        password_cant_empty: '密码不能为空'
    }
  }
  export default { install }