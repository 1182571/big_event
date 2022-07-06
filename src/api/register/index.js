import request from '@/utils/request'
export const registerAPI = () => request({
  url: '/api/reg',
  method: 'post',
  data: {
    username: 'zmy',
    password: '111111',
    repassword: '111111'
  }
})
