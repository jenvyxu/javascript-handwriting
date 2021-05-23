let letters = 'abcdefghijklmnopqrstuvwxyz'
const str1 = 'uvwxyz'
const str2 = 'ABcde'

// 生成斐波拉契数组
const febList = new Array(49).fill().reduce((result, item, i) => {
  if(i < 2) {
    result.push(1)
  } else {
    result[i] = result[i-1] + result[i-2]
  }
  return result
}, [])

// 生成
function decode(str) {
  let arr = [...str]
  return arr.reduce((result, item, index) => {
    // 字符偏移量
    let offset = febList[index]
    let index2 = offset + letters.indexOf(item.toLowerCase())
    // 字符位置
    let index3 = index2 >= letters.length ? (index2 + 1) % letters.length - 1 : index2
    // 偏移后的字符
    let letter = letters.charAt(index3)
    // 判断原字符的大小写
    if(item === item.toLowerCase()) {
      return result += letter
    } else {
      return result += letter.toUpperCase()
    }
  }, '')
}


const start = Date.now()

for(let i = 0; i < 500; i++) {
  let str = createStr()
  console.log(decode(str))  
}

const end = Date.now()
console.log(end - start) // 129ms左右


function createStr() {
  return new Array(20).fill().reduce((str) => {
    const index = Math.floor(letters.length * Math.random())
    return str + (Math.random() < 0.5 ? letters[index] : letters[index].toUpperCase())
  }, '')  
}
