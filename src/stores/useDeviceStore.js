import { defineStore } from "pinia";
import { uid } from "uid";
import { useLocalStorage } from "@vueuse/core";

export const useDeviceStore = defineStore("deviceStore", {
  state: () => ({
    deviceList: useLocalStorage("deviceList", []),
  }),
  actions: {
    addDevice() {
      const id = uid().slice(0, 3);

      const newDevice = {
        id: id,
        name: `Устройство № ${id}`,
        nodes: [],
        showNodes: false,
        editable: false,
      };

      this.deviceList.push(newDevice);
    },
    removeDevice(deviceID) {
      const deviceIndex = this.deviceList.findIndex(
        (device) => device.id === deviceID,
      );
      if (deviceIndex !== -1) {
        this.deviceList.splice(deviceIndex, 1);
      }
    },
    removeAllDevices() {
      this.deviceList = [];
    },
  },
});
