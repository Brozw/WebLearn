const { sum, mul } = require('./mathUtil.js');

// 没有就在node_modules找
require('../css/style.css');

console.log(sum(20, 30));
console.log(mul(20, 30));
