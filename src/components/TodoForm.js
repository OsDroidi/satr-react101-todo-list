import React, { Component } from "react";

import shortid from "shortid";

export default class TodoForm extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });

    this.setState({
      text: "",
    });
    console.log(this.state.text);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="type your text here"
            style={{ display: "block" }}
          />
          <button onClick={this.handleSubmit}>Add item</button>
        </form>
      </>
    );
  }
}
