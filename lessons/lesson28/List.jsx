import React, { Component } from "react";
import ListItem from "./ListItem.jsx";

class List extends Component {
  constructor() {
    super();
    this.state = {
      title: "My list",
      list: [],
    };
    this.props = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((e) => e.json())
      .then((list) => {
        this.setState({
          list,
        }); // -> { ...this.state, ...newState }
        return list;
      })
      .then((list) => {
        setTimeout(() => {
          const item = list.shift();
          this.setState({
            list: [{ ...item, title: "Custom title" }, ...list],
          });
        }, 1000);
      });
  }

  render() {
    console.count("List render function");
    return (
      <div>
        <span>{this.state.title}</span>
        <ul>
          {this.state.list.map((e) => (
            <ListItem title={e.title} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
