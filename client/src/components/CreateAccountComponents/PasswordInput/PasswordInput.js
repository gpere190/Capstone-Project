import React, { Component } from "react";
import "./PasswordInput.scss";

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // Initialize the input value to an empty string
    };
  }

  handleInputChange = (event) => {
    // Update the state with the new input value when it changes
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <input
        className="textbox"
        type="text"
        placeholder="Password"
        value={this.state.inputValue}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default PasswordInput;
