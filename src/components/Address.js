// Component Code Goes Here
import React from 'react';

export class Address extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <div className="address">
        {this.props.street}, {this.props.city}
      </div>
    )
  }
}
