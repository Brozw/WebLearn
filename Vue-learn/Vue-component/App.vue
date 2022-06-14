
<template>
  <!-- 汇总所有组件 -->
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
// 引入组件
import School from './School'
import Student from './Student'

export default {
  name: 'app',
  // 注册组件
  components: { School, Student }
}
</script>

<style>
</style>