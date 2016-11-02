import React from 'react'
import {Connect} from "./connect";
import {Driver} from "./driver";


export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {connected: false, device: null};
  }

  render() {
    return (<div>
      {!this.state.connected ? (
        <Connect connect={this.connect.bind(this)}  disconnect={this.disconnect.bind(this)}/>
      ) : (
        <Driver device={this.state.device}/>
      )}
    </div>);
  }

  connect(bleDevice) {
    this.setState({connected: true, device: bleDevice });
  }

  disconnect() {
    this.setState({connected: false, device: null });
  }
}
