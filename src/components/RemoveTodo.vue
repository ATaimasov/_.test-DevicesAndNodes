<template>
    <div>
        <RemoveIcon class="remove-icon" @click="removeTodo(todo.id)"></RemoveIcon>
    </div>
</template>

<script setup>
import RemoveIcon from '@/components/icons/InteractionIcon.vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/useTodoStore'

const { todo } = defineProps({
  todo: Object
})

const store = useTodoStore()
const { removeTodo } = store


</script>

<style  scoped>
.remove-icon {
    transform: rotate(45deg);
}

.remove-icon:hover {
    transform: rotate(135deg);
 }




</style>