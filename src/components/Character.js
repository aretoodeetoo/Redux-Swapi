import React from "react";

const Character = props => {
  return (
  <div>
    <li>{props.character.name}</li>
  </div>  
  );
};

export default Character;
