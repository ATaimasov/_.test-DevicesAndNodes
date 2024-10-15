import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { uid } from 'uid'

export const useTodoStore = defineStore('todoStore', () => {
  const todoList = ref([])
 
  if (localStorage.getItem('todoList')) {
      todoList.value = JSON.parse(localStorage.getItem('todoList'))
  }

  watch(todoList, (newList) => {
    localStorage.setItem('todoList', JSON.stringify(newList))
  }, { deep: true })

  function addTodo() {
    todoList.value.push({
      id: uid(),
      title: '',
      completed: false
    })
  }

  function removeTodo(id) {
    todoList.value = todoList.value.filter((todo) => todo.id !== id)

    if (todoList.value.length === 0) {
      localStorage.removeItem('todoList')
    }
  }

  function removeAllTodos() {
    todoList.value = []
    console.log("",  todoList.value)
  }

  function removeCompletedTodos() {
    todoList.value = todoList.value.filter((todo) => !todo.completed)
  }

  function removeRemainingTodos() {
    todoList.value = todoList.value.filter((todo) => todo.completed)
  }

  
    
  return { todoList, addTodo, removeTodo, removeAllTodos, removeCompletedTodos, removeRemainingTodos }
})
