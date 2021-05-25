let caches = []

function deepClone(source) {
  let dist
  if(source instanceof Object) {
    cache = findCache(source)
    if (cache) {
      return cache
    } else {
      if(source instanceof Array) {
        dist = new Array()
      } else if(source instanceof Function){
        dist = function() {
          source.apply(this, arguments)
        }
      } else if(source instanceof RegExp) {
        dist = new RegExp(source.source, source.flags)
      } else if(source instanceof Date) {
        dist = new Date(source)
      } else {
        dist = new Object()
      }
    }
    caches.push([source, dist])
    for(let key in source) {
      if(source.hasOwnProperty(key)) {
        dist[key] = deepClone(source[key])
      }
    }
    return dist
  }
  return source
}

function findCache(source) {
  for(let i = 0; i < caches.length; i++) {
    if (caches[i][0] === source) {
      return caches[i][1]
    }
  }
}

let obj = {
  a: 1,
  b: 'ssss',
  c: {
    name: 'xzw',
    age: 20,
    friends: ['mike', 'john']
  },
  d: new Date(),
  e: [1,2,3,4,'iii', { a: 1, b: 2}],
  g: /abc/ig,
  f: function() {
    console.log('hello')
  }
}

let xxx = deepClone(obj)
console.dir(xxx)