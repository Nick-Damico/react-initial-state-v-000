// Component Code Goes Here
import React from 'react';

export class ToggleButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEnabled: false
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    const newState = this.state.isEnabled ? false : true;
    this.setState({ isEnabled: newState })
  }

  render() {
    return(
      <button className="toggle-button" onClick={this.toggleButton}>
        I am Toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}
