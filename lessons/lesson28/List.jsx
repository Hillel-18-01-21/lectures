import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      title: "My list",
    };
    this.props = {
      list: [],
    };
  }

  render() {
    return (
      <div>
        <span>{this.state.title}</span>
        <ul>
            {this.props.list.map(e => <li>{e}</li>)}
        </ul>
      </div>
    );
  }
}

export default List;