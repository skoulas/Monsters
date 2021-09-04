import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Foufoutos", id: "aser1" },
        { name: "Drakoula", id: "aser2" },
        { name: "Zombie", id: "aser3" },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
export default App;
