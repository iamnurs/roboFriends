import React, { Component } from "react";
import "../styles/App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"

class App extends Component {
  state = {
    searchingText: "",
    robots: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => this.setState({ robots: result }));
  }

  onSearchChange = event => {
    this.setState({
      searchingText: event.target.value
    });
  };

  render() {
    const { robots, searchingText } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchingText.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
