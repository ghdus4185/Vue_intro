<template>
  <div>
    <h1>여기는 최상위입니다.</h1>
    <!-- 3. 등록된 컴포넌트를 사용한다. -->
    <todo-list category="SSAFY"></todo-list>
    <todo-list category="Shopping"></todo-list>
    <TodoList category="Test"/>
  </div>
</template>

<script>
// 1. 컴포넌트를 가져온다.
import TodoList from './components/TodoList.vue'
export default {
  // 2. 가져온 컴포넌트를 등록한다.
  components: {
    TodoList,
  }
}
</script>
  
<style>
  .todo-list {
    display: inline-block;
    width: 33%;
  }
</style>