// 引入lowdb(Json文件操作)
const low = require('lowdb');
// 引入文件存储模块
const FileSync = require('lowdb/adapters/FileSync');
// 创建数据存储实例
const adapter = new FileSync('db.json')
//新的 lowdb 数据库实例（db）。
const db = low(adapter)
//初始化数据{数组，对象}
db.defaults({ posts: [], user: {} })
  .write();

//获取数组，再在数组的末尾添加一个对象
db.get('posts')
  .push({ id: 1, title: '末尾' })
  .write();

//获取数组，再在数组的前面添加一个对象
db.get('posts')
  .unshift({ id: 0, title: '前面' })
  .write();

//获取单条数据
console.log(db.get('posts').find({id:1}));

//获取全部数据
console.log(db.get('posts').value());

//删除数据(会删除所有id为0的数据)返回的是删除的个数
db.get('posts')
 .remove({ id:0 })
 .write();

 //修改数据
 db.get('posts')
.find({ id: 1 })
.assign({ title: '修改' })
.write();



 

