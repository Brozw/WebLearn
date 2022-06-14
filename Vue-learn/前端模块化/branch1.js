// 导入{}中
import { flag, sum } from './branch.js';
// 直接导出
import { i } from './branch.js';
// 导入函数

import { min } from './branch.js';

import { Person } from './branch.js';

// 不用{}表示自己命名的是default，只能有一个
import addr from './branch.js';

import * as branch from './branch.js';

if (flag) {
  console.log(sum(20, 30));
}
console.log(i);
console.log(min(30, 20));

let p = new Person();

p.run();

console.log(addr);

console.log(branch.sum(10, 20));
