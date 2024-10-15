<script setup>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

</script>

<template>
  <div>
    <TheHeader/>
      <Teleport to="#main">
        <AddTodo/>
        <TodoList/>
      </Teleport>
    <TheFooter/>
  </div>
</template>

<style scoped>



</style>
