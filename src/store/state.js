import { loadBgimg, loadAccessToken, loadExpiresIn, loadShopCat } from 'common/js/cache'

const state = {
  // 个人中心背景图片
  backgroundImg: loadBgimg(),
  // 个人信息
  userInfo: {
    name: '',
    phone: ''
  },
  // access_token
  accessToken: loadAccessToken(),
  // 过期时间
  expiredAt: loadExpiresIn(),
  // 购物车中的商品
  shopCat: loadShopCat()
}

export default state
