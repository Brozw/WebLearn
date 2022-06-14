
<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名:{{name}}</h2>
    <h2>学校年龄:{{age}}</h2>
    <button @click="showName">显示名字</button>
  </div>
</template>



<script>
// 组件交互相关的代码数据，方法……
//一般使用默认暴露，不使用中转变量，
// export default Vue.extend({
//   data() {
//     return {
//       schoolName: 'aaa',
//       address: 'bbb'
//     }
//   },
//   methods: {
//     showName() {
//       alert(this.schoolName)
//     }
//   },
// })




// 直接暴露组件数据
export default {
  name:'student',
  data() {
    return {
      name:'bbb',
      age:18
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  },
}


// export {school} 

</script>

