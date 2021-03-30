# 深拷贝
1. json的序列化和反序列化
2. loadsh的深拷贝api

```
var a = {
  b: 1,
  c: [1, 2, 3],
  d: {d1: 'ddd1', d2: 'dddd2'}
}

var a2 = JSON.parse(JSON.stringify(a))
```
JSON的缺点：
1. 不支持函数
2. 不支持undefined
3. 不支持引用
4. 不支持Date
5. 不支持正则表达式
6. 不支持Symbol
7. 以及所有JSON不支持的数据类型

2. 递归的方式进行深克隆