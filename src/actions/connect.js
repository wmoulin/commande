import { ACTIONS } from "../reducer";

export class ConnectAction {

  constructor(device) {
    this.type = ACTIONS.CONNECT;
    this.device = device;
  }

}
