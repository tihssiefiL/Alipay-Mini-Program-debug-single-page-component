## 发现支付宝的小程序貌似不能像微信小程序一样单页面调试，每次都要手动点，很麻烦
### 直接粘贴到项目根目录的app.js里

App({
  onLaunch(options) {
    if (options.query) {
      let query = null
      for (let i in options.query) {
        query = i
      }
      let url = '/pages/' + query.trim() + '/' + query.trim()
      my.navigateTo ({
        url, 
        success: (res) => {
          console.debug('%c 跳转到：' + url, 'color:white; background-color:#f00')
        },
      })
    }
  }
})
