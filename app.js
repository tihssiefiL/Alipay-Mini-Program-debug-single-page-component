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