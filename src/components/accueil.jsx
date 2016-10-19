import * as React from 'react'

export class Greeting extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <h1>Salut , {this.props.name}</h1>
        );
    }
}

Greeting.defaultProps = {
    name: "L'Etranger"
};
