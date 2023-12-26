//引入mysql模块
const mysql = require( 'mysql2');
// 创建连接池。特定于池的设置是默认值
const pool = mysql.createPool({
  host:'192.168.0.106' ,// 数据库主机名
  user:'bing',// 数据库用户名password"，// 数据库密码
  password:'MysqlDog34994963.',// 数据库密码
  database: 'nodejs' ,// 数据库名称
  connectionLimit: 20,// 最大连接数
  maxIdle: 200,// 最大空闲连接数，默认值与“connectionLimit”相同
  idleTimeout: 60000,// 空闲超时
  queueLimit:0,//队列限制
  enableKeepAlive: true,//启用保活
  keepAliveInitialDelay: 0//保持活动初始延迟
});

module.exports = pool;
// 查询数据库(测试是否链接上数据库)
// pool.query('SELECT 1', (error, results) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log("********",results);
// });
