//Buffer.alloc(1) 把数字转成Buffer数组  每次在内存中创建新的 安全就效率慢）
let buffer_1 = Buffer.alloc(1)
console.log("Buffer.alloc(1) 把数字转成Buffer数组  每次在内存中创建新的 安全就效率慢", buffer_1)
//Buffer.allocUnsafe(10) 把数字转成Buffer数组  每次在内存使用旧的 不安全就效率快
let buffer_2 = Buffer.allocUnsafe(10)
console.log("Buffer.allocUnsafe(10) 把数字转成Buffer数组  每次在内存使用旧的 不安全就效率快:".buffer_2)
//Buffer.from ("hello")把字符串转成Buffer数组  
let buffer_3 = Buffer.from("hello")
console.log("Buffer.from ('hello')把字符串转成Buffer数组  :", buffer_3)
//Buffer数组 转字符串（默认为UTF-8）
console.log("Buffer数组 转字符串:", buffer_3.toString())
//Buffer数组第一个数值转成10位的数值
console.log("Buffer数组第一个数值转成10位的数值:", buffer_3[0])
//Buffer数组第一个数值转成2位的数值
console.log("Buffer数组第一个数值转成2位的数值:", buffer_3[2].toString(2))
//修改Buffer数组
buffer_3[0] =95
//Buffer数组 转字符串（默认为UTF-8）
console.log("Buffer数组 转字符串:", buffer_3.toString())

//溢出 （舍去改为 0001 0110 1001  ==》 0110 1001）
buffer_3[0] =488

//中文  中文转buffer数组
buffer_4 =Buffer.from("你好")
console.log("中文转buffer数组",buffer_4)







