<template>
    <div class="todo-list">
        <div v-if="todoList.length > 0" >
            <div   v-for="todo in todoList" :key="todo.id" >
                <TodoItem>
                    <CompleteIcon 
                    @click="completeTodo(todo)"
                    :style="getCompleteIconStyle(todo)"
                    />
                     <input 
                     :disabled="todo.completed"
                     :style = "getInputStyle(todo)"
                     type="text"
                     v-model="todo.title"
                     placeholder="Add text"
                     @keyup.enter="addTodo"
                     >
                    <RemoveTodo :todo="todo"/>
                </TodoItem>
            </div>
        </div>
        <div v-else>
            <h3>No todos</h3>
        </div>
    </div>
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue'
import RemoveTodo from '@/components/RemoveTodo.vue'
import CompleteIcon from '@/components/icons/CompleteIcon.vue'

import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/useTodoStore'

import { computed } from 'vue'

const store = useTodoStore()
const { todoList, addTodo } = storeToRefs(store)


const getCompleteIconStyle = computed(() => (todo) => {
    if (todo.title === '') {
      return { color: 'gray' }
    } else if (todo.completed) {
      return { color: 'green' }
    }  else {
      return { color: 'black' }
    }
})

const getInputStyle = computed(() => (todo) => ({
  textDecoration: todo.completed ? 'line-through' : 'none',
  color: todo.title === '' ? 'gray' : 'inherit'
}))

const completeTodo = (todo) => {
    if(todo.title !== '') {
        todo.completed = !todo.completed
    }
}

</script>

<style scoped>



.todo-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x: auto;
    max-height: 92%;
    scrollbar-color: #ccc transparent;
    scrollbar-width: thin;
}

input {
    border: 1px solid #ccc;
    width: 80%;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
}

</style>