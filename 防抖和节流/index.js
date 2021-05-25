// 防抖
function debounce(fn, delay = 500) {
  let timer = null
  return function () {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

// 节流
function throttle(fn, delay = 500) {
  let timer = null
  return function () {
    if(!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
}

// function debounce(fn, delay) {
//   let timer = null
//   return function() {
//     if(timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, arguments)
//       timer = null
//     }, delay)
//   }
// }

// function throttle(fn, delay) {
//  let timer = null
//  return function() {
//    if(timer) return
//    timer = setTimeout(() => {
//     fn.apply(this, arguments)
//     timer = null
//    }, delay)
//  }
// }


const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const fn1 = debounce(()=> { console.log('防抖') }, 1000)
const fn2 = throttle(()=> { console.log('节流') }, 1000)

btn1.addEventListener('click', fn1)
btn2.addEventListener('click', fn2)

/* 提示：
 * 1.采用闭包形式，都有timer = null
 * 2.防抖判断timer是否为空，非null值则清除定时器，同时设定定时器，设置和清除同时进行
 * 3.节流判断timer是否为空，null值时设定定时器
 */