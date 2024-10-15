<template>
    <div class="todo-list">
        <div   v-for="todo in todoList" :key="todo.id">
            <TodoItem class="todo-item">
                {{ todo.title }}
                <RemoveTodo/>
            </TodoItem>
        </div>
    </div>
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue'
import RemoveTodo from '@/components/RemoveTodo.vue'

import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/useTodoStore'

const store = useTodoStore()
const { todoList } = storeToRefs(store)
</script>

<style scoped>

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.todo-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

</style>