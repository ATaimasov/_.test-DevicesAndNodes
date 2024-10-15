<script setup>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import TheHeader from '@/components/TheHeader.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <div>
    <TheHeader/>
      <Teleport to="#main">
        <AddTodo/>
        <TodoList/>
      </Teleport>
    <Footer/>
  </div>
</template>

<style scoped>



</style>
