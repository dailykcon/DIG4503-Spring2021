  
import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props.sprites} />
        <h2>{this.props.name}</h2>
        <p>{this.props.id}</p>
      </div>
    );
  }
}
export default Pokemon;