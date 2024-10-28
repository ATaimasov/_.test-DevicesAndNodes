<template>
    <div class="node-list">
        <div v-if="nodes.length > 0" >
            <div   v-for="node in nodes" :key="node.id" class="node-item">
                <NodeItem>
                    <EditIcon 
                    @click="editElement(node)"
                    :style="getEditIconStyle(node)"
                    />
                     <input 
                     :disabled="!node.editable"
                     :style = "getInputStyle(node)"
                     type="text"
                     v-model="node.name"
                     >
                    <RemoveElement 
                    :node="node"
                    :type="'node'"
                    :device="device"
                    />
                </NodeItem>
            </div>
        </div>
        <div>
            <AddNode
            :deviceID = device.id
            />
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useNodeStore } from '@/stores/useNodeStore'
import { useCommonStore } from '@/stores/useCommonStore'
import NodeItem from '@/components/DeviceItem.vue'
import RemoveElement from '@/components/RemoveElement.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import AddNode from '@/components/AddNode.vue'

const { device} = defineProps({
  device: Object,
})

const nodeStore = useNodeStore();
const commonStore = useCommonStore();

const { nodeList } = nodeStore;
const { editElement, getEditIconStyle, getInputStyle } = commonStore;

const nodes = device.nodes;

</script>

<style scoped>



.node-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-x: auto;
    max-height: 60%;
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