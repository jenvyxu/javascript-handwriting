import EventHub from '../src/index';

type TestCase = (message: string) => void

const test1: TestCase = (message) => {
  const eventHub = new EventHub;
  console.assert(eventHub instanceof Object === true, 'eventHub是一个对象');  
  console.log(message)
}

const test2: TestCase = (message) => {
  const eventHub = new EventHub;
  let called  = false
  eventHub.on('xxx', (y) => {
    called = true
    console.assert(y === 'hello world')
  })
  eventHub.emit('xxx', 'hello world')
  console.assert(called)
  console.log(message)
}

const test3: TestCase = (message) => {
  const eventHub = new EventHub()
  let called = false
  const fn1 = () => {
    called = true
    console.log('fn1没有被执行')
  }
  eventHub.on('yyy', fn1)
  eventHub.off('yyy', fn1)
  eventHub.emit('yyy')
  console.assert(called === false)
  console.log(message)
}

test1('EventHub可以创建对象');
test2('.on 了之后 .emit 会触发 .on 的函数');
test3('.off 有用');