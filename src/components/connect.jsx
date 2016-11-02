import * as React from 'react'
import {Baseplate} from "./baseplane";
import {BrickShape} from "./brickshape";
import {BluetoothDevice} from "../bluetooth/ble";

export class Connect extends React.Component {

    constructor(props, context) {
      super(props, context);

      this.bluetoothDevice = new BluetoothDevice("LEO", this.onDisconnected);
      this.bluetoothDevice.addService("sCommand", "0000ffe0-0000-1000-8000-00805f9b34fb");
      this.bluetoothDevice.addCharacteristic("sCommand", "cCommand", "0000ffe1-0000-1000-8000-00805f9b34fb");
    }

    render() {
        return (
            <Baseplate width={18} height={26}>
              <BrickShape bricks={this.props.shapes[0].cells} classShape="lego blue upper"/>
              <BrickShape bricks={this.props.shapes[1].cells} onClick={(e) => this.connect()} classShape="lego grey upper"/>
            </Baseplate>

        );
    }

    connect() {
      console.log("connexion");
      this.showMessage("Connexion à Léo en cours...");
    	this.bluetoothDevice.connect()
    	.then(() => {
    		return this.bluetoothDevice.getService("sCommand");
    	})
    	.then((bluetoothService) => {
    		return this.bluetoothService.getCharacteristic("cCommand");
    	})
    	.then(() => {
        this.showMessage("Vous êtes maintenant connecté à Léo... à vous de jouer !");
        setTimeout(() => {
          if (this.props.connect) {
            this.props.connect();
          }
        }, 3000);
    	})
      .catch(error => {
        this.showMessage("Erreur lors de la connexion à Léo : " + error);
        console.log(error);
        setTimeout(() => {
          this.showMessage();
        }, 3000);
      });
    }

    onDisconnected() {
      console.log('Device ' + this.bluetoothDevice.name + ' is disconnected.');
      if (this.props.disconnect) {
        this.props.disconnect();
      }
    }

    showMessage(msg){
      if (this.props.showMessage) {
        this.props.showMessage(msg);
      }
    }

}

Connect.defaultProps = {
  shapes : [{cells : [
              //L
              {x:1, y:2}, {x:1, y:3}, {x:1, y:4}, {x:1, y:5}, {x:1, y:6}, {x:2, y:6}, {x:3, y:6}, {x:4, y:6},
               //E
              {x:6, y:2}, {x:6, y:3}, {x:6, y:5}, {x:6, y:6},
              {x:7, y:2}, {x:8, y:2}, {x:9, y:2},
              {x:7, y:4}, {x:8, y:4},
              {x:7, y:6}, {x:8, y:6}, {x:9, y:6},
              // O
              {x:11, y:2}, {x:11, y:3}, {x:11, y:4}, {x:11, y:5}, {x:11, y:6},
              {x:12, y:2}, {x:13, y:2},
              {x:12, y:6}, {x:13, y:6}, {x:14, y:6},
              {x:14, y:3}, {x:14, y:4}, {x:14, y:5}
          ]
      },
      {cells : [
              {x:3, y:12}, {x:4, y:12}, {x:4, y:13}, {x:5, y:13}, {x:5, y:14}, {x:6, y:14}, {x:6, y:15},
              {x:3, y:20}, {x:4, y:20}, {x:4, y:19}, {x:5, y:19}, {x:5, y:18}, {x:6, y:18}, {x:6, y:17},
              {x:7, y:10}, {x:7, y:11}, {x:7, y:12}, {x:7, y:13}, {x:7, y:14}, {x:7, y:15}, {x:7, y:16}, {x:7, y:17}, {x:7, y:18}, {x:7, y:19}, {x:7, y:20}, {x:7, y:21}, {x:7, y:22},
              {x:8, y:10}, {x:8, y:11}, {x:8, y:12}, {x:8, y:13}, {x:8, y:14}, {x:8, y:15}, {x:8, y:16}, {x:8, y:17}, {x:8, y:18}, {x:8, y:19}, {x:8, y:20}, {x:8, y:21}, {x:8, y:22},
              {x:9, y:11}, {x:9, y:12}, {x:10, y:12}, {x:10, y:13}, {x:11, y:13}, {x:11, y:14}, {x:11, y:15}, {x:12, y:14},
              {x:10, y:15}, {x:10, y:16}, {x:9, y:16},
              {x:10, y:17}, {x:11, y:17}, {x:11, y:18}, {x:11, y:19}, {x:12, y:18},
              {x:10, y:19}, {x:10, y:20}, {x:9, y:20}, {x:9, y:21}
          ]
          }]
};
