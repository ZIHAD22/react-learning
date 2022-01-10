import { Component } from "react";
// import Profile from "./component/profile/index";
// import State from "./components/state/state";
// import Inputs from "./components/inputs/index.js";
// import UncontrolledForm from "./components/forms/uncontrolled";
// import ControlledForm from "./components/forms/controlled-from";
// import SplitForm from "./components/split-form/index";
import SignupForm from "./components/signup-form/index";

class App extends Component {
  state = {
    users: [],
  };

  createUser = (user) => {
    user.id = new Date().getTime().toLocaleString();
    this.setState({
      users: [...this.state.users, user],
    });
  };

  render() {
    return (
      <div>
        {/* <Profile /> */}
        {/* <State /> */}
        {/* <Inputs /> */}
        {/* <UncontrolledForm /> */}
        {/* <ControlledForm /> */}
        {/* <SplitForm /> */}
        <SignupForm createUser={this.createUser} />
        <div style={{ margin: "50px auto", textAlign: "center" }}>
          <h1>All Registered Users</h1>
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name} = {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
