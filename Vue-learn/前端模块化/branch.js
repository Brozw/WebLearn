let name = 'ming';
let age = 18;
let flag = true;
function sum(sum1, sum2) {
  return sum1 + sum2;
}

if (flag) {
  console.log(sum(10, 20));
}



// 导出方式1
export { flag, sum };

// 导出方式2
export var i = 100;

//导出函数/类
export function min(num1,num2){
    return num1-num2
}

export class Person{
    run(){
        console.log('run')
    }
}

//export default
const address = 'Beijing'
export default address