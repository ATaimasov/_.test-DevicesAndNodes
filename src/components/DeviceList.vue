<template>
    <div class="device-list">
        <div v-if="deviceList.length > 0" >
            <div   v-for="device in deviceList" :key="device.id" >
                <DeviceItem class="device-item">
                    <div>
                        <EditIcon 
                        @click="editElement(device)"
                        :style="getEditIconStyle(device)"
                        />
                        <DropDownIcon 
                        @click="toggleNodeList(device.id)"
                        :style="getRotatedStyle(device)"
                        />
                    </div>
                     <input 
                     :disabled="!device.editable"
                     :style = "getInputStyle(device)"
                     type="text"
                     v-model="device.name"
                     >
                    <RemoveElement 
                    :type ="'device'"
                    :device="device"/>
                </DeviceItem>
                <div v-if="device.showNodes" class="node-list__container">
                    <NodeList
                    :device = device
                    />
                </div>
            </div>
        </div>
        <div v-else>
            <h3>Устройств нет</h3>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useDeviceStore } from '@/stores/useDeviceStore'
import { useCommonStore } from '@/stores/useCommonStore'
import { useNodeStore } from '@/stores/useNodeStore'
import DeviceItem from '@/components/DeviceItem.vue'
import RemoveElement from '@/components/RemoveElement.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import DropDownIcon from '@/components/icons/DropDownIcon.vue'
import NodeList from '@/components/NodeList.vue'


const deviceStore = useDeviceStore();
const commonStore = useCommonStore();
const nodeStore = useNodeStore();

const { deviceList } = storeToRefs(deviceStore);
const devices = computed(() => deviceList.value);
const { toggleNodeList } = nodeStore;

const { editElement, getEditIconStyle, getInputStyle, getRotatedStyle} = commonStore;


</script>

<style scoped>



.device-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x: auto;
    max-height: 92%;
    scrollbar-color: #ccc transparent;
    scrollbar-width: thin;
    scrollbar-gutter: stable;
}

.device-item *:first-child {
    display: flex;
    gap: 10px;
    padding: 0 5px;
}

input {
    border: 1px solid #ccc;
    width: 80%;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
}

.node-list__container {
    max-width: 70%;
    margin: 15px auto;
}

</style>