import {BluetoothDevice} from "./bluetooth/ble";

const initialState = {
  connected: false,
  device: null
}


export class LeoReducer {
  reduce(state = initialState, action) {
    switch (action.type) {
      case ACTIONS.CONNECT:
        return Object.assign({}, state, {
          connected: true
        })
      case ACTIONS.DISCONNECT:
          return Object.assign({}, state, {
            connected: false, device: null
          })
      default:
        return state
    }
  }
}


export const ACTIONS = {
  CONNECT: "connect",
  DISCONNECT: "disconnect"
}
