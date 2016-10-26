import * as React from 'react'
import * as ReactDOM from "react-dom";

import {Greeting} from "./src/components/accueil";
import {Driver} from "./src/components/driver";
import {Baseplate} from "./src/components/baseplane";
import {BrickShape} from "./src/components/brickshape";

/*ReactDOM.render(
    <Baseplate width={20} height={20}><BrickShape bricks={[{x:1, y:1}]}/><BrickShape bricks={[{x:2, y:2}]}/></Baseplate>,
    document.getElementById('app')
);*/
ReactDOM.render(
    <Greeting/>,
    document.getElementById('app')
);
/*ReactDOM.render(
    <Driver/>,
    document.getElementById('app')
);*/
