// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: ['https://www.tangyc.xyz//banner/banner1.jpg'],
      indicatorDots:true,
      autoplay:true,
      flag:true,
      interval:3000,
      duration:1000,
    navbar:['护肤','彩妆','香水','个人huli'],
    currentTab:0,
    hot_products:[
      {
        product_id: 1,
        imageurl: 'http://mz.djmall.xmisp.cn/files/banner/20161222/148237182618.png',
        html: "http://mz.djmall.xmisp.cn/files/activity/20161216/5853a0137573e84/mz2_ajax/index.html"
      },
      {
        product_id: 2,
        imageurl: 'http://mz.djmall.xmisp.cn/files/banner/20161202/148066038440.png',
        html: "http://mz.djmall.xmisp.cn/files/activity/20161208/584926f0017d874/mz1/index.html"
      }
    ],
    navItems: [
      {
        typeId: 0,
        name: '品牌馆',
        url: 'bill',
        imageurl: '../../image/tabbar/home.png',
      },
      {
        typeId: 1,
        name: '类目',
        url: 'bill',
        imageurl: '../../image/tabbar/classify.png',
      },
      {
        typeId: 2,
        name: '特惠专场',
        url: 'bill',
        imageurl: '../../image/tabbar/cart.png'
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: '../../image/tabbar/user.png'
      }
    ],
    // 新品上架
    goodsItems: [
      {
        goodId: 0,
        name: '兰蔻小黑瓶',
        url: 'bill',
        imageurl: '../../image/O1CN01KOCak722JqYMakWlk_!!809107100.jpg_60x60q90.jpg',
        newprice: "￥200.00",
        oldprice: "￥300.00",
      },
      {
        goodId: 1,
        name: '兰蔻清莹柔肤爽肤水',
        url: 'bill',
        imageurl: '../../image/O1CN01vy0PNx22JqYWJkd6b_!!809107100.jpg_60x60q90.jpg',
        newprice: "￥120.00",
        oldprice: "￥200.00",
      },
      {
        goodId: 2,
        name: '倩碧水嫩保湿精华面霜',
        url: 'bill',
        imageurl: '../../image/O1CN016ChNgf22JqYN3eoe5_!!0-item_pic.jpg_430x430q90.jpg',
        newprice: "￥320.00",
        oldprice: "￥400.00",
      },
      {
        goodId: 3,
        name: '特效润肤露',
        url: 'bill',
        imageurl: '../../image/O1CN0122JqX37k9sLvFpp_!!809107100.png_60x60q90.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      },
      {
        goodId: 4,
        name: '倩碧焕妍活力精华露',
        url: 'bill',
        imageurl: '../../image/O1CN01dgPRDv22JqXlmOmNe_!!809107100.jpg_60x60q90.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }, {
        goodId: 5,
        name: '日本资生堂洗颜',
        url: 'bill',
        imageurl: '../../image/O1CN01dgPRDv22JqXlmOmNe_!!809107100.jpg_60x60q90.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }
    ],

    newgoods_head_url: "https://www.tangyc.xyz//banner/banner1.jpg",

    // 新品上架
    recommends: [

      {
        goodId: 7,
        name: 'OLAY玉兰油精油沐浴露玫瑰滋养二合一450ml',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161213/148162245074.jpg',
        newprice: "￥36.60",
        oldprice: "￥40.00",
      },
      {
        goodId: 10,
        name: '兰蔻玫瑰清滢保湿柔肤水嫩肤水化妆水400ml补水保湿温和不刺激',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057937593.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }, {
        goodId: 11,
        name: 'Lancome/兰蔻清莹柔肤爽肤水/粉水400ml补水保湿玫瑰水化妆水',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      },
      {
        goodId: 12,
        name: '美国CLINIQUE倩碧黄油无油/特效润肤露125ml',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        newprice: "￥239.00",
        oldprice: "￥320.00",
      },
      {
        goodId: 13,
        name: '法国LANCOME兰蔻柔皙轻透隔离防晒乳霜50ML2017年3月到期',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058014894.jpg',
        newprice: "￥130.00",
        oldprice: "￥180.00",
      },
    ],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})