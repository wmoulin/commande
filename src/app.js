import { connect } from "react-redux";
import { AppComponent } from "./components/appComponent";
import { ConnectAction } from "./actions/connect";
import { DisconnectAction } from "./actions/disconnect";

function mapStateToProps(state) {
  return { connected:  state.connected};
}

function mapDispatchToProps(dispatch) {
  return {
    connect: new ConnectAction({}),
    disconnect: new DisconnectAction()
  };
}



export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
