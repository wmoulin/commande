import {BluetoothDevice} from "./bluetooth/ble";

export class LeoStore {

  constructor(deviceName) {
    this.bluetoothDevice = new BluetoothDevice(deviceName);
  }
}
