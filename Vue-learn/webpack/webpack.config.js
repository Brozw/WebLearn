// 依赖node,npm init进行初始化生成package.json文件
//webpack进行打包生成dist/bundle.js文件
// "bulid":"webpack"将npm run build 与wepack进行映射
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  module: {
    // rule是个数组，数组里存放对象
    rules: [
      {
        //   正则
        test: /\.css$/,
        // 多个loader从右向左读,详见官网
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  output: {
    //   动态获取依赖node的path获取绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
