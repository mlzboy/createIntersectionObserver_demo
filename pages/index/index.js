//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,

  },
  onLoad: function () {
    this.setData({
      rows: [{ id: 1, name: 1 }, { id: 2, name: 2 }, { id: 3, name: 3 },
      { id: 4, name: 4 }, { id: 5, name: 5 }, { id: 6, name: 6 }, { id: 7, name: 7 }, { id: 8, name: 8 }]
    })


    this._observer = wx.createIntersectionObserver(this)
    this._observer
      .relativeToViewport()
      .observe('.item', (res) => {
        console.log(res);
        this.setData({
          appear: res.intersectionRatio > 0
        })
      })




    }
})
