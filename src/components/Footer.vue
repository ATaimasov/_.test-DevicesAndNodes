<template>
    <Teleport to="#footer">
            <div class="statistic-item">
                <p>Todos: {{ todoList.length }}</p>
                <DeleteIcon @click="store.removeAllTodos"
                :style="todoList.length === 0 ? { color: 'gray', pointer: 'none' } : ''"
                />
            </div>
            <div class="statistic-item">
                <p>Completed: {{ todoList.filter((todo) => todo.completed).length }}</p>
                <DeleteIcon @click="store.removeCompletedTodos"
                :style="todoList.filter((todo) => todo.completed).length === 0 ? { color: 'gray', pointer: 'none' } : ''"
                />
            </div>
            <div class="statistic-item">
                <p>Remaining: {{ todoList.filter((todo) => !todo.completed).length }}</p>
                <DeleteIcon @click="store.removeRemainingTodos"
                :style="todoList.filter((todo) => !todo.completed).length === 0 ? { color: 'gray', pointer: 'none' } : ''"
                />
            </div>
    </Teleport>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/useTodoStore'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'


const store = useTodoStore()
const { todoList } = storeToRefs(store)

</script>

<style  scoped>

.statistic-item {
   display: flex;
   flex-direction: column;
   gap: 5px;
   align-items: center; 
   
}

</style>