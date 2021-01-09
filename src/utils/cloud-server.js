import * as serverConfig from '@/config/server'
import Parse from 'parse'

/**
 * 初始化云函数 parseServer版
 * @method initCloudServer
 * @param {string} appId
 * @param {string} serverURL
 * @param {string} javaScriptKey
 * */
export const initCloudServer = (appId, serverURL, javaScriptKey) => {
  // 注册appid
  Parse.initialize(appId, javaScriptKey)
  // 配置服务端地址
  Parse.serverURL = serverURL
}
const install = function (Vue, options = serverConfig) {
  initCloudServer(options.appId, options.serverURL, options.javaScriptKey)
  Vue.prototype.$Parse = Parse
}
export default { install }
