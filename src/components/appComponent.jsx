import React from 'react'
import {Connect} from "./connect";
import {Driver} from "./driver";


export class AppComponent extends React.Component {

  render() {
    return (<div>
      {!this.props.connected ? (
        <Connect connect={this.props.connect}/>
      ) : (
        <Driver disconnect={this.props.connect}/>
      )}
    </div>);
  }
}
