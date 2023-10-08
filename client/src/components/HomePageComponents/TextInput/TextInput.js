import React, { Component } from "react";
import "./TextInput.scss";

class TextInput extends Component {
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
      <div>
        <input
          className="textbox"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        {/* <p className="paragraph">Input Value: {this.state.inputValue}</p> */}
      </div>
    );
  }
}

export default TextInput;
