<template>
    <div class="add-todo__container">
        <AddIcon class="add-icon" @click="addTodo"></AddIcon>
        <h2>Add Todo</h2>
    </div>
</template>

<script setup>
import AddIcon from '@/components/icons/InteractionIcon.vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/useTodoStore'

const store = useTodoStore()
const { addTodo } = store



</script>

<style scoped>

.add-todo__container {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    padding: 15px;
}

.add-icon:hover {
    transform: rotate(90deg);
 }


</style>