import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <>
        {this.props.todo.text !== "" ? (
          <ul style={{ display: "flex" }}>
            <li
              style={{
                textDecoration: this.props.todo.complete ? "line-through" : "",
              }}
              onClick={this.props.toggleComplete}
            >
              {this.props.todo.text}
            </li>
            <button onClick={this.props.onDelete}>x</button>
          </ul>
        ) : null}
      </>
    );
  }
}
