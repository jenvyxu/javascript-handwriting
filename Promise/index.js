class Promise2 {
  constructor(fn) {
    if(typeof fn !== 'function') {
      throw new Error('只能传入函数')
    }
    this.state = 'pending'
    this.callback = []
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(result) {
    if(this.state === 'pending') {
      this.state = 'fulfilled'
      setTimeout(() => {
        this.callback.forEach(handle => {
          if(typeof handle[0] === 'function') {
            handle[0].call(undefined, result)
          }
        })
      }, 0)
    }
  }
  reject(reason) {
    if(this.state === 'pending') {
      this.state = 'rejected'
      setTimeout(() => {
        this.callback.forEach(handle => {
          if(typeof handle[1] === 'function') {
            handle[1].call(undefined, reason)
          }
        })
      }, 0)
    }
  }
  then(succeed, fail) {
    let handle = []
    if(typeof succeed === 'function') {
      handle[0]= succeed
    }
    if(typeof fail === 'function') {
      handle[1] = fail
    }
    this.callback.push(handle)
    return undefined
  }
}

const promise = new Promise2(function(resolve, reject) {
  setTimeout(() =>{
    resolve(123)
    resolve(456)
  }, 1000)
})

promise.then((x) => {
  console.log('x', x)
})
promise.then((y) => {
  console.log('y', y)
})