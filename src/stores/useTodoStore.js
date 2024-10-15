import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', () => {
  const todoList = ref([])

  function addTodo() {
    todoList.value.push({
      title: 'New Todo'
    })
  }

  return { todoList, addTodo }
})
