import config from './config'
let {baseUrl} = config
export default (url, data = {}, method = 'GET') => {
  return new Promise ((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data,
      method,
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}