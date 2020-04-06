import React from "react";

import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

class App extends React.Component {
  state = {
    idx: 4,
    users: [
      { name: "Mehmet", state: "online", id: 1 },
      { name: "Ali", state: "offline", id: 2 },
      { name: "Veli", state: "busy", id: 3 }
    ]
  };

  deleteMethod =(id) => {
    console.log(id);
    let tUsers = this.state.users.filter(us => {
      return us.id !== id
    })
  }

  addMethod = name => {
    console.log("app modulu icerinde", name);
    let id = this.state.idx;
    let user = {
      name: name,
      state: "online",
      id: id + 1
    };
    let tUsers = [...this.state.users, user];
    this.setState({
      users: tUsers
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <UserList users={this.state.users} delMethod={this.deleteMethod} />

            <hr />
            <AddUser addMethod={this.addMethod} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;


7;31 egitim serisi 13