/**
 * baseURL
 */
const baseURL_test = 'http://47.101.209.156:18080'; // 本地--口访问地址
// const baseURL_test = 'http://crm.sino-bestway.com.cn'; // 本地--口访问地址
const baseURL_prd = '/'; // 发布--接口访问地址

/**
 * 获取 token 相关参数
 */
const getTokenParams = {
  username: 'webservice',
  password: 'handhand', // 测试环境--密码
  // password: 'bsw2019webservice', // 线上环境--密码
  grant_type: 'password',
  clientId: '599a7118d25043bf999e9e31cd401bef',
  clientSecret: '2e460da3-eb76-4dde-864b-3eeb9894b073',
}

module.exports = {
  baseURL_test, // baseURL_test
  baseURL_prd, // baseURL_prd
  getTokenParams, // 获取 token 相关参数
};