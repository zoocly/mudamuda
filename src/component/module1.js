let name = '小明';
let age = 18;
let flag = true;
function sum(num1, num2){
  return num1 + num2
}
if(flag){
  console.log('小明的SUMFUNC', sum(1,1));
}

/*
* default 的意思是默认导出，一个文件只能默认导出一个
* 在import时，可以自己改变名字 且 不加花括号
* 导出时 需要在html的script标签 加入 type="module"
* */
export default {
  name,
  age,
  flag,
  sum
}
