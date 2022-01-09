import { Component } from "react";
// import Profile from "./component/profile/index";
// import State from "./state/state";
// import Inputs from "./inputs/index.js";
// import UncontrolledForm from "./forms/uncontrolled";
import ControlledForm from "./forms/controlled-from";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Profile /> */}
        {/* <State /> */}
        {/* <Inputs /> */}
        {/* <UncontrolledForm /> */}
        <ControlledForm />
      </div>
    );
  }
}

export default App;
