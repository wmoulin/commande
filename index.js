import * as React from "react"
import * as ReactDOM from "react-dom";

//application
import {App} from "./src/app";

//redux
import { Provider } from "react-redux"
import { createStore } from "redux"
import { LeoReducer } from "./src/reducer"

let store = createStore(new LeoReducer().reduce)

/*ReactDOM.render(
    <Baseplate width={20} height={20}><BrickShape bricks={[{x:1, y:1}]}/><BrickShape bricks={[{x:2, y:2}]}/></Baseplate>,
    document.getElementById('app')
);*/
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);
/*ReactDOM.render(
    <Driver/>,
    document.getElementById('app')
);*/
