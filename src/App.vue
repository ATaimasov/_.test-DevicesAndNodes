<script setup>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'

</script>

<template>
  <div>
    <header>
      <h1>ToDo list</h1>
    </header>
    <main>
      <AddTodo/>
      <TodoList/>
    </main>
  </div>
</template>

<style scoped>



</style>
