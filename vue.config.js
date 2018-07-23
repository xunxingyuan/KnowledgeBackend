// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');

const devProxy = ['/api'];  // 代理
const proEnv = require('./config/pro.env');  // 生产环境
const uatEnv = require('./config/uat.env');  // 测试环境
const devEnv = require('./config/dev.env');  // 本地环境
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if(env==='production'){  // 生产环境
  target = proEnv.hosturl;
}else if(env==='test'){ // 测试环境
  target = uatEnv.hosturl;
}else{  // 本地环境
  target = devEnv.hosturl;
}
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value) => {
  proxyObj[value] = {
    target: target,
    changeOrigin: true,
    pathRewrite: {
      [`^${value}`]: ''
    }
  };
});

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  devServer: {
    // open: process.platform === 'darwin',
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: proxyObj, // string | Object
  }
};