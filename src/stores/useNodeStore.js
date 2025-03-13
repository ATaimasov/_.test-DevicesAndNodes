import { defineStore } from "pinia";
import { uid } from "uid";
import { useDeviceStore } from "./useDeviceStore";

export const useNodeStore = defineStore("nodeStore", {
  actions: {
    addNode(deviceID) {
      const deviceStore = useDeviceStore();
      const device = deviceStore.deviceList.find(
        (device) => device.id === deviceID,
      );
      const id = deviceID + "_" + uid().slice(0, 3);
      device.nodes.push({
        id: id,
        name: `Узел № ${id}`,
        editable: false,
      });
    },
    removeNode(deviceID, nodeID) {
      const deviceStore = useDeviceStore();
      const device = deviceStore.deviceList.find(
        (device) => device.id === deviceID,
      );
      const nodeIndex = device.nodes.findIndex((node) => node.id === nodeID);
      if (device) {
        device.nodes.splice(nodeIndex, 1);
        console.log(device.nodes);
      } else {
        console.error(`Устройства с id: ${deviceID} не найдено`);
      }
    },
    toggleNodeList(deviceID) {
      const deviceStore = useDeviceStore();
      const device = deviceStore.deviceList.find(
        (device) => device.id === deviceID,
      );
      if (device) {
        device.showNodes = !device.showNodes;
      } else {
        console.error(`Устройства с id: ${deviceID} не найдено`);
      }
    },
  },
});
