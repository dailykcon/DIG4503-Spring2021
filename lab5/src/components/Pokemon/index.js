import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={props.pokemon.sprites.front_default} />
        <h2>{this.props.name}</h2>
        <p>{this.props.id}</p>
      </div>
    );
  }
}
export default Pokemon;