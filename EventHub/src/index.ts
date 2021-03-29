class EventHub {
  // 保存时间名和事件回调
  private cache: {[key: string]: Array<(data: unknown) => void> } = {}
  // 把fn放进cache[eventName]里
  on(eventName: string, fn: (data: unknown) => void) {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  // 把cache[eventName]数组里面的fn全部调用
  emit(eventName: string, data?: unknown) {
    (this.cache[eventName] || []).forEach(fn => fn(data))
  }
  // 把fn从cache[eventName]中移除
  off(eventName: string, fn: (data: unknown) => void) {
    let index = indexOf(this.cache[eventName], fn)
    if(index === -1) return
    this.cache[eventName].splice(index, 1)
  }
}

export default EventHub;

/**
 * 帮助函数 indexOf 解决原生Array.indexOf的兼容性问题
 * @param array 
 * @param item 
 * @returns index
 */

function indexOf(array, item) {
  if(array === undefined) return -1
  let index
  for(let i = 0; i < array.length; i++) {
    if(array[i] === item) {
      index = i
      break
    }
  }
  return index
}