import * as React from 'react'
import {Baseplate} from "./baseplane";
import {BrickShape} from "./brickshape";
import {BluetoothDevice} from "../bluetooth/ble";

export class Driver extends React.Component {

    constructor(props, context) {
      super(props, context);

      this.bluetoothDevice = new BluetoothDevice("LEO", this.onDisconnected);
      this.bluetoothDevice.addService("sCommand", "0000ffe0-0000-1000-8000-00805f9b34fb");
      this.bluetoothDevice.addCharacteristic("sCommand", "cCommand", "0000ffe1-0000-1000-8000-00805f9b34fb");
    }

    render() {
        return (
            <Baseplate width={18} height={26}>
              <BrickShape bricks={this.props.shapes[0].cells} classShape="grey upper" onClick={(e) => this.connect(e)}/>
              <BrickShape bricks={this.props.shapes[1].cells} classShape="grey upper" classShapeClick="blue upper"/>
              <BrickShape bricks={this.props.shapes[2].cells} classShape="grey upper" classShapeClick="blue upper"/>
              <BrickShape bricks={this.props.shapes[3].cells} classShape="grey upper" classShapeClick="blue upper"/>
              <BrickShape bricks={this.props.shapes[4].cells} classShape="grey upper"/>
              <BrickShape bricks={this.props.shapes[5].cells} classShape="grey upper"/>
              <BrickShape bricks={this.props.shapes[6].cells} classShape="grey upper"/>
              <BrickShape bricks={this.props.shapes[7].cells} classShape="grey upper"/>
              <BrickShape bricks={this.props.shapes[8].cells} classShape="grey upper"/>
              <BrickShape bricks={this.props.shapes[9].cells} classShape="grey upper" classShapeClick="blue upper"/>
            </Baseplate>

        );
    }

    click() {
      console.log("connexion");
    	this.bluetoothDevice.connect()
    	.then(() => {
    		return this.bluetoothDevice.getService("sCommand");
    	})
    	.then((bluetoothService) => {
    		return this.bluetoothService.getCharacteristic("cCommand");
    	})
    	.then(() => {
    		//document.getElementById("connectBtn").onclick=function(){disconnect()};
    	})
      .catch(error => { console.log(error); });
    }

    onDisconnected() {
      console.log('Device ' + this.bluetoothDevice.name + ' is disconnected.');
    }
}

Driver.defaultProps = {
  shapes : [{cells : [
              //HAUT
              {x:9, y:2}, {x:10, y:2},
              {x:8, y:3}, {x:9, y:3}, {x:10, y:3}, {x:11, y:3},
              {x:7, y:4}, {x:8, y:4}, {x:9, y:4}, {x:10, y:4},{x:11, y:4}, {x:12, y:4},
              {x:6, y:5}, {x:7, y:5}, {x:8, y:5}, {x:9, y:5},{x:10, y:5}, {x:11, y:5}, {x:12, y:5}, {x:13, y:5}
          ]
      },
      {cells : [
            //BAS
            {x:9, y:17}, {x:10, y:17},
            {x:8, y:16}, {x:9, y:16}, {x:10, y:16}, {x:11, y:16},
            {x:7, y:15}, {x:8, y:15}, {x:9, y:15}, {x:10, y:15}, {x:11, y:15}, {x:12, y:15},
            {x:6, y:14}, {x:7, y:14}, {x:8, y:14}, {x:9, y:14}, {x:10, y:14}, {x:11, y:14}, {x:12, y:14}, {x:13, y:14}
        ]
      },
      {cells : [
            //GAUCHE
            {x:2, y:9}, {x:2, y:10},
            {x:3, y:8}, {x:3, y:9}, {x:3, y:10}, {x:3, y:11},
            {x:4, y:7}, {x:4, y:8}, {x:4, y:9}, {x:4, y:10}, {x:4, y:11}, {x:4, y:12},
            {x:5, y:6}, {x:5, y:7}, {x:5, y:8}, {x:5, y:9}, {x:5, y:10}, {x:5, y:11}, {x:5, y:12}, {x:5, y:13}
        ]
      },
      {cells : [
            //DROITE
            {x:17, y:9}, {x:17, y:10},
            {x:16, y:8}, {x:16, y:9}, {x:16, y:10}, {x:16, y:11},
            {x:15, y:7}, {x:15, y:8}, {x:15, y:9}, {x:15, y:10}, {x:15, y:11}, {x:15, y:12},
            {x:14, y:6}, {x:14, y:7}, {x:14, y:8}, {x:14, y:9}, {x:14, y:10}, {x:14, y:11}, {x:14, y:12}, {x:14, y:13}
        ]
      },
      {cells : [
            //HAUT GAUCHE
            {x:3, y:3}, {x:4, y:3}, {x:5, y:3},
            {x:3, y:4}, {x:3, y:5}
        ]
      },
      {cells : [
            //HAUT DROITE
            {x:14, y:3}, {x:15, y:3}, {x:16, y:3},
            {x:16, y:4}, {x:16, y:5}
        ]
      },
      {cells : [
            //BAS GAUCHE
            {x:3, y:14}, {x:3, y:15}, {x:3, y:16},
            {x:4, y:16}, {x:5, y:16}
        ]
      },
      {cells : [
            //BAS DROITE
            {x:14, y:16}, {x:15, y:16}, {x:16, y:16},
            {x:16, y:14}, {x:16, y:15}
        ]
      },
      {cells : [
            //CROIX
            {x:8, y:20}, {x:11, y:20},
            {x:9, y:21}, {x:10, y:21}, {x:9, y:22}, {x:10, y:22},
            {x:8, y:23}, {x:11, y:23}
        ]
      },
      {cells : [
            //TOUPIE
            {x:7, y:7}, {x:8, y:7}, {x:9, y:7}, {x:10, y:7}, {x:11, y:7}, {x:12, y:7},
            {x:7, y:8}, {x:7, y:9}, {x:7, y:10}, {x:7, y:11}, {x:7, y:12},
            {x:8, y:12}, {x:9, y:12}, {x:10, y:12}, {x:11, y:12}, {x:12, y:12},
            {x:12, y:9}, {x:12, y:10}, {x:12, y:11},
            {x:9, y:9}, {x:10, y:9}, {x:11, y:9},
            {x:9, y:10}
        ]
      }]
};
