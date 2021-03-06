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
  shopCat: loadShopCat(),
  // 结算中的商品
  payShop: [],
  // 结算地址选择id
  addressId: '',
  // 结算总金额
  totalMoney: 0,
  // 选择优惠券
  chooseCoupon: {
    id: '',
    money: '0.00'
  }
}

export default state
