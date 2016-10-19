import * as React from 'react'

export class Baseplate extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
      var divs = [];
      for (var i=0; i < this.props.height; i++) {
        for (var j=0; j < this.props.width; j++) {
          divs.push(<div key={i+"_"+j} className="lego darkgrey" style={{width: "10px", height: "10px"}}/>);
        }
      }
        return (
          <div className="baseplate">
            {divs}
          </div>
        );
    }
}

Baseplate.defaultProps = {
    height: 10,
    width: 10
};
